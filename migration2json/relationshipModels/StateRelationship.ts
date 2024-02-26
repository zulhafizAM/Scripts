import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Division from 'App/Models/Division';
import Experience from 'App/Models/Experience';
import NextOfKin from 'App/Models/NextOfKin';
import PersonalDetail from 'App/Models/PersonalDetail';
import StateVisitAllowance from 'App/Models/StateVisitAllowance';

export default class StatesRelationship extends BaseModel {
	@hasMany(() => Division, { foreignKey: 'stateId' })
    public DivisionAsstate: HasMany<typeof Division>;

    @hasMany(() => PersonalDetail, { foreignKey: 'birthStateId' })
    public PersonalDetailAsbirthState: HasMany<typeof PersonalDetail>;

    @hasMany(() => PersonalDetail, { foreignKey: 'mailStateId' })
    public PersonalDetailAsmailState: HasMany<typeof PersonalDetail>;

    @hasMany(() => PersonalDetail, { foreignKey: 'homeStateId' })
    public PersonalDetailAshomeState: HasMany<typeof PersonalDetail>;

    @hasMany(() => Experience, { foreignKey: 'stateId' })
    public ExperienceAsstate: HasMany<typeof Experience>;

    @hasMany(() => NextOfKin, { foreignKey: 'stateId' })
    public NextOfKinAsstate: HasMany<typeof NextOfKin>;

    @hasMany(() => StateVisitAllowance, { foreignKey: 'stateId' })
    public StateVisitAllowanceAsstate: HasMany<typeof StateVisitAllowance>;
}
