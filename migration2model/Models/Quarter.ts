import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import SalaryDeduction from './SalaryDeduction';
import MovingIn from './MovingIn';
import MovingOut from './MovingOut';

export default class Quarter extends BaseModel {
    public static table = 'quarters';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'deductionId' })
    public deductionId: bigint;

    @column({ columnName: 'applicationType' })
    public applicationType: string;

    @column({ columnName: 'isOccupied' })
    public isOccupied: boolean;

    @column.dateTime({ columnName: 'movingInDate' })
    public movingInDate: DateTime;

    @column.dateTime({ columnName: 'movingOutDate' })
    public movingOutDate: DateTime;

    @column({ columnName: 'rentRate' })
    public rentRate: number;

    @column({ columnName: 'quarterDetails' })
    public quarterDetails: string;

    @column({ columnName: 'active' })
    public active: boolean;

    @column({ columnName: 'createdBy' })
    public createdBy: string;

    @column.dateTime({ columnName: 'createdAt', autoCreate: true })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy' })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,

    })
    public modifiedAt: DateTime;

    @belongsTo(() => SalaryDeduction, { foreignKey: 'deductionId' })
    public deduction: BelongsTo<typeof SalaryDeduction>;

    @hasOne(() => MovingIn, { foreignKey: 'quartersId' })
    public movingIn: HasOne<typeof MovingIn>;

    @hasOne(() => MovingOut, { foreignKey: 'quartersId' })
    public movingOut: HasOne<typeof MovingOut>;
}