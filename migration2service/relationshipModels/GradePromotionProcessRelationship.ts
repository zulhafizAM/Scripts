import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import GradePromotionType from 'App/Models/GradePromotionType';

export default class GradePromotionProcessRelationship extends BaseModel {
    @belongsTo(() => GradePromotionType, { foreignKey: 'promotionId' })
    public GradePromotionTypeAspromotion: BelongsTo<typeof GradePromotionType>;

    @belongsTo(() => Employee, { foreignKey: 'integrityCertifierId' })
    public EmployeeAsintegrityCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'directorCertifierId' })
    public EmployeeAsdirectorCertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterid' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
}
