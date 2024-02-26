import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Clinic from 'App/Models/Clinic';
import ClinicClaimProcess from 'App/Models/ClinicClaimProcess';

export class clinicClaimRelationship extends BaseModel{
    @hasOne(() => ClinicClaimProcess, { foreignKey: 'claimId' })
    public ClinicClaimProcessAsclaim: HasOne<typeof ClinicClaimProcess>;

    @belongsTo(() => Clinic, { foreignKey: 'clinicId' })
    public ClinicsAsclinic: BelongsTo<typeof Clinic>;
}