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
import Employee from './Employee';
import Meeting from './Meeting';
import ServiceConfirmationProcess from './ServiceConfirmationProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class ServiceConfirmation extends BaseModel {
    public static table = 'serviceConfirmations';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ServiceConfirmation>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('meeting')
            .preload('serviceConfirmationProcess', (query) =>
                query
                    .preload('integrityCertifier', employeePreloads)
                    .preload('directorCertifier', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'meetingId', serializeAs: null })
    public meetingId: bigint;
    
    @column({ columnName: 'isCompleted' })
    public isCompleted: boolean;
    
    @column({ columnName: 'isNewGrade' })
    public isNewGrade: boolean;
    
    @column({ columnName: 'meetingResult' })
    public meetingResult: string;
    
    @column({ columnName: 'status' })
    public status: string;
    
    @column({ columnName: 'remark' })
    public remark: string;
    
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
        foreignKey: 'employeeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employee: BelongsTo<typeof Employee>;
    
    @belongsTo(() => Meeting, {
        foreignKey: 'meetingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public meeting: BelongsTo<typeof Meeting>;
    
    @hasOne(() => ServiceConfirmationProcess, {
        foreignKey: 'confirmationId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public serviceConfirmationProcess: HasOne<
    typeof ServiceConfirmationProcess
    >;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('meeting')
            .preload('serviceConfirmationProcess', (query) =>
                query
                    .preload('integrityCertifier', employeePreloads)
                    .preload('directorCertifier', employeePreloads)
            );
    }
}