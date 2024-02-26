import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import Section from 'App/Models/Section';

export default class DepartmentsRelationship extends BaseModel {
	@hasMany(() => Section, { foreignKey: 'departmentId' })
    public SectionAsdepartment: HasMany<typeof Section>;

    @hasMany(() => EmploymentInterim, { foreignKey: 'departmentId' })
    public EmploymentInterimAsdepartment: HasMany<typeof EmploymentInterim>;
}
