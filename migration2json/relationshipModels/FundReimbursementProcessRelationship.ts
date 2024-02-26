import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import EducationFundReimbursement from 'App/Models/EducationFundReimbursement';

export class fundReimbursementProcessRelationship extends BaseModel{
    @belongsTo(() => EducationFundReimbursement, { foreignKey: 'fundId' })
    public EducationFundReimbursementAsfund: BelongsTo<typeof EducationFundReimbursement>;

    @belongsTo(() => Employee, { foreignKey: 'confirmerId' })
    public EmployeeAsconfirmer: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'verifierId' })
    public EmployeeAsverifier: BelongsTo<typeof Employee>;
}
