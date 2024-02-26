import { BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import PerformanceContributionNotOfficialDuty from 'app/Models/PerformanceContributionNotOfficialDuty';


export class performanceRelationship extends BaseModel{
    @hasMany(() => PerformanceContributionNotOfficialDuty, { foreignKey: 'performanceId' })
    public PerformanceContributionNotOfficialDutyAsperformance: HasMany<typeof PerformanceContributionNotOfficialDuty>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'PPKEmployeeId' })
    public EmployeeAsPPKEmployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'PPPEmployeeId' })
    public EmployeeAsPPPEmployee: BelongsTo<typeof Employee>;
    }