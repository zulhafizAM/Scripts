import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import WithoutPayLeaveProcess from 'App/Models/WithoutPayLeaveProcess';

export default class WithoutPayLeaveRelationship extends BaseModel {
    @hasOne(() => WithoutPayLeaveProcess, { foreignKey: 'withoutPayLeaveId' })
    public WithoutPayLeaveProcessAswithoutPayLeave: HasOne<typeof WithoutPayLeaveProcess>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;
}
