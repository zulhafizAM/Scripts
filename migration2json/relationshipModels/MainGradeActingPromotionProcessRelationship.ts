import { BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';

export default class MainGradeActingPromotionProcessRelationship extends BaseModel {
	@belongsTo(() => MainGradeActingPromotion, { foreignKey: 'actingId' })
    public MainGradeActingPromotionAsacting: BelongsTo<typeof MainGradeActingPromotion>;

    @belongsTo(() => Employee, { foreignKey: 'certifierId' })
    public EmployeeAscertifier: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'supporterId' })
    public EmployeeAssupporter: BelongsTo<typeof Employee>;

    @belongsTo(() => Employee, { foreignKey: 'approverId' })
    public EmployeeAsapprover: BelongsTo<typeof Employee>;
    }
