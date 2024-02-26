import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import AccruedAnnualLeave from 'App/Models/AccruedAnnualLeave';
import AccruedAnnualLeaveProcess from 'App/Models/AccruedAnnualLeaveProcess';
import AlternateUntrackedLeave from 'App/Models/AlternateUntrackedLeave';
import AlternateUntrackedLeaveProcess from 'App/Models/AlternateUntrackedLeaveProcess';
import HalfPayLeave from 'App/Models/HalfPayLeave';
import HalfPayLeaveProcess from 'App/Models/HalfPayLeaveProcess';
import MaternityLeave from 'App/Models/MaternityLeave';
import MaternityLeaveProcess from 'App/Models/MaternityLeaveProcess';
import OtherLeave from 'App/Models/OtherLeave';
import OtherLeaveProcess from 'App/Models/OtherLeaveProcess';
import RemoteReligiousLeave from 'App/Models/RemoteReligiousLeave';
import RemoteReligiousLeaveProcess from 'App/Models/RemoteReligiousLeaveProcess';
import ReplacementAnnualLeave from 'App/Models/ReplacementAnnualLeave';
import ReplacementAnnualLeaveProcess from 'App/Models/ReplacementAnnualLeaveProcess';
import WithdrawalAnnualLeave from 'App/Models/WithdrawalAnnualLeave';
import WithdrawalAnnualLeaveProcess from 'App/Models/WithdrawalAnnualLeaveProcess';
import WithoutPayLeave from 'App/Models/WithoutPayLeave';
import WithoutPayLeaveProcess from 'App/Models/WithoutPayLeaveProcess';

export default class employeeToLeaveRelationship extends BaseModel {
    @hasMany(() => OtherLeave, { foreignKey: 'employeeId'})
    public OtherLeavesAsemployee: HasMany<typeof OtherLeave>;

    @hasMany(() => ReplacementAnnualLeaveProcess, { foreignKey: 'directorSupporterId' })
    public ReplacementAnnualLeaveProcessAsdirectorSupporter: HasMany<typeof ReplacementAnnualLeaveProcess>;

    @hasMany(() => ReplacementAnnualLeaveProcess, { foreignKey: 'appointedSupporterId' })
    public ReplacementAnnualLeaveProcessAsappointedSupporter: HasMany<typeof ReplacementAnnualLeaveProcess>;

    @hasMany(() => ReplacementAnnualLeaveProcess, { foreignKey: 'certifierId' })
    public ReplacementAnnualLeaveProcessAscertifier: HasMany<typeof ReplacementAnnualLeaveProcess>;

    @hasMany(() => ReplacementAnnualLeaveProcess, { foreignKey: 'approverId' })
    public ReplacementAnnualLeaveProcessAsapprover: HasMany<typeof ReplacementAnnualLeaveProcess>;

    @hasMany(() => OtherLeaveProcess, { foreignKey: 'supporterId'})
    public OtherLeaveProcessAssupporter: HasMany<typeof OtherLeaveProcess>;

    @hasMany(() => OtherLeaveProcess, { foreignKey: 'verifierId'})
    public OtherLeaveProcessAsverifier: HasMany<typeof OtherLeaveProcess>;

    @hasMany(() => OtherLeaveProcess, { foreignKey: 'confirmerId'})
    public OtherLeaveProcessAsconfirmer: HasMany<typeof OtherLeaveProcess>;

    @hasMany(() => OtherLeaveProcess, { foreignKey: 'approverId'})
    public OtherLeaveProcessAsapprover: HasMany<typeof OtherLeaveProcess>;

    @hasMany(() => RemoteReligiousLeave, { foreignKey: 'employeeId'})
    public RemoteReligiousLeavesAsemployee: HasMany<typeof RemoteReligiousLeave>;

    @hasMany(() => RemoteReligiousLeaveProcess, { foreignKey: 'supporterId'})
    public RemoteReligiousLeaveProcessAssupporter: HasMany<typeof RemoteReligiousLeaveProcess>;

    @hasMany(() => RemoteReligiousLeaveProcess, { foreignKey: 'verifierId'})
    public RemoteReligiousLeaveProcessAsverifier: HasMany<typeof RemoteReligiousLeaveProcess>;

    @hasMany(() => RemoteReligiousLeaveProcess, { foreignKey: 'approverId'})
    public RemoteReligiousLeaveProcessAsapprover: HasMany<typeof RemoteReligiousLeaveProcess>;

    @hasMany(() => MaternityLeave, { foreignKey: 'employeeId'})
    public MaternityLeavesAsemployee: HasMany<typeof MaternityLeave>;

    @hasMany(() => MaternityLeaveProcess, { foreignKey: 'verifierId'})
    public MaternityLeaveProcessAsverifier: HasMany<typeof MaternityLeaveProcess>;

    @hasMany(() => MaternityLeaveProcess, { foreignKey: 'approverId'})
    public MaternityLeaveProcessAsapprover: HasMany<typeof MaternityLeaveProcess>;

    @hasMany(() => WithoutPayLeave, { foreignKey: 'employeeId'})
    public WithoutPayLeavesAsemployee: HasMany<typeof WithoutPayLeave>;

    @hasMany(() => WithoutPayLeaveProcess, { foreignKey: 'directorSupporterId'})
    public WithoutPayLeaveProcessAsdirectorSupporter: HasMany<typeof WithoutPayLeaveProcess>;

    @hasMany(() => WithoutPayLeaveProcess, { foreignKey: 'verifierId'})
    public WithoutPayLeaveProcessAsverifier: HasMany<typeof WithoutPayLeaveProcess>;

    @hasMany(() => WithoutPayLeaveProcess, { foreignKey: 'confirmerId'})
    public WithoutPayLeaveProcessAsconfirmer: HasMany<typeof WithoutPayLeaveProcess>;

    @hasMany(() => WithoutPayLeaveProcess, { foreignKey: 'appointedSupporterId'})
    public WithoutPayLeaveProcessAsappointedSupporter: HasMany<typeof WithoutPayLeaveProcess>;

    @hasMany(() => WithoutPayLeaveProcess, { foreignKey: 'approverId'})
    public WithoutPayLeaveProcessAsapprover: HasMany<typeof WithoutPayLeaveProcess>;

    @hasMany(() => HalfPayLeave, { foreignKey: 'employeeId'})
    public HalfPayLeavesAsemployee: HasMany<typeof HalfPayLeave>;

    @hasMany(() => HalfPayLeaveProcess, { foreignKey: 'directorSupporterId'})
    public HalfPayLeaveProcessAsdirectorSupporter: HasMany<typeof HalfPayLeaveProcess>;

    @hasMany(() => HalfPayLeaveProcess, { foreignKey: 'verifierId'})
    public HalfPayLeaveProcessAsverifier: HasMany<typeof HalfPayLeaveProcess>;

    @hasMany(() => HalfPayLeaveProcess, { foreignKey: 'confirmerId'})
    public HalfPayLeaveProcessAsconfirmer: HasMany<typeof HalfPayLeaveProcess>;

    @hasMany(() => HalfPayLeaveProcess, { foreignKey: 'approverId'})
    public HalfPayLeaveProcessAsapprover: HasMany<typeof HalfPayLeaveProcess>;

    @hasMany(() => AlternateUntrackedLeave, { foreignKey: 'employeeId'})
    public AlternateUntrackedLeavesAsemployee: HasMany<typeof AlternateUntrackedLeave>;

    @hasMany(() => AlternateUntrackedLeaveProcess, { foreignKey: 'directorSupporterId'})
    public AlternateUntrackedLeaveProcessAsdirectorSupporter: HasMany<typeof AlternateUntrackedLeaveProcess>;

    @hasMany(() => AlternateUntrackedLeaveProcess, { foreignKey: 'verifierId'})
    public AlternateUntrackedLeaveProcessAsverifier: HasMany<typeof AlternateUntrackedLeaveProcess>;

    @hasMany(() => AlternateUntrackedLeaveProcess, { foreignKey: 'confirmerId'})
    public AlternateUntrackedLeaveProcessAsconfirmer: HasMany<typeof AlternateUntrackedLeaveProcess>;

    @hasMany(() => AlternateUntrackedLeaveProcess, { foreignKey: 'appointedSupporterId'})
    public AlternateUntrackedLeaveProcessAsappointedSupporter: HasMany<typeof AlternateUntrackedLeaveProcess>;

    @hasMany(() => AlternateUntrackedLeaveProcess, { foreignKey: 'approverId'})
    public AlternateUntrackedLeaveProcessAsapprover: HasMany<typeof AlternateUntrackedLeaveProcess>;

    @hasMany(() => ReplacementAnnualLeave, { foreignKey: 'employeeId'})
    public ReplacementAnnualLeavesAsemployee: HasMany<typeof ReplacementAnnualLeave>;

    @hasMany(() => WithdrawalAnnualLeave, { foreignKey: 'employeeId'})
    public WithdrawalAnnualLeavesAsemployee: HasMany<typeof WithdrawalAnnualLeave>;

    @hasMany(() => WithdrawalAnnualLeaveProcess, { foreignKey: 'supporterId'})
    public WithdrawalAnnualLeaveProcessAssupporter: HasMany<typeof WithdrawalAnnualLeaveProcess>;

    @hasMany(() => WithdrawalAnnualLeaveProcess, { foreignKey: 'verifierId'})
    public WithdrawalAnnualLeaveProcessAsverifier: HasMany<typeof WithdrawalAnnualLeaveProcess>;

    @hasMany(() => WithdrawalAnnualLeaveProcess, { foreignKey: 'confirmerId'})
    public WithdrawalAnnualLeaveProcessAsconfirmer: HasMany<typeof WithdrawalAnnualLeaveProcess>;

    @hasMany(() => WithdrawalAnnualLeaveProcess, { foreignKey: 'certifierId'})
    public WithdrawalAnnualLeaveProcessAscertifier: HasMany<typeof WithdrawalAnnualLeaveProcess>;

    @hasMany(() => WithdrawalAnnualLeaveProcess, { foreignKey: 'approverId'})
    public WithdrawalAnnualLeaveProcessAsapprover: HasMany<typeof WithdrawalAnnualLeaveProcess>;

    @hasMany(() => AccruedAnnualLeave, { foreignKey: 'employeeId'})
    public AccruedAnnualLeavesAsemployee: HasMany<typeof AccruedAnnualLeave>;

    @hasMany(() => AccruedAnnualLeaveProcess, { foreignKey: 'supporterId'})
    public AccruedAnnualLeaveProcessAssupporter: HasMany<typeof AccruedAnnualLeaveProcess>;

    @hasMany(() => AccruedAnnualLeaveProcess, { foreignKey: 'approverId'})
    public AccruedAnnualLeaveProcessAsapprover: HasMany<typeof AccruedAnnualLeaveProcess>;

    @hasMany(() => AccruedAnnualLeaveProcess, { foreignKey: 'verifierId'})
    public AccruedAnnualLeaveProcessAsverifier: HasMany<typeof AccruedAnnualLeaveProcess>;

    @hasMany(() => AccruedAnnualLeaveProcess, { foreignKey: 'confirmerId'})
    public AccruedAnnualLeaveProcessAsconfirmer: HasMany<typeof AccruedAnnualLeaveProcess>;
}