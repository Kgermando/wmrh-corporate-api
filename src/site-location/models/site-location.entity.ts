import { Personnel } from "src/personnel/models/personnel.entity";
import { Corporate } from "src/corporate/models/corporate.entity";
import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
 
@Entity('site_locations')
export class SiteLocation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    site_location: string; // Nom du site 

    @Column()
    manager: string;

    @Column()
    adresse: string;

    @OneToMany(() => Personnel, (item) => item.site_locations, {cascade: true})
    personnels: Personnel[];

    @ManyToOne(() => Corporate, (co)=> co.site_locations, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    corporate: Corporate;

    @Column()    
    signature: string;

    @Column()
    created: Date;

    @Column()
    update_created : Date;

    @Column()
    entreprise: string;
    
    @Column()
    code_entreprise: string;
}