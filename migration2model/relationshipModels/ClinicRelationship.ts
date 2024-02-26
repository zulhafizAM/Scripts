import {
    BaseModel,
    hasMany,
    HasMany,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import District from 'App/Models/District';
import ClinicApproveProcess from 'App/Models/ClinicApproveProcess';
import ClinicClaim from 'App/Models/ClinicClaim';
import MedicalClaim from 'App/Models/MedicalClaim';
import Permission from 'App/Models/Permission';

export class clinicRelationship extends BaseModel {
    @hasMany(() => MedicalClaim, { foreignKey: 'clinicId' })
    public MedicalClaimsAsclinic: HasMany<typeof MedicalClaim>;

    @hasMany(() => ClinicClaim, { foreignKey: 'clinicId' })
    public ClinicClaimsAsclinic: HasMany<typeof ClinicClaim>;

    @hasOne(() => ClinicApproveProcess, { foreignKey: 'clinicId' })
    public ClinicApprovalProcessAsclinic: HasOne<typeof ClinicApproveProcess>;

    @hasMany(() => District, { foreignKey: 'districtId' })
    public DistrictAsdistrict: HasMany<typeof District>;

    @hasOne(() => Permission, { foreignKey: 'roleId' })
    public permissionAsroleId: HasOne<typeof Permission>;
}
