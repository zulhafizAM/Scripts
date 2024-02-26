import { BaseModel, hasMany,belongsTo, HasMany, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MedicalClaim from 'App/Models/MedicalClaim';

export class annualMedicalAllocationRelationship extends BaseModel{
    @hasMany(() => MedicalClaim, { foreignKey: 'employeeMedicalAllocId' })
    public MedicalClaimsAsemployeeMedicalAlloc: HasMany<typeof MedicalClaim>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}