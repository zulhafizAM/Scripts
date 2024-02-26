import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';
import State from './State';

export default class NextOfKin extends BaseModel {
    public static table = 'nextOfKins';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

    @column({ columnName: 'personalDetailId', serializeAs: null })
    public personalDetailId: bigint;

    @column({ columnName: 'stateId', serializeAs: null })
    public stateId: bigint;

    @column({ columnName: 'alternativeName' })
    public alternativeName: string;

    @column({ columnName: 'isMalaysian' })
    public isMalaysian: boolean;

    @column({ columnName: 'identityDocumentType' })
    public identityDocumentType: string;

    @column({ columnName: 'identityDocumentNumber' })
    public identityDocumentNumber: string;

    @column.dateTime({ columnName: 'birthDate' })
    public birthDate: DateTime;

    @column({ columnName: 'relationship' })
    public relationship: string;

    @column({ columnName: 'gender' })
    public gender: string;

    @column({ columnName: 'phoneNumber' })
    public phoneNumber: string;

    @column.dateTime({ columnName: 'marriageDate' })
    public marriageDate: DateTime;

    @column({ columnName: 'inSchool' })
    public inSchool: boolean;

    @column({ columnName: 'homeNumber' })
    public homeNumber: string;

    @column({ columnName: 'isLKIMStaff' })
    public isLKIMStaff: boolean;

    @column({ columnName: 'position' })
    public position: string;

    @column({ columnName: 'taxNumber' })
    public taxNumber: string;

    @column({ columnName: 'occupation' })
    public occupation: string;

    @column({ columnName: 'company' })
    public company: string;

    @column({ columnName: 'companyAddress' })
    public companyAddress: string;

    @column({ columnName: 'address' })
    public address: string;

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

    @belongsTo(() => State, {
        foreignKey: 'stateId',
        onQuery: (query) => {
            query.where('active', true);
        },
    })
    public state: BelongsTo<typeof State>;
}
