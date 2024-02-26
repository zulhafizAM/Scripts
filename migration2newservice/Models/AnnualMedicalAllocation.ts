import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasMany,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import MedicalClaim from './MedicalClaim';

export default class AnnualMedicalAllocation extends BaseModel {
    public static table = 'annualMedicalAllocations';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'employeeId' })
    public employeeId: bigint;

    @column({ columnName: 'month' })
    public month: number;

    @column({ columnName: 'year' })
    public year: number;

    @column({ columnName: 'allocatedAmount' })
    public allocatedAmount: number;

    @column({ columnName: 'totalClaimed' })
    public totalClaimed: number;

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

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public employee: BelongsTo<typeof Employee>;

    @hasMany(() => MedicalClaim, { foreignKey: 'employeeMedicalAllocId' })
    public medicalClaims: HasMany<typeof MedicalClaim>;
}
