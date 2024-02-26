import { BaseModel,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';

export class excellenceAwardHistoryRelationship extends BaseModel{
    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}