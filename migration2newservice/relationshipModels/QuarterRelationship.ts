import { BaseModel, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import SalaryDeduction from 'App/Models/SalaryDeduction';
import MovingIn from 'App/Models/MovingIn';
import MovingOut from 'App/Models/MovingOut';

export default class QuarterRelationship extends BaseModel {
	@hasOne(() => MovingIn, { foreignKey: 'quartersId' })
    public MovingInAsquarters: HasOne<typeof MovingIn>;

    @hasOne(() => MovingOut, { foreignKey: 'quartersId' })
    public MovingOutAsquarters: HasOne<typeof MovingOut>;

    @belongsTo(() => SalaryDeduction, { foreignKey: 'deductionId' })
    public SalaryDeductionAsdeduction: BelongsTo<typeof SalaryDeduction>;
}
