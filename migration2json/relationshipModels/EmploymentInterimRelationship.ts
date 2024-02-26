import { BaseModel,hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ApplicationInterim from 'App/Models/ApplicationInterim';
import TerminationInterim from 'App/Models/TerminationInterim';
import Department from 'App/Models/Department';
import Grade from 'App/Models/Grade';
import Placement from 'App/Models/Placement';
import Position from 'App/Models/Position';

export default class EmploymentInterimRelationship extends BaseModel {
	@hasOne(() => ApplicationInterim, { foreignKey: 'interimId' })
    public ApplicationInterimAsinterim: HasOne<typeof ApplicationInterim>;

    @hasOne(() => TerminationInterim, { foreignKey: 'interimId' })
    public TerminationInterimAsinterim: HasOne<typeof TerminationInterim>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Position, { foreignKey: 'positionId' })
    public PositionAsposition: BelongsTo<typeof Position>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public GradeAsgrade: BelongsTo<typeof Grade>;

    @belongsTo(() => Department, { foreignKey: 'departmentId' })
    public DepartmentAsdepartment: BelongsTo<typeof Department>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public PlacementAsplacement: BelongsTo<typeof Placement>;
}
