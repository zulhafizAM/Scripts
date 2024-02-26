import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import SalaryDeduction from './SalaryDeduction';
import MovingIn from './MovingIn';
import MovingOut from './MovingOut';

export default class Quarter extends BaseModel {
    public static table = 'quarters';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'deductionId', serializeAs: null })
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

    @column({ columnName: 'active', serializeAs: null })
    public active: boolean;

    @column({ columnName: 'createdBy', serializeAs: null })
    public createdBy: string;

    @column.dateTime({
        columnName: 'createdAt',
        autoCreate: true,
        serializeAs: null,
    })
    public createdAt: DateTime;

    @column({ columnName: 'modifiedBy', serializeAs: null })
    public modifiedBy: string;

    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
        serializeAs: null,
    })
    public modifiedAt: DateTime;

    @belongsTo(() => SalaryDeduction, {
        foreignKey: 'deductionId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public deduction: BelongsTo<typeof SalaryDeduction>;

    @hasOne(() => MovingIn, {
        foreignKey: 'quartersId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public movingIn: HasOne<typeof MovingIn>;

    @hasOne(() => MovingOut, {
        foreignKey: 'quartersId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public movingOut: HasOne<typeof MovingOut>;
}
