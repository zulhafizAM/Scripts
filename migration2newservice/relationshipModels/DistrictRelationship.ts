import { BaseModel, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Clinic from 'App/Models/Clinic';
import Division from 'App/Models/Division';

export default class DistrictsRelationship extends BaseModel {
	@hasMany(() => Clinic, { foreignKey: 'districtId' })
    public ClinicAsdistrict: HasMany<typeof Clinic>;

    @belongsTo(() => Division, { foreignKey: 'divisionId' })
    public DivisionAsdivision: BelongsTo<typeof Division>;
    }
