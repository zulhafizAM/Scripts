import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ContractDetail from 'App/Models/ContractDetail';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';
import ForceTransferByManagement from 'App/Models/ForceTransferByManagement';
import GradeActingPostponeProcess from 'App/Models/GradeActingPostponeProcess';
import SelfRequest from 'App/Models/SelfRequest';

export default class PlacementRelationship extends BaseModel {
	@hasMany(() => Employee, { foreignKey: 'placementId' })
    public EmployeeAsplacement: HasMany<typeof Employee>;

    @hasMany(() => EmploymentInterim, { foreignKey: 'placementId' })
    public EmploymentInterimsAsplacement: HasMany<typeof EmploymentInterim>;

    @hasMany(() => SelfRequest, { foreignKey: 'firstChoicePlacementId' })
    public SelfRequestAsfirstChoicePlacement: HasMany<typeof SelfRequest>;

    @hasMany(() => SelfRequest, { foreignKey: 'secondChoicePlacementId' })
    public SelfRequestAssecondChoicePlacement: HasMany<typeof SelfRequest>;

    @hasMany(() => ForceTransferByDirector, { foreignKey: 'newPlacementId' })
    public ForceTransferByDirectorAsnewPlacement: HasMany<typeof ForceTransferByDirector>;

    @hasMany(() => ForceTransferByManagement, { foreignKey: 'newPlacementId' })
    public ForceTransferByManagementAsnewPlacement: HasMany<typeof ForceTransferByManagement>;

    @hasMany(() => GradeActingPostponeProcess, { foreignKey: 'placementId' })
    public GradeActingPostponeProcessAsplacement: HasMany<typeof GradeActingPostponeProcess>;

    @hasMany(() => ContractDetail, { foreignKey: 'placementId' })
    public ContractDetailAsplacement: HasMany<typeof ContractDetail>;
}
