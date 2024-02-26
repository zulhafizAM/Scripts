import { BaseModel, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Employee from 'App/Models/Employee';
import Meeting from 'App/Models/Meeting';
import Accussation from 'App/Models/Accussation';
import CancelSuspensionOrDismissal from 'App/Models/CancelSuspensionOrDismissal';
import DisciplinaryActionType from 'App/Models/DisciplinaryActionType';
import OnSuspensionOrDismissal from 'App/Models/OnSuspensionOrDismissal';
import Sentencing from 'App/Models/Sentencing';

export class integrityProceedingsRelationship extends BaseModel {
    @hasMany(() => Accussation, { foreignKey: 'integrityId' })
    public AccussationsAsintegrity: HasMany<typeof Accussation>;

    @hasMany(() => Sentencing, { foreignKey: 'integrityId' })
    public SentencingsAsintegrity: HasMany<typeof Sentencing>;

    @hasMany(() => OnSuspensionOrDismissal, { foreignKey: 'integrityId' })
    public OnSuspensionOrDismissalsAsintegrity: HasMany<typeof OnSuspensionOrDismissal>;

    @hasMany(() => CancelSuspensionOrDismissal, { foreignKey: 'integrityId' })
    public CancelSuspensionOrDismissalsAsintegrity: HasMany<typeof CancelSuspensionOrDismissal>;

    @belongsTo(() => Employee, { foreignKey: 'employeeId' })
    public EmployeeAsemployee: BelongsTo<typeof Employee>;

    @belongsTo(() => Meeting, { foreignKey: 'meetingId' })
    public MeetingAsmeeting: BelongsTo<typeof Meeting>;

    @belongsTo(() => DisciplinaryActionType, { foreignKey: 'disciplinaryTypeId' })
    public DisciplinaryTypeAsdisciplinaryType: BelongsTo<typeof DisciplinaryActionType>;
}