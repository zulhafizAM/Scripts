import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
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

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'candidateId' })
    public candidateId: bigint;

    @column({ columnName: 'serviceTypeId' })
    public serviceTypeId: bigint;

    @column({ columnName: 'placementId' })
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

    @belongsTo(() => Candidate, { foreignKey: 'candidateId' })
    public candidate: BelongsTo<typeof Candidate>;

    @belongsTo(() => ServiceType, { foreignKey: 'serviceTypeId' })
    public serviceType: BelongsTo<typeof ServiceType>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public placement: BelongsTo<typeof Placement>;

    @hasOne(() => ContractLifeCycle, { foreignKey: 'contractId' })
    public contractLifeCycle: HasOne<typeof ContractLifeCycle>;

    @hasOne(() => ContractAppointmentsProcess, { foreignKey: 'contractId' })
    public contractAppointmentsProcess: HasOne<typeof ContractAppointmentsProcess>;
}