import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import ExcellenceAwardHistory from 'App/Models/ExcellenceAwardHistory';
import Performance from 'App/Models/Performance';
export default class employeeToPerformanceRelationship extends BaseModel{
    @hasMany(() => ExcellenceAwardHistory, { foreignKey: 'employeeId'})
    public ExcellenceAwardHistoriesAsemployee: HasMany<typeof ExcellenceAwardHistory>;

    @hasMany(() => Performance, { foreignKey: 'employeeId'})
    public PerformancesAsemployee: HasMany<typeof Performance>;

    @hasMany(() => Performance, { foreignKey: 'PPKEmployeeId'})
    public PerformancesAsPPKEmployee: HasMany<typeof Performance>;

    @hasMany(() => Performance, { foreignKey: 'PPPEmployeeId'})
    public PerformancesAsPPPEmployee: HasMany<typeof Performance>;
}