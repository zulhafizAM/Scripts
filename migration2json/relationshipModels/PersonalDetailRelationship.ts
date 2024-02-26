import { BaseModel, hasMany, HasMany, hasOne, HasOne, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Activity from 'App/Models/Activity';
import Dependent from 'App/Models/Dependent';
import Education from 'App/Models/Education';
import NextOfKin from 'App/Models/NextOfKin';
import Candidate from 'App/Models/Candidate';
import Employee from 'App/Models/Employee';
import State from 'App/Models/State';
import Race from 'App/Models/Race';
import Religion from 'App/Models/Religion';
import Experience from 'App/Models/Experience';

export default class PersonalDetailRelationship extends BaseModel {
	@hasMany(() => Activity, { foreignKey: 'personalDetailId' })
    public ActivityAspersonalDetail: HasMany<typeof Activity>;

    @hasMany(() => Dependent, { foreignKey: 'personalDetailId' })
    public DependentAspersonalDetail: HasMany<typeof Dependent>;

    @hasMany(() => NextOfKin, { foreignKey: 'personalDetailId' })
    public NextOfKinAspersonalDetail: HasMany<typeof NextOfKin>;

    @hasMany(() => Education, { foreignKey: 'personalDetailId' })
    public EducationAspersonalDetail: HasMany<typeof Education>;

    @hasMany(() => Experience, { foreignKey: 'personalDetailId' })
    public ExperienceAspersonalDetail: HasMany<typeof Experience>;

    @hasOne(() => Candidate, { foreignKey: 'personalDetailId' })
    public CandidateAspersonalDetail: HasOne<typeof Candidate>;

    @hasOne(() => Employee, { foreignKey: 'personalDetailId' })
    public EmployeeAspersonalDetail: HasOne<typeof Employee>;

    @belongsTo(() => State, { foreignKey: 'birthStateId' })
    public StateAsbirthState: BelongsTo<typeof State>;

    @belongsTo(() => Race, { foreignKey: 'raceId' })
    public RaceAsrace: BelongsTo<typeof Race>;

    @belongsTo(() => Religion, { foreignKey: 'religionId' })
    public ReligionAsreligion: BelongsTo<typeof Religion>;

    @belongsTo(() => State, { foreignKey: 'mailStateId' })
    public StateAsmailState: BelongsTo<typeof State>;

    @belongsTo(() => State, { foreignKey: 'homeStateId' })
    public StateAshomeState: BelongsTo<typeof State>;
}
