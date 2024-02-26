import {
    BaseModel,
    BelongsTo,
    belongsTo,
    hasOne,
    hasMany,
    HasOne,
    HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import PersonalDetail from 'App/Models/PersonalDetail';
import employeeToEmploymentRelationship from './Employee/employeeToEmploymentRelationship';
import employeeToIntegrityRelationship from './Employee/employeeToIntegrityRelationship';
import employeeToLeaveRelationship from './Employee/employeeToLeaveRelationship';
import employeeToPerformanceRelationship from './Employee/employeeToPerformanceRelationship';
import { employeeToContractRelationship } from './Employee/employeeToContractRelationship';
import employeeToCourseRelationship from './Employee/employeeToCourseRelationship';
import employeeToSalaryRelationship from './Employee/employeeToSalaryRelationship';
import employeeToMedicalRelationship from './Employee/employeeToMedicalRelationship';
import Grade from 'App/Models/Grade';
import Position from 'App/Models/Position';
import ServiceType from 'App/Models/ServiceType';
import ServiceGroup from 'App/Models/ServiceGroup';
import Placement from 'App/Models/Placement';
import Unit from 'App/Models/Unit';
import TemporaryPermission from 'App/Models/TemporaryPermission';
import UserAccount from 'App/Models/UserAccount';
import EmployeeRole from 'App/Models/EmployeeRole';

export default class employeeRelationship extends BaseModel {
    @hasOne(() => UserAccount, { foreignKey: 'employeeId' })
    public UserAccountAsemployee: HasOne<typeof UserAccount>

    @hasMany(() => TemporaryPermission, { foreignKey: 'employeeId' })
    public TemporaryPermissionAsemployee: HasMany<typeof TemporaryPermission>;

    @hasMany(() => EmployeeRole, { foreignKey: 'employeeId' })
    public EmployeeRoleAsemployee: HasMany<typeof EmployeeRole>;

    @belongsTo(() => PersonalDetail, { foreignKey: 'personalDetailId' })
    public PersonalDetailAspersonalDetail: BelongsTo<typeof PersonalDetail>;

    @belongsTo(() => Grade, { foreignKey: 'gradeId' })
    public GradeAsgrade: BelongsTo<typeof Grade>;

    @belongsTo(() => Position, { foreignKey: 'positionId' })
    public PositionAsposition: BelongsTo<typeof Position>;

    @belongsTo(() => ServiceType, { foreignKey: 'serviceTypeId' })
    public ServiceTypeAsserviceType: BelongsTo<typeof ServiceType>;

    @belongsTo(() => ServiceGroup, { foreignKey: 'serviceGroupId' })
    public ServiceGroupAsserviceGroup: BelongsTo<typeof ServiceGroup>;

    @belongsTo(() => Placement, { foreignKey: 'placementId' })
    public PlacementAsplacement: BelongsTo<typeof Placement>;

    @belongsTo(() => Unit, { foreignKey: 'unitId' })
    public UnitAsunit: BelongsTo<typeof Unit>;

    //Module Employment
    static employementrelationship: employeeToEmploymentRelationship;
    static integrityRelationship: employeeToIntegrityRelationship;
    static leaveRelationship: employeeToLeaveRelationship;
    static performanceRelationship: employeeToPerformanceRelationship;
    static contractRelationship: employeeToContractRelationship;
    static courseRelationship: employeeToCourseRelationship;
    static salaryRelationship: employeeToSalaryRelationship;
    static medicalRelationship: employeeToMedicalRelationship;
}
