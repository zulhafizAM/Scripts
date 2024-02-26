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
import MainGradeActingPromotionProcess from './MainGradeActingPromotionProcess';
import { employeePreloads } from 'App/Helpers/preloads';

export default class MainGradeActingPromotion extends BaseModel {
    public static table = 'mainGradeActingPromotions';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof MainGradeActingPromotion>((query) => {
        query
            .preload('employee', employeePreloads)
            .preload('meeting')
            .preload('mainGradeActingPromotionProcess', (query) =>
                query
                    .preload('certifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'employeeId', serializeAs: null })
    public employeeId: bigint;
    
    @column({ columnName: 'meetingId', serializeAs: null })
    public meetingId: bigint;
    
    @column({ columnName: 'isActing' })
    public isActing: boolean;
    
    @column({ columnName: 'meetingResult' })
    public meetingResult: string;
    
    @column({ columnName: 'meetingRemark' })
    public meetingRemark: string;
    
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
    
    @hasOne(() => MainGradeActingPromotionProcess, {
        foreignKey: 'actingId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public mainGradeActingPromotionProcess: HasOne<
    typeof MainGradeActingPromotionProcess
    >;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employee', employeePreloads)
            .preload('meeting')
            .preload('mainGradeActingPromotionProcess', (query) =>
                query
                    .preload('certifier', employeePreloads)
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}