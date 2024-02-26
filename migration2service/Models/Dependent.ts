import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';

export default class Dependent extends BaseModel {
    public static table = 'dependents';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'personalDetailId' })
    public personalDetailId: bigint;

    @column({ columnName: 'alternativeName' })
    public alternativeName: string;

    @column({ columnName: 'isMalaysian' })
    public isMalaysian: boolean;

    @column({ columnName: 'identityDocumentType' })
    public identityDocumentType: string;

    @column({ columnName: 'identityDocumentNumber' })
    public identityDocumentNumber: string;

    @column({ columnName: 'relationship' })
    public relationship: string;

    @column({ columnName: 'gender' })
    public gender: string;

    @column.dateTime({ columnName: 'marriageDate' })
    public marriageDate: DateTime;

    @column({ columnName: 'inSchool' })
    public inSchool: boolean;

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

    @belongsTo(() => PersonalDetail, { foreignKey: 'personalDetailId' })
    public personalDetail: BelongsTo<typeof PersonalDetail>;
}
