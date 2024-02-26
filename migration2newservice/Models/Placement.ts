import { DateTime } from 'luxon';
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import EmploymentInterim from './EmploymentInterim';
import SelfRequest from './SelfRequest';
import ForceTransferByDirector from './ForceTransferByDirector';
import ForceTransferByManagement from './ForceTransferByManagement';
import GradeActingPostponeProcess from './GradeActingPostponeProcess';
import ContractDetail from './ContractDetail';

export default class Placement extends BaseModel {
    public static table = 'placements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    @column({ isPrimary: true, columnName: 'id' })
    public id: bigint;

    @column({ columnName: 'name' })
    public name: string;

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

    @hasMany(() => Employee, { foreignKey: 'placementId' })
    public employees: HasMany<typeof Employee>;

    @hasMany(() => EmploymentInterim, { foreignKey: 'placementId' })
    public employmentInterims: HasMany<typeof EmploymentInterim>;

    @hasMany(() => SelfRequest, { foreignKey: 'firstChoicePlacementId' })
    public firstChoiceSelfRequests: HasMany<typeof SelfRequest>;

    @hasMany(() => SelfRequest, { foreignKey: 'secondChoicePlacementId' })
    public secondChoiceSelfRequests: HasMany<typeof SelfRequest>;

    @hasMany(() => ForceTransferByDirector, { foreignKey: 'newPlacementId' })
    public forceTransferByDirectors: HasMany<typeof ForceTransferByDirector>;

    @hasMany(() => ForceTransferByManagement, { foreignKey: 'newPlacementId' })
    public forceTransferByManagements: HasMany<
        typeof ForceTransferByManagement
    >;

    @hasMany(() => GradeActingPostponeProcess, { foreignKey: 'placementId' })
    public gradeActingPostponeProcesses: HasMany<
        typeof GradeActingPostponeProcess
    >;

    @hasMany(() => ContractDetail, { foreignKey: 'placementId' })
    public contractDetails: HasMany<typeof ContractDetail>;
}
