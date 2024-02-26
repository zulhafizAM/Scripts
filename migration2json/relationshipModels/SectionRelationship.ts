import { BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Department from 'App/Models/Department';
import Unit from 'App/Models/Unit';


export default class SectionsRelationship extends BaseModel {
	@hasMany(() => Unit, { foreignKey: 'sectionId' })
    public UnitAssection: HasMany<typeof Unit>;

    @belongsTo(() => Department, { foreignKey: 'departmentId' })
    public DepartmentAsdepartment: BelongsTo<typeof Department>;
}
