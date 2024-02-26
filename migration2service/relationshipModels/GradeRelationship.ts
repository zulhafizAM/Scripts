import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import Position from 'App/Models/Position';

export default class GradesRelationship extends BaseModel {
	@hasMany(() => EmploymentInterim, { foreignKey: 'gradeId' })
    public EmploymentInterimAsgrade: HasMany<typeof EmploymentInterim>;

    @hasMany(() => Position, { foreignKey: 'gradeId' })
    public PositionAsgrade: HasMany<typeof Position>;

    @hasMany(() => Meeting, { foreignKey: 'gradeId' })
    public MeetingAsgrade: HasMany<typeof Meeting>;

    @hasMany(() => Employee, { foreignKey: 'gradeId' })
    public EmployeeAsgrade: HasMany<typeof Employee>;
    }
