import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import AnnualMedicalAllocation from 'App/Models/AnnualMedicalAllocation';
import ClinicApproveProcess from 'App/Models/ClinicApproveProcess';
import ClinicClaimProcess from 'App/Models/ClinicClaimProcess';
import MedicalClaimProcess from 'App/Models/MedicalClaimProcess';
export default class employeeToMedicalRelationship extends BaseModel{
    @hasMany(() => AnnualMedicalAllocation, { foreignKey: 'employeeId'})
    public AnnualMedicalAllocationAsemployee: HasMany<typeof AnnualMedicalAllocation>;

    @hasMany(() => MedicalClaimProcess, { foreignKey: 'secretaryApproverId'})
    public MedicalClaimProcessAssecretaryApprover: HasMany<typeof MedicalClaimProcess>;

    @hasMany(() => MedicalClaimProcess, { foreignKey: 'supporterId'})
    public MedicalClaimProcessAssupporter: HasMany<typeof MedicalClaimProcess>;

    @hasMany(() => MedicalClaimProcess, { foreignKey: 'appointedApproverId'})
    public MedicalClaimProcessAsappointedApprover: HasMany<typeof MedicalClaimProcess>;

    @hasMany(() => ClinicClaimProcess, { foreignKey: 'secretaryApproverId'})
    public ClinicClaimProcessAssecretaryApprover: HasMany<typeof ClinicClaimProcess>;

    @hasMany(() => ClinicClaimProcess, { foreignKey: 'supporterId'})
    public ClinicClaimProcessAssupporter: HasMany<typeof ClinicClaimProcess>;

    @hasMany(() => ClinicClaimProcess, { foreignKey: 'appointedApproverId'})
    public ClinicClaimProcessAsappointedApprover: HasMany<typeof ClinicClaimProcess>;

    @hasMany(() => ClinicApproveProcess, { foreignKey: 'confirmerId'})
    public ClinicApprovalProcessAsconfirmer: HasMany<typeof ClinicApproveProcess>;

    @hasMany(() => ClinicApproveProcess, { foreignKey: 'supporterId'})
    public ClinicApprovalProcessAssupporter: HasMany<typeof ClinicApproveProcess>;

    @hasMany(() => ClinicApproveProcess, { foreignKey: 'approverId'})
    public ClinicApprovalProcessAsapprover: HasMany<typeof ClinicApproveProcess>;
}