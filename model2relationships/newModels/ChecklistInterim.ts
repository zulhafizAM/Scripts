import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ChecklistInterim extends BaseModel {
    public static table = 'checklistInterims';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ChecklistInterim>((query) => {
        query
            .preload('preparer', employeePreloads)
            .preload('checker', employeePreloads);
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'preparerId', serializeAs: null })
    public preparerId: bigint;
    
    @column({ columnName: 'checkerId', serializeAs: null })
    public checkerId: bigint;
    
    @column({ columnName: 'applicationLetterStatus' })
    public applicationLetterStatus: boolean;
    
    @column({ columnName: 'applicationLetterCheck' })
    public applicationLetterCheck: boolean;
    
    @column({ columnName: 'certifiedFormStatus' })
    public certifiedFormStatus: boolean;
    
    @column({ columnName: 'certifiedFormCheck' })
    public certifiedFormCheck: boolean;
    
    @column({ columnName: 'organisationalChartStatus' })
    public organisationalChartStatus: boolean;
    
    @column({ columnName: 'organisationalChartCheck' })
    public organisationalChartCheck: boolean;
    
    @column({ columnName: 'jobDescriptionStatus' })
    public jobDescriptionStatus: boolean;
    
    @column({ columnName: 'jobDescriptionCheck' })
    public jobDescriptionCheck: boolean;
    
    @column({ columnName: 'orderLetterStatus' })
    public orderLetterStatus: boolean;
    
    @column({ columnName: 'orderLetterCheck' })
    public orderLetterCheck: boolean;
    
    @column({ columnName: 'leaveStatementStatus' })
    public leaveStatementStatus: boolean;
    
    @column({ columnName: 'leaveStatementCheck' })
    public leaveStatementCheck: boolean;
    
    @column({ columnName: 'documentListStatus' })
    public documentListStatus: boolean;
    
    @column({ columnName: 'documentListCheck' })
    public documentListCheck: boolean;
    
    @column({ columnName: 'justificationStatus' })
    public justificationStatus: boolean;
    
    @column({ columnName: 'justificationCheck' })
    public justificationCheck: boolean;
    
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
    
    @belongsTo(() => Employee, {
        foreignKey: 'preparerId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public preparer: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Employee, {
        foreignKey: 'checkerId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public checker: BelongsTo<typeof Employee>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('preparer', employeePreloads)
            .preload('checker', employeePreloads);
    }
}