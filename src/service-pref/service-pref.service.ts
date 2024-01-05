import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { DataSource, Repository } from 'typeorm';
import { ServicePref } from './models/service-pref.entity';

@Injectable()
export class ServicePrefService extends AbstractService {
    constructor(
        @InjectDataSource() private dataSource: DataSource,
        @InjectRepository(ServicePref) private readonly servicePrefRepository: Repository<ServicePref>
    ) {
        super(servicePrefRepository); 
    }

    findGetAll(id): Promise<any[]> {
        return this.dataSource.query(`
            SELECT *
            FROM service_prefs 
            WHERE "corporateId"='${id}' ORDER BY created ASC;
        `);
    }

    allGet(code_entreprise): Promise<any[]> {
        return this.repository.find({
            relations: {
                personnels: true,
            },
            where: {code_entreprise},
            order: {'created': 'DESC'}
        }); 
    }


    async findGetOne(condition): Promise<any> {
        return await this.repository.findOne({
            where: condition,
            relations: {
                personnels: true,
            }
        })
    } 
}
