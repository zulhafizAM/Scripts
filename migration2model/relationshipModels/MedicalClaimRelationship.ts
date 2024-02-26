import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Clinic from 'App/Models/Clinic';
import AnnualMedicalAllocation from 'App/Models/AnnualMedicalAllocation';
import MedicalClaimProcess from 'App/Models/MedicalClaimProcess';

export class medicalClaimRelationship extends BaseModel{
    @hasOne(() => MedicalClaimProcess, { foreignKey: 'claimId' })
    public MedicalClaimProcessAsclaim: HasOne<typeof MedicalClaimProcess>;

    @belongsTo(() => AnnualMedicalAllocation, { foreignKey: 'employeeMedicalAllocId' })
    public AnnualMedicalAllocationsAsemployeeMedicalAlloc: BelongsTo<typeof AnnualMedicalAllocation>;

    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public ClinicAsclinic: BelongsTo<typeof Clinic>;
}