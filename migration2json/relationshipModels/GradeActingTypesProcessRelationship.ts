import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import GradeActingType from 'App/Models/GradeActingType';

export default class GradeActingTypesProcessRelationship extends BaseModel {
    @belongsTo(() => GradeActingType, { foreignKey: 'actingId' })
    public GradeActingTypesAsacting: BelongsTo<typeof GradeActingType>;

    @belongsTo(() => Employee, { foreignKey: 'IntegrityCertifierId' })
    public EmployeeAsIntegrityCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorCertifierId' })
    public EmployeeAsdirectorCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
