import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import ServiceConfirmation from 'App/Models/ServiceConfirmation';

export default class ServiceConfirmationProcessRelationship extends BaseModel {
	@belongsTo(() => ServiceConfirmation, { foreignKey: 'confirmationId' })
    public ServiceConfirmationAsconfirmation: BelongsTo<typeof ServiceConfirmation>;

    @belongsTo(() => Employee, { foreignKey: 'integrityCertifierId' })
    public EmployeeAsintegrityCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorCertifierId' })
    public EmployeeAsdirectorCertifier: BelongsTo<typeof Employee>;
}
