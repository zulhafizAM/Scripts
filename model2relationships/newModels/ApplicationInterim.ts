import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import EmploymentInterim from './EmploymentInterim';
import ApplicationInterimProcess from './ApplicationInterimProcess';
import ChecklistInterim from './ChecklistInterim';

export default class ApplicationInterim extends BaseModel {
    public static table = 'applicationInterims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ApplicationInterim>((query) => {
        query
            .preload('interim')
            .preload('applicationInterimProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('approver', employeePreloads)
            )
            .preload('checklistInterim');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'interimId', serializeAs: null })
    public interimId: bigint;
    
    @column({ columnName: 'isSkipSeniority' })
    public isSkipSeniority: boolean;
    
    @column({ columnName: 'skippingRemark' })
    public skippingRemark: string;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
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
    
    @belongsTo(() => EmploymentInterim, {
        foreignKey: 'interimId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public interim: BelongsTo<typeof EmploymentInterim>;
    
    @hasOne(() => ApplicationInterimProcess, {
        foreignKey: 'applicationId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public applicationInterimProcess: HasOne<typeof ApplicationInterimProcess>;
    
    @hasOne(() => ChecklistInterim, {
        foreignKey: 'applicationId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public checklistInterim: HasOne<typeof ChecklistInterim>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('interim')
            .preload('applicationInterimProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('verifier', employeePreloads)
                    .preload('approver', employeePreloads)
            )
            .preload('checklistInterim');
    }
}