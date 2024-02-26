import { BaseModel, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Section from 'App/Models/Section';

export default class UnitsRelationship extends BaseModel {
	@hasMany(() => Employee, { foreignKey: 'unitId' })
    public EmployeeAsunit: HasMany<typeof Employee>;

    @belongsTo(() => Section, { foreignKey: 'sectionId' })
    public SectionAssection: BelongsTo<typeof Section>;
}
