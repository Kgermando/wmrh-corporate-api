import { IsNotEmpty } from "class-validator";
import { Personnel } from "src/personnel/models/personnel.entity";
import { Corporate } from "src/corporate/models/corporate.entity";

export class DepartementCreateDto { 
    @IsNotEmpty()
    departement: string; 

    personnels: Personnel[];

    corporate: Corporate;

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 

    @IsNotEmpty()
    entreprise: string;
    
    @IsNotEmpty()
    code_entreprise: string;
}