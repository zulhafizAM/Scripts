import { DateTime } from 'luxon';
import { column, BaseModel, belongsTo, BelongsTo, hasOne, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PersonalDetail from './PersonalDetail';
import Position from './Position';
import Grade from './Grade';
import ServiceType from './ServiceType';
import ServiceGroup from './ServiceGroup';
import Unit from './Unit';
import Placement from './Placement';
import UserAccount from './UserAccount';
import TemporaryPermission from './TemporaryPermission';
import EmployeeRole from './EmployeeRole';

export default class Employee extends BaseModel {
    public static table = 'employees';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'personalDetailId' })
    public personalDetailId: bigint;

    @column({ columnName: 'positionId' })
    public positionId: bigint;

    @column({ columnName: 'gradeId' })
    public gradeId: bigint;

    @column({ columnName: 'serviceTypeId' })
    public serviceTypeId: bigint;

    @column({ columnName: 'serviceGroupId' })
    public serviceGroupId: bigint;

    @column({ columnName: 'unitId' })
    public unitId: bigint;

    @column({ columnName: 'placementId' })
    public placementId: bigint;

    @column({ columnName: 'programme' })
    public programme: string;

    @column({ columnName: 'eligibleLeaveCount' })
    public eligibleLeaveCount: number;

    @column({ columnName: 'employeeNumber' })
    public employeeNumber: string;

    @column.dateTime({ columnName: 'firstServiceDate' })
    public firstServiceDate: DateTime;

    @column.dateTime({ columnName: 'currentServiceDate' })
    public currentServiceDate: DateTime;

    @column({ columnName: 'officeNumber' })
    public officeNumber: string;

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

    @belongsTo(() => Position, { foreignKey: 'positionId' })
    public position: BelongsTo<typeof Position>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public grade: BelongsTo<typeof Grade>;

    @belongsTo(() => ServiceType, { foreignKey: 'serviceTypeId' })
    public serviceType: BelongsTo<typeof ServiceType>;

    @belongsTo(() => ServiceGroup, { foreignKey: 'serviceGroupId' })
    public serviceGroup: BelongsTo<typeof ServiceGroup>;

    @belongsTo(() => Unit, { foreignKey: 'unitId' })
    public unit: BelongsTo<typeof Unit>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public placement: BelongsTo<typeof Placement>;

    @hasOne(() => UserAccount, { foreignKey: 'employeeId' })
    public userAccount: HasOne<typeof UserAccount>;

    @hasMany(() => TemporaryPermission, { foreignKey: 'employeeId' })
    public temporaryPermissions: HasMany<typeof TemporaryPermission>;

    @hasMany(() => EmployeeRole, { foreignKey: 'employeeId' })
    public employeeRoles: HasMany<typeof EmployeeRole>;
}