import { BaseModel ,hasMany,HasMany, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import Grade from 'App/Models/Grade';

export default class PositionsRelationship extends BaseModel {
	@hasMany(() => Employee, { foreignKey: 'positionId' })
    public EmployeeAsposition: HasMany<typeof Employee>;

    @hasMany(() => EmploymentInterim, { foreignKey: 'positionId' })
    public EmploymentInterimAsposition: HasMany<typeof EmploymentInterim>;

    @hasMany(() => Meeting, { foreignKey: 'positionId' })
    public MeetingAsposition: HasMany<typeof Meeting>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public GradeAsgrade: BelongsTo<typeof Grade>;
}
