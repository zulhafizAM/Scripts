import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import Employee from './Employee';
import EmploymentInterim from './EmploymentInterim';
import SelfTransfers from './SelfTransfers';
import ForceTransferByDirector from './ForceTransferByDirector';
import ForceTransferByManagement from './ForceTransferByManagement';
import GradeActingPostponeProcess from './GradeActingPostponeProcess';
import ContractDetail from './ContractDetail';
import { employeePreloads } from 'App/Helpers/preloads';

export default class Placement extends BaseModel {
    public static table = 'placements';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Placement>((query) => {
        query
            .preload('employees')
            .preload('employmentInterims')
            .preload('firstChoiceSelfRequests')
            .preload('secondChoiceSelfRequests')
            .preload('forceTransferByDirectors')
            .preload('forceTransferByManagements')
            .preload('gradeActingPostponeProcesses')
            .preload('contractDetails');
    });
    
    @column({ isPrimary: true, columnName: 'id', serializeAs: null })
    public id: bigint;
    
    @column({ columnName: 'name' })
    public name: string;
    
    @column({ columnName: 'active', serializeAs: null })
    public active: boolean;
    
    @column({ columnName: 'createdBy', serializeAs: null })
    public createdBy: string;
    
    @column.dateTime({
        columnName: 'createdAt',
        autoCreate: true,
        serializeAs: null,
    })
    public createdAt: DateTime;
    
    @column({ columnName: 'modifiedBy', serializeAs: null })
    public modifiedBy: string;
    
    @column.dateTime({
        columnName: 'modifiedAt',
        autoCreate: true,
        autoUpdate: true,
        serializeAs: null,
    })
    public modifiedAt: DateTime;
    
    @hasMany(() => Employee, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employees: HasMany<typeof Employee>;
    
    @hasMany(() => EmploymentInterim, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public employmentInterims: HasMany<typeof EmploymentInterim>;
    
    @hasMany(() => SelfTransfers, {
        foreignKey: 'firstChoicePlacementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public firstChoiceSelfRequests: HasMany<typeof SelfTransfers>;
    
    @hasMany(() => SelfTransfers, {
        foreignKey: 'secondChoicePlacementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public secondChoiceSelfRequests: HasMany<typeof SelfTransfers>;
    
    @hasMany(() => ForceTransferByDirector, {
        foreignKey: 'newPlacementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public forceTransferByDirectors: HasMany<typeof ForceTransferByDirector>;
    
    @hasMany(() => ForceTransferByManagement, {
        foreignKey: 'newPlacementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public forceTransferByManagements: HasMany<
    typeof ForceTransferByManagement
    >;
    
    @hasMany(() => GradeActingPostponeProcess, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public gradeActingPostponeProcesses: HasMany<
    typeof GradeActingPostponeProcess
    >;
    
    @hasMany(() => ContractDetail, {
        foreignKey: 'placementId',
        onQuery: (query) => {
        query.where('active', true);
        },
    })
    public contractDetails: HasMany<typeof ContractDetail>;
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('employees')
            .preload('employmentInterims')
            .preload('firstChoiceSelfRequests')
            .preload('secondChoiceSelfRequests')
            .preload('forceTransferByDirectors')
            .preload('forceTransferByManagements')
            .preload('gradeActingPostponeProcesses')
            .preload('contractDetails');
    }
}