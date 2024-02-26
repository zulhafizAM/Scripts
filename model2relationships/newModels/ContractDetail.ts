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
import Candidate from './Candidate';
import ServiceType from './ServiceType';
import Placement from './Placement';
import ContractLifeCycle from './ContractLifeCycle';
import ContractAppointmentsProcess from './ContractAppointmentsProcess';

export default class ContractDetail extends BaseModel {
    public static table = 'contractDetails';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof ContractDetail>((query) => {
        query
            .preload('candidate')
            .preload('serviceType')
            .preload('placement')
            .preload('contractLifeCycle')
            .preload('contractAppointmentsProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'candidateId', serializeAs: null })
    public candidateId: bigint;
    
    @column({ columnName: 'serviceTypeId', serializeAs: null })
    public serviceTypeId: bigint;
    
    @column({ columnName: 'placementId', serializeAs: null })
    public placementId: bigint;
    
    @column({ columnName: 'contractEmployeeNumber' })
    public contractEmployeeNumber: string;
    
    @column.dateTime({ columnName: 'applicationDate' })
    public applicationDate: DateTime;
    
    @column.dateTime({ columnName: 'contractStartDate' })
    public contractStartDate: DateTime;
    
    @column({ columnName: 'contractDuration' })
    public contractDuration: number;
    
    @column({ columnName: 'wageRate' })
    public wageRate: number;
    
    @column({ columnName: 'designation' })
    public designation: string;
    
    @column.dateTime({ columnName: 'reportDutyDate' })
    public reportDutyDate: DateTime;
    
    @column({ columnName: 'EPFNumber' })
    public EPFNumber: string;
    
    @column({ columnName: 'leaveEntitlement' })
    public leaveEntitlement: number;
    
    @column({ columnName: 'document' })
    public document: Blob;
    
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
    
    @belongsTo(() => Candidate, {
        foreignKey: 'candidateId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public candidate: BelongsTo<typeof Candidate>;
    
    @belongsTo(() => ServiceType, {
        foreignKey: 'serviceTypeId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public serviceType: BelongsTo<typeof ServiceType>;
    
    @belongsTo(() => Placement, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public placement: BelongsTo<typeof Placement>;
    
    @hasOne(() => ContractLifeCycle, {
        foreignKey: 'contractId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public contractLifeCycle: HasOne<typeof ContractLifeCycle>;
    
    @hasOne(() => ContractAppointmentsProcess, {
        foreignKey: 'contractId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public contractAppointmentsProcess: HasOne<
    typeof ContractAppointmentsProcess
    >;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('candidate')
            .preload('serviceType')
            .preload('placement')
            .preload('contractLifeCycle')
            .preload('contractAppointmentsProcess', (query) =>
                query
                    .preload('supporter', employeePreloads)
                    .preload('approver', employeePreloads)
            );
    }
}