import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';

export default class Education extends BaseModel {
    public static table = 'educations';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'personalDetailId', serializeAs: null })
    public personalDetailId: bigint;

    @column({ columnName: 'type' })
    public type: string;

    @column({ columnName: 'year' })
    public year: number;

    @column({ columnName: 'finalGrade' })
    public finalGrade: string;

    @column({ columnName: 'field' })
    public field: string;

    @column({ columnName: 'remarks' })
    public remarks: string;

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

    @belongsTo(() => PersonalDetail, {
        foreignKey: 'personalDetailId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public personalDetail: BelongsTo<typeof PersonalDetail>;
}
