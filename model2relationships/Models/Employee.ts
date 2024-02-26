import {
  BaseModel,
  BelongsTo,
  HasMany,
  HasOne,
  beforeFind,
  belongsTo,
  column,
  hasMany,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm';
import AccruedAnnualLeave from 'App/Models/AccruedAnnualLeave';
import AccruedAnnualLeaveProcess from 'App/Models/AccruedAnnualLeaveProcess';
import AlternateUntrackedLeave from 'App/Models/AlternateUntrackedLeave';
import AlternateUntrackedLeaveProcess from 'App/Models/AlternateUntrackedLeaveProcess';
import AnnualMedicalAllocation from 'App/Models/AnnualMedicalAllocation';
import AppealApplication from 'App/Models/AppealApplication';
import ApplicationInterimProcess from 'App/Models/ApplicationInterimProcess';
import Candidate from 'App/Models/Candidate';
import CargoShippingProcess from 'App/Models/CargoShippingProcess';
import ChecklistInterim from 'App/Models/ChecklistInterim';
import ClinicApproveProcess from 'App/Models/ClinicApproveProcess';
import ClinicClaimProcess from 'App/Models/ClinicClaimProcess';
import ClothingAssistanceProcess from 'App/Models/ClothingAssistanceProcess';
import ComputerLoanProcess from 'App/Models/ComputerLoanProcess';
import ConfirmationMoreThan3 from 'App/Models/ConfirmationMoreThan3';
import ContractAppointmentsProcess from 'App/Models/ContractAppointmentsProcess';
import ContractLifeCycleProcess from 'App/Models/ContractLifeCycleProcess';
import EducationFundApplication from 'App/Models/EducationFundApplication';
import EducationFundReimbursement from 'App/Models/EducationFundReimbursement';
import EmployeeRole from 'App/Models/EmployeeRole';
import EmployeeWelfareFundProcess from 'App/Models/EmployeeWelfareFundProcess';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import EmploymentStatus from 'App/Models/EmploymentStatus';
import ExamApplication from 'App/Models/ExamApplication';
import ExamApplicationProcess from 'App/Models/ExamApplicationProcess';
import ExcellenceAwardHistory from 'App/Models/ExcellenceAwardHistory';
import ForcedByDirectorPostponeProcess from 'App/Models/ForcedByDirectorPostponeProcess';
import ForcedByDirectorProcess from 'App/Models/ForcedByDirectorProcess';
import ForcedByManagementPostponeProcesses from 'App/Models/ForcedByManagementPostponeProcesses';
import ForcedByManagementProcess from 'App/Models/ForcedByManagementProcess';
import ForcedRetirement from 'App/Models/ForcedRetirement';
import ForcedRetirementProcess from 'App/Models/ForcedRetirementProcess';
import ForceTransferByDirector from 'App/Models/ForcedTransferByDirectors';
import ForceTransferByManagement from 'App/Models/ForcedTransferByManagements';
import FundApplicationProcess from 'App/Models/FundApplicationProcess';
import FundReimbursementProcess from 'App/Models/FundReimbursementProcess';
import FuneralArrangementProcess from 'App/Models/FuneralArrangementProcess';
import Grade from 'App/Models/Grade';
import GradeActingType from 'App/Models/GradeActingType';
import GradeActingTypesProcess from 'App/Models/GradeActingTypesProcess';
import GradePromotionProcess from 'App/Models/GradePromotionProcess';
import GradePromotionType from 'App/Models/GradePromotionType';
import HalfPayLeave from 'App/Models/HalfPayLeave';
import HalfPayLeaveProcess from 'App/Models/HalfPayLeaveProcess';
import HouseMovingProcess from 'App/Models/HouseMovingProcess';
import IntegrityProceeding from 'App/Models/IntegrityProceeding';
import LeaveEntitlement from 'App/Models/LeaveEntitlement';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';
import MainGradeActingPromotionProcess from 'App/Models/MainGradeActingPromotionProcess';
import MaternityLeave from 'App/Models/MaternityLeave';
import MaternityLeaveProcess from 'App/Models/MaternityLeaveProcess';
import MedicalClaimProcess from 'App/Models/MedicalClaimProcess';
import MovingInProcess from 'App/Models/MovingInProcess';
import MovingOutProcess from 'App/Models/MovingOutProcess';
import NewHire from 'App/Models/NewHire';
import NewHiredProcess from 'App/Models/NewHiredProcess';
import NewOffer from 'App/Models/NewOffer';
import NewOfferProcess from 'App/Models/NewOfferProcess';
import OtherLeave from 'App/Models/OtherLeave';
import OtherLeaveProcess from 'App/Models/OtherLeaveProcess';
import PassportPaymentProcess from 'App/Models/PassportPaymentProcess';
import PensionDetail from 'App/Models/PensionDetail';
import Performance from 'App/Models/Performance';
import PersonalDetail from 'App/Models/PersonalDetail';
import PersonalInsuranceProcess from 'App/Models/PersonalInsuranceProcess';
import Placement from 'App/Models/Placement';
import Position from 'App/Models/Position';
import RemoteReligiousLeave from 'App/Models/RemoteReligiousLeave';
import RemoteReligiousLeaveProcess from 'App/Models/RemoteReligiousLeaveProcess';
import ReplacementAnnualLeave from 'App/Models/ReplacementAnnualLeave';
import ReplacementAnnualLeaveProcess from 'App/Models/ReplacementAnnualLeaveProcess';
import Salary from 'App/Models/Salary';
import SelfRequestPostponeProcess from 'App/Models/SelfTransferPostponeProcess';
import SelfRequestProcess from 'App/Models/SelfTransferProcess';
import SelfTransfers from 'App/Models/SelfTransfers';
import ServiceConfirmation from 'App/Models/ServiceConfirmation';
import ServiceConfirmationProcess from 'App/Models/ServiceConfirmationProcess';
import ServiceGroup from 'App/Models/ServiceGroup';
import ServiceType from 'App/Models/ServiceType';
import StateVisitAllowanceProcess from 'App/Models/StateVisitAllowanceProcess';
import Surcharge from 'App/Models/Surcharge';
import TemporaryPermission from 'App/Models/TemporaryPermission';
import TerminationInterimProcess from 'App/Models/TerminationInterimProcess';
import Unit from 'App/Models/Unit';
import UnspecifiedRetirement from 'App/Models/UnspecifiedRetirement';
import UserAccount from 'App/Models/UserAccount';
import VehicleLoanProcesses from 'App/Models/VehicleLoanProcesses';
import VoluntaryRetirement from 'App/Models/VoluntaryRetirement';
import VoluntaryRetirementProcess from 'App/Models/VoluntaryRetirementProcess';
import WithdrawalAnnualLeave from 'App/Models/WithdrawalAnnualLeave';
import WithdrawalAnnualLeaveProcess from 'App/Models/WithdrawalAnnualLeaveProcess';
import WithoutPayLeave from 'App/Models/WithoutPayLeave';
import WithoutPayLeaveProcess from 'App/Models/WithoutPayLeaveProcess';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import { DateTime } from 'luxon';
import InternalRelationship from './InternalRelationship';
import PastPosition from './PastPosition';

export default class Employee extends BaseModel {
  public static table = 'employees';
  public static primaryKey = 'id';
  public static incrementing = false;

  public static namingStrategy = new CamelCaseNamingStrategy();

  @column({ isPrimary: true, columnName: 'id', serializeAs: null })
  public id: bigint;

  @column({ columnName: 'personalDetailId', serializeAs: null })
  public personalDetailId: bigint;

  @column({ columnName: 'positionId', serializeAs: null })
  public positionId: bigint;

  @column({ columnName: 'gradeId', serializeAs: null })
  public gradeId: bigint;

  @column({ columnName: 'serviceTypeId', serializeAs: null })
  public serviceTypeId: bigint;

  @column({ columnName: 'serviceGroupId', serializeAs: null })
  public serviceGroupId: bigint;

  @column({ columnName: 'placementId', serializeAs: null })
  public placementId: bigint;

  @column({ columnName: 'unitId', serializeAs: null })
  public unitId: bigint;

  @column({ columnName: 'employmentStatusId', serializeAs: null })
  public employmentStatusId: bigint;

  @column({ columnName: 'employeeNumber' })
  public employeeNumber: string;

  @column.dateTime({ columnName: 'retirementDate' })
  public retirementDate: DateTime;

  @column({ columnName: 'programme' })
  public programme: string;

  @column({ columnName: 'scheme' })
  public scheme: string;

  @column({ columnName: 'eligibleLeaveCount' })
  public eligibleLeaveCount: number;

  @column.dateTime({ columnName: 'newRecruitEffectiveDate' })
  public newRecruitEffectiveDate: DateTime;

  @column.dateTime({ columnName: 'civilServiceStartDate' })
  public civilServiceStartDate: DateTime;

  @column.dateTime({ columnName: 'firstServiceDate' })
  public firstServiceDate: DateTime;

  @column.dateTime({ columnName: 'firstConfirmServiceDate' })
  public firstConfirmServiceDate: DateTime;

  @column.dateTime({ columnName: 'firstEffectiveServiceDate' })
  public firstEffectiveServiceDate: DateTime;

  @column.dateTime({ columnName: 'serviceDate' })
  public serviceDate: DateTime;

  @column.dateTime({ columnName: 'confirmServiceDate' })
  public confirmServiceDate: DateTime;

  @column.dateTime({ columnName: 'effectiveDate' })
  public effectiveDate: DateTime;

  @column({ columnName: 'officeNumber' })
  public officeNumber: string;

  @column({ columnName: 'active', serializeAs: null })
  public active: boolean;

  @column({ columnName: 'createdBy', serializeAs: null })
  public createdBy: string;

  @column.dateTime({
      columnName: 'createdAt',
      autoCreate: true,
      serializeAs: null,
  })
  public createdAt: DateTime;

  @column({ columnName: 'modifiedBy', serializeAs: null })
  public modifiedBy: string;

  @column.dateTime({
      columnName: 'modifiedAt',
      autoCreate: true,
      autoUpdate: true,
      serializeAs: null,
  })
  public modifiedAt: DateTime;

  //Relationship
  @hasOne(() => PastPosition, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public pastPosition: HasOne<typeof PastPosition>;

  @belongsTo(() => PersonalDetail, {
      foreignKey: 'personalDetailId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public personalDetail: BelongsTo<typeof PersonalDetail>;

  @belongsTo(() => Position, {
      foreignKey: 'positionId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public position: BelongsTo<typeof Position>;

  @belongsTo(() => Grade, {
      foreignKey: 'gradeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public grade: BelongsTo<typeof Grade>;

  @belongsTo(() => ServiceType, {
      foreignKey: 'serviceTypeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public serviceType: BelongsTo<typeof ServiceType>;

  @belongsTo(() => ServiceGroup, {
      foreignKey: 'serviceGroupId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public serviceGroup: BelongsTo<typeof ServiceGroup>;

  @belongsTo(() => Unit, {
      foreignKey: 'unitId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public unit: BelongsTo<typeof Unit>;

  @belongsTo(() => Placement, {
      foreignKey: 'placementId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public placement: BelongsTo<typeof Placement>;

  @belongsTo(() => EmploymentStatus, {
      foreignKey: 'employmentStatusId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public employmentStatus: BelongsTo<typeof EmploymentStatus>;

  @belongsTo(() => Candidate, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public candidate: BelongsTo<typeof Candidate>;

  @hasOne(() => UserAccount, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public userAccount: HasOne<typeof UserAccount>;

  @hasMany(() => TemporaryPermission, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public temporaryPermissions: HasMany<typeof TemporaryPermission>;

  @hasMany(() => EmployeeRole, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public employeeRoles: HasMany<typeof EmployeeRole>;

  //Relationship -> Module Employment
  @hasMany(() => UnspecifiedRetirement, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public unspecifiedRetirements: HasMany<typeof UnspecifiedRetirement>;

  @hasMany(() => UnspecifiedRetirement, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public unspecifiedRetirementsAsConfirmer: HasMany<
      typeof UnspecifiedRetirement
  >;

  //Force Retirement
  @hasMany(() => ForcedRetirement, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public forcedRetirements: HasMany<typeof ForcedRetirement>;

  //Force RetirementProcess
  @hasMany(() => ForcedRetirementProcess, {
      foreignKey: 'cerfitierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public forcedRetirementProcessesAsCertifier: HasMany<
      typeof ForcedRetirementProcess
  >;

  @hasMany(() => ForcedRetirementProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public forcedRetirementProcessesAsConfirmer: HasMany<
      typeof ForcedRetirementProcess
  >;

  //Voluntary Retirement
  @hasMany(() => VoluntaryRetirement, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public voluntaryRetirements: HasMany<typeof VoluntaryRetirement>;

  @hasMany(() => VoluntaryRetirementProcess, {
      foreignKey: 'certifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public voluntaryRetirementProcessesAsCertifier: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public voluntaryRetirementProcessAsConfirmer: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'supporter1Id' })
  public VoluntaryRetirementProcessAssupporter1: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'supporter2Id' })
  public VoluntaryRetirementProcessAssupporter2: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, {
      foreignKey: 'appointedApproverId',
  })
  public VoluntaryRetirementProcessAsappointedApprover: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, {
      foreignKey: 'secretaryApproverId',
  })
  public VoluntaryRetirementProcessAssecretaryApprover: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, {
      foreignKey: 'documentCertifierId',
  })
  public VoluntaryRetirementProcessAsDocumentCertifier: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  @hasMany(() => VoluntaryRetirementProcess, {
      foreignKey: 'letterCertifierId',
  })
  public VoluntaryRetirementProcessAsLetterCertifier: HasMany<
      typeof VoluntaryRetirementProcess
  >;

  //Interim
  @hasMany(() => EmploymentInterim, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public employmentInterimAsEmployeeId: HasMany<typeof EmploymentInterim>;

  @hasMany(() => ApplicationInterimProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public applicationInterimProcessAssupporter: HasMany<
      typeof ApplicationInterimProcess
  >;

  @hasMany(() => ApplicationInterimProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public applicationInterimProcessAsverifier: HasMany<
      typeof ApplicationInterimProcess
  >;

  @hasMany(() => ApplicationInterimProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public applicationInterimProcessAsapprover: HasMany<
      typeof ApplicationInterimProcess
  >;

  @hasMany(() => TerminationInterimProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public terminationInterimProcessAsverifier: HasMany<
      typeof TerminationInterimProcess
  >;

  @hasMany(() => TerminationInterimProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public terminationInterimProcessAssupporter: HasMany<
      typeof TerminationInterimProcess
  >;

  @hasMany(() => TerminationInterimProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public terminationInterimProcessAsapprover: HasMany<
      typeof TerminationInterimProcess
  >;

  @hasMany(() => ChecklistInterim, {
      foreignKey: 'preparerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public checklistInterimAspreparer: HasMany<typeof ChecklistInterim>;

  @hasMany(() => ChecklistInterim, {
      foreignKey: 'checkerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public checklistInterimAschecker: HasMany<typeof ChecklistInterim>;

  //Transfer
  //Self Request
  @hasMany(() => SelfTransfers, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public SelfRequestAsemployee: HasMany<typeof SelfTransfers>;

  @hasMany(() => SelfRequestProcess, {
      foreignKey: 'directorSupporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public SelfRequestProcessAsdirectorSupporter: HasMany<
      typeof SelfRequestProcess
  >;

  @hasMany(() => SelfRequestProcess, {
      foreignKey: 'appointedSupporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public SelfRequestProcessAsappointedSupporter: HasMany<
      typeof SelfRequestProcess
  >;

  @hasMany(() => SelfRequestProcess, {
      foreignKey: 'appointedApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public SelfRequestProcessAsappointedApprover: HasMany<
      typeof SelfRequestProcess
  >;

  @hasMany(() => SelfRequestPostponeProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public SelfRequestPostponeProcessAsapprover: HasMany<
      typeof SelfRequestPostponeProcess
  >;

  //Force by Director
  @hasMany(() => ForceTransferByDirector, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ForceTransferByDirectorAsemployee: HasMany<
      typeof ForceTransferByDirector
  >;

  @hasMany(() => ForcedByDirectorProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ForceByDirectorProcessAssupporter: HasMany<
      typeof ForcedByDirectorProcess
  >;

  @hasMany(() => ForcedByDirectorProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ForceByDirectorProcessAsapprover: HasMany<
      typeof ForcedByDirectorProcess
  >;

  @hasMany(() => ForcedByDirectorPostponeProcess, {
      foreignKey: 'approverId',
  })
  public ForceByDirectorPostponeProcessAsapprover: HasMany<
      typeof ForcedByDirectorPostponeProcess
  >;

  //force by Management
  @hasMany(() => ForceTransferByManagement, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ForceTransferByManagementAsemployee: HasMany<
      typeof ForceTransferByManagement
  >;

  @hasMany(() => ForcedByManagementProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ForceByManagementProcessAssupporter: HasMany<
      typeof ForcedByManagementProcess
  >;

  @hasMany(() => ForcedByManagementProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ForceByManagementProcessAsapprover: HasMany<
      typeof ForcedByManagementProcess
  >;

  @hasMany(() => ForcedByManagementPostponeProcesses, {
      foreignKey: 'approverId',
  })
  public ForceByManagementPostponeProcessAsapprover: HasMany<
      typeof ForcedByManagementPostponeProcesses
  >;

  //Acting
  @hasMany(() => GradeActingType, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradeActingTypesAsemployee: HasMany<typeof GradeActingType>;

  @hasMany(() => GradeActingTypesProcess, {
      foreignKey: 'integrityCertifierId',
  })
  public GradeActingTypesProcessAsintegrityCertifier: HasMany<
      typeof GradeActingTypesProcess
  >;

  @hasMany(() => GradeActingTypesProcess, {
      foreignKey: 'directorCertifierId',
  })
  public GradeActingTypesProcessAsdirectorCertifier: HasMany<
      typeof GradeActingTypesProcess
  >;

  @hasMany(() => GradeActingTypesProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradeActingTypesProcessAssupporter: HasMany<
      typeof GradeActingTypesProcess
  >;

  @hasMany(() => GradeActingTypesProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradeActingTypesProcessAsapprover: HasMany<
      typeof GradeActingTypesProcess
  >;

  @hasMany(() => MainGradeActingPromotion, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MainGradeActingPromotionAsemployee: HasMany<
      typeof MainGradeActingPromotion
  >;

  @hasMany(() => MainGradeActingPromotionProcess, {
      foreignKey: 'certifierId',
  })
  public MainGradeActingPromotionProcessAscertifier: HasMany<
      typeof MainGradeActingPromotionProcess
  >;

  @hasMany(() => MainGradeActingPromotionProcess, {
      foreignKey: 'supporterId',
  })
  public MainGradeActingPromotionProcessAssupporter: HasMany<
      typeof MainGradeActingPromotionProcess
  >;

  @hasMany(() => MainGradeActingPromotionProcess, {
      foreignKey: 'approverId',
  })
  public MainGradeActingPromotionProcessAsapprover: HasMany<
      typeof MainGradeActingPromotionProcess
  >;

  //Grade Promotion Part
  @hasMany(() => GradePromotionType, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradePromotionTypeAsemployee: HasMany<typeof GradePromotionType>;

  @hasMany(() => GradePromotionProcess, {
      foreignKey: 'integrityCertifierId',
  })
  public GradePromotionProcessAsintegrityCertifier: HasMany<
      typeof GradePromotionProcess
  >;

  @hasMany(() => GradePromotionProcess, {
      foreignKey: 'directorCertifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradePromotionProcessAsdirectorCertifier: HasMany<
      typeof GradePromotionProcess
  >;

  @hasMany(() => GradePromotionProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradePromotionProcessAssupporter: HasMany<
      typeof GradePromotionProcess
  >;

  @hasMany(() => GradePromotionProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public GradePromotionProcessAsapprover: HasMany<
      typeof GradePromotionProcess
  >;

  //Pensions
  @hasMany(() => PensionDetail, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PensionDetailsAsemployee: HasMany<typeof PensionDetail>;

  @hasMany(() => PensionDetail, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PensionDetailsAsapprover: HasMany<typeof PensionDetail>;

  @hasMany(() => PensionDetail, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PensionDetailsAssupporter: HasMany<typeof PensionDetail>;

  //Service Confirmation
  @hasMany(() => ServiceConfirmation, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ServiceComfirmationAsemployee: HasMany<typeof ServiceConfirmation>;

  @hasMany(() => ServiceConfirmationProcess, {
      foreignKey: 'integrityCertifierId',
  })
  public ServiceComfirmationProcessAsintegrityCertifier: HasMany<
      typeof ServiceConfirmationProcess
  >;

  @hasMany(() => ServiceConfirmationProcess, {
      foreignKey: 'directorCertifierId',
  })
  public ServiceComfirmationProcessAsdirectorCertifier: HasMany<
      typeof ServiceConfirmationProcess
  >;

  @hasMany(() => ConfirmationMoreThan3, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ConfirmationMoreThan3Asemployee: HasMany<
      typeof ConfirmationMoreThan3
  >;

  @hasMany(() => ConfirmationMoreThan3, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ConfirmationMoreThan3Asverifier: HasMany<
      typeof ConfirmationMoreThan3
  >;

  //New Offers
  @hasMany(() => NewOffer, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public NewOffersAsemployee: HasMany<typeof NewOffer>;

  @hasMany(() => NewOfferProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public NewOffersProcessAssupporter: HasMany<typeof NewOfferProcess>;

  @hasMany(() => NewOfferProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public NewOffersProcessAsapprover: HasMany<typeof NewOfferProcess>;

  //New Hires
  @hasMany(() => NewHire, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public NewHiresAsemployee: HasMany<typeof NewHire>;

  @hasMany(() => NewHiredProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public NewHiredProcessAssupporter: HasMany<typeof NewHiredProcess>;

  @hasMany(() => NewHiredProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public NewHiredProcessAsapprover: HasMany<typeof NewHiredProcess>;

  //Relationship -> Module Integrity
  @hasMany(() => Surcharge, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public SurchargeAsemployee: HasMany<typeof Surcharge>;

  @hasMany(() => AppealApplication, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AppealApplicationAsemployee: HasMany<typeof AppealApplication>;

  @hasMany(() => IntegrityProceeding, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public IntegrityProceedingsAsemployee: HasMany<typeof IntegrityProceeding>;

  //Relationship -> Module Leave
  @hasMany(() => OtherLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public OtherLeavesAsemployee: HasMany<typeof OtherLeave>;

  @hasMany(() => ReplacementAnnualLeaveProcess, {
      foreignKey: 'directorSupporterId',
  })
  public ReplacementAnnualLeaveProcessAsdirectorSupporter: HasMany<
      typeof ReplacementAnnualLeaveProcess
  >;

  @hasMany(() => ReplacementAnnualLeaveProcess, {
      foreignKey: 'appointedSupporterId',
  })
  public ReplacementAnnualLeaveProcessAsappointedSupporter: HasMany<
      typeof ReplacementAnnualLeaveProcess
  >;

  @hasMany(() => ReplacementAnnualLeaveProcess, {
      foreignKey: 'certifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ReplacementAnnualLeaveProcessAscertifier: HasMany<
      typeof ReplacementAnnualLeaveProcess
  >;

  @hasMany(() => ReplacementAnnualLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ReplacementAnnualLeaveProcessAsapprover: HasMany<
      typeof ReplacementAnnualLeaveProcess
  >;

  @hasMany(() => OtherLeaveProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public OtherLeaveProcessAssupporter: HasMany<typeof OtherLeaveProcess>;

  @hasMany(() => OtherLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public OtherLeaveProcessAsverifier: HasMany<typeof OtherLeaveProcess>;

  @hasMany(() => OtherLeaveProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public OtherLeaveProcessAsconfirmer: HasMany<typeof OtherLeaveProcess>;

  @hasMany(() => OtherLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public OtherLeaveProcessAsapprover: HasMany<typeof OtherLeaveProcess>;

  @hasMany(() => RemoteReligiousLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public RemoteReligiousLeavesAsemployee: HasMany<
      typeof RemoteReligiousLeave
  >;

  @hasMany(() => RemoteReligiousLeaveProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public RemoteReligiousLeaveProcessAssupporter: HasMany<
      typeof RemoteReligiousLeaveProcess
  >;

  @hasMany(() => RemoteReligiousLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public RemoteReligiousLeaveProcessAsverifier: HasMany<
      typeof RemoteReligiousLeaveProcess
  >;

  @hasMany(() => RemoteReligiousLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public RemoteReligiousLeaveProcessAsapprover: HasMany<
      typeof RemoteReligiousLeaveProcess
  >;

  @hasMany(() => MaternityLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MaternityLeavesAsemployee: HasMany<typeof MaternityLeave>;

  @hasMany(() => MaternityLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MaternityLeaveProcessAsverifier: HasMany<
      typeof MaternityLeaveProcess
  >;

  @hasMany(() => MaternityLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MaternityLeaveProcessAsapprover: HasMany<
      typeof MaternityLeaveProcess
  >;

  @hasMany(() => WithoutPayLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithoutPayLeavesAsemployee: HasMany<typeof WithoutPayLeave>;

  @hasMany(() => WithoutPayLeaveProcess, {
      foreignKey: 'directorSupporterId',
  })
  public WithoutPayLeaveProcessAsdirectorSupporter: HasMany<
      typeof WithoutPayLeaveProcess
  >;

  @hasMany(() => WithoutPayLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithoutPayLeaveProcessAsverifier: HasMany<
      typeof WithoutPayLeaveProcess
  >;

  @hasMany(() => WithoutPayLeaveProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithoutPayLeaveProcessAsconfirmer: HasMany<
      typeof WithoutPayLeaveProcess
  >;

  @hasMany(() => WithoutPayLeaveProcess, {
      foreignKey: 'appointedSupporterId',
  })
  public WithoutPayLeaveProcessAsappointedSupporter: HasMany<
      typeof WithoutPayLeaveProcess
  >;

  @hasMany(() => WithoutPayLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithoutPayLeaveProcessAsapprover: HasMany<
      typeof WithoutPayLeaveProcess
  >;

  @hasMany(() => HalfPayLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HalfPayLeavesAsemployee: HasMany<typeof HalfPayLeave>;

  @hasMany(() => HalfPayLeaveProcess, {
      foreignKey: 'directorSupporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HalfPayLeaveProcessAsdirectorSupporter: HasMany<
      typeof HalfPayLeaveProcess
  >;

  @hasMany(() => HalfPayLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HalfPayLeaveProcessAsverifier: HasMany<typeof HalfPayLeaveProcess>;

  @hasMany(() => HalfPayLeaveProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HalfPayLeaveProcessAsconfirmer: HasMany<typeof HalfPayLeaveProcess>;

  @hasMany(() => HalfPayLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HalfPayLeaveProcessAsapprover: HasMany<typeof HalfPayLeaveProcess>;

  @hasMany(() => AlternateUntrackedLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AlternateUntrackedLeavesAsemployee: HasMany<
      typeof AlternateUntrackedLeave
  >;

  @hasMany(() => AlternateUntrackedLeaveProcess, {
      foreignKey: 'directorSupporterId',
  })
  public AlternateUntrackedLeaveProcessAsdirectorSupporter: HasMany<
      typeof AlternateUntrackedLeaveProcess
  >;

  @hasMany(() => AlternateUntrackedLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AlternateUntrackedLeaveProcessAsverifier: HasMany<
      typeof AlternateUntrackedLeaveProcess
  >;

  @hasMany(() => AlternateUntrackedLeaveProcess, {
      foreignKey: 'confirmerId',
  })
  public AlternateUntrackedLeaveProcessAsconfirmer: HasMany<
      typeof AlternateUntrackedLeaveProcess
  >;

  @hasMany(() => AlternateUntrackedLeaveProcess, {
      foreignKey: 'appointedSupporterId',
  })
  public AlternateUntrackedLeaveProcessAsappointedSupporter: HasMany<
      typeof AlternateUntrackedLeaveProcess
  >;

  @hasMany(() => AlternateUntrackedLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AlternateUntrackedLeaveProcessAsapprover: HasMany<
      typeof AlternateUntrackedLeaveProcess
  >;

  @hasMany(() => ReplacementAnnualLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ReplacementAnnualLeavesAsemployee: HasMany<
      typeof ReplacementAnnualLeave
  >;

  @hasMany(() => WithdrawalAnnualLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithdrawalAnnualLeavesAsemployee: HasMany<
      typeof WithdrawalAnnualLeave
  >;

  @hasMany(() => WithdrawalAnnualLeaveProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithdrawalAnnualLeaveProcessAssupporter: HasMany<
      typeof WithdrawalAnnualLeaveProcess
  >;

  @hasMany(() => WithdrawalAnnualLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithdrawalAnnualLeaveProcessAsverifier: HasMany<
      typeof WithdrawalAnnualLeaveProcess
  >;

  @hasMany(() => WithdrawalAnnualLeaveProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithdrawalAnnualLeaveProcessAsconfirmer: HasMany<
      typeof WithdrawalAnnualLeaveProcess
  >;

  @hasMany(() => WithdrawalAnnualLeaveProcess, {
      foreignKey: 'certifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithdrawalAnnualLeaveProcessAscertifier: HasMany<
      typeof WithdrawalAnnualLeaveProcess
  >;

  @hasMany(() => WithdrawalAnnualLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public WithdrawalAnnualLeaveProcessAsapprover: HasMany<
      typeof WithdrawalAnnualLeaveProcess
  >;

  @hasMany(() => AccruedAnnualLeave, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AccruedAnnualLeavesAsemployee: HasMany<typeof AccruedAnnualLeave>;

  @hasMany(() => AccruedAnnualLeaveProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AccruedAnnualLeaveProcessAssupporter: HasMany<
      typeof AccruedAnnualLeaveProcess
  >;

  @hasMany(() => AccruedAnnualLeaveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AccruedAnnualLeaveProcessAsapprover: HasMany<
      typeof AccruedAnnualLeaveProcess
  >;

  @hasMany(() => AccruedAnnualLeaveProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AccruedAnnualLeaveProcessAsverifier: HasMany<
      typeof AccruedAnnualLeaveProcess
  >;

  @hasMany(() => AccruedAnnualLeaveProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AccruedAnnualLeaveProcessAsconfirmer: HasMany<
      typeof AccruedAnnualLeaveProcess
  >;

  //Relationship -> Module Performance
  @hasMany(() => ExcellenceAwardHistory, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ExcellenceAwardHistoriesAsemployee: HasMany<
      typeof ExcellenceAwardHistory
  >;

  @hasMany(() => Performance, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PerformancesAsemployee: HasMany<typeof Performance>;

  @hasMany(() => Performance, {
      foreignKey: 'PPKEmployeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PerformancesAsPPKEmployee: HasMany<typeof Performance>;

  @hasMany(() => Performance, {
      foreignKey: 'PPPEmployeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PerformancesAsPPPEmployee: HasMany<typeof Performance>;

  //Relationship -> Module Contract
  @hasMany(() => ContractAppointmentsProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ContractAppointmentProcessAssupporter: HasMany<
      typeof ContractAppointmentsProcess
  >;

  @hasMany(() => ContractAppointmentsProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ContractAppointmentProcessAsapprover: HasMany<
      typeof ContractAppointmentsProcess
  >;

  @hasMany(() => ContractLifeCycleProcess, {
      foreignKey: 'certifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ContractLifeCycleProcessAscertifier: HasMany<
      typeof ContractLifeCycleProcess
  >;

  @hasMany(() => ContractLifeCycleProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ContractLifeCycleProcessAssupporter: HasMany<
      typeof ContractLifeCycleProcess
  >;

  @hasMany(() => ContractLifeCycleProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ContractLifeCycleProcessAsapprover: HasMany<
      typeof ContractLifeCycleProcess
  >;

  @hasMany(() => ContractLifeCycleProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ContractLifeCycleProcessAsconfirmer: HasMany<
      typeof ContractLifeCycleProcess
  >;

  //Relationship -> Module Courses
  @hasMany(() => EducationFundReimbursement, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public EducationFundReimbursementAsemployee: HasMany<
      typeof EducationFundReimbursement
  >;

  @hasMany(() => FundReimbursementProcess, {
      foreignKey: 'confimerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FundReimbursementAsconfimer: HasMany<
      typeof FundReimbursementProcess
  >;

  @hasMany(() => FundReimbursementProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FundReimbursementAsverifier: HasMany<
      typeof FundReimbursementProcess
  >;

  @hasMany(() => EducationFundApplication, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public EducationFundApplicationAsemployee: HasMany<
      typeof EducationFundApplication
  >;

  @hasMany(() => FundApplicationProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FundApplicationProcessAssupporter: HasMany<
      typeof FundApplicationProcess
  >;

  @hasMany(() => FundApplicationProcess, {
      foreignKey: 'certifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FundApplicationProcessAscertifier: HasMany<
      typeof FundApplicationProcess
  >;

  @hasMany(() => FundApplicationProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FundApplicationProcessAsconfirmer: HasMany<
      typeof FundApplicationProcess
  >;

  @hasMany(() => FundApplicationProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FundApplicationProcessAsverifier: HasMany<
      typeof FundApplicationProcess
  >;

  @hasMany(() => ExamApplication, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ExamApplicationAsemployee: HasMany<typeof ExamApplication>;

  @hasMany(() => ExamApplicationProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ExamApplicationProcessAsverifier: HasMany<
      typeof ExamApplicationProcess
  >;

  @hasMany(() => ExamApplicationProcess, {
      foreignKey: 'confimerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ExamApplicationProcessAsconfimer: HasMany<
      typeof ExamApplicationProcess
  >;

  //Relationship -> Module Salary
  @hasOne(() => Salary, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public employeeSalary: HasOne<typeof Salary>;

  //Allowances
  @hasMany(() => ClothingAssistanceProcess, {
      foreignKey: 'directorSupporterId',
  })
  public ClothingAssistanceProcessAsdirectorSupporter: HasMany<
      typeof ClothingAssistanceProcess
  >;

  @hasMany(() => ClothingAssistanceProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClothingAssistanceProcessAsverifier: HasMany<
      typeof ClothingAssistanceProcess
  >;

  @hasMany(() => ClothingAssistanceProcess, {
      foreignKey: 'appointedSupporterId',
  })
  public ClothingAssistanceProcessAsappointedSupporter: HasMany<
      typeof ClothingAssistanceProcess
  >;

  @hasMany(() => ClothingAssistanceProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClothingAssistanceProcessAsapprover: HasMany<
      typeof ClothingAssistanceProcess
  >;

  @hasMany(() => StateVisitAllowanceProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public StateVisitAllowanceProcessAsverifier: HasMany<
      typeof StateVisitAllowanceProcess
  >;

  @hasMany(() => StateVisitAllowanceProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public StateVisitAllowanceProcessAssupporter: HasMany<
      typeof StateVisitAllowanceProcess
  >;

  @hasMany(() => StateVisitAllowanceProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public StateVisitAllowanceProcessAsapprover: HasMany<
      typeof StateVisitAllowanceProcess
  >;

  @hasMany(() => FuneralArrangementProcess, {
      foreignKey: 'secretaryVerifierId',
  })
  public FuneralArrangementProcessAssecretaryVerifier: HasMany<
      typeof FuneralArrangementProcess
  >;

  @hasMany(() => FuneralArrangementProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FuneralArrangementProcessAssupporter: HasMany<
      typeof FuneralArrangementProcess
  >;

  @hasMany(() => FuneralArrangementProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FuneralArrangementProcessAsapprover: HasMany<
      typeof FuneralArrangementProcess
  >;

  @hasMany(() => FuneralArrangementProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FuneralArrangementProcessAsverifier: HasMany<
      typeof FuneralArrangementProcess
  >;

  @hasMany(() => FuneralArrangementProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public FuneralArrangementProcessAsconfirmer: HasMany<
      typeof FuneralArrangementProcess
  >;

  @hasMany(() => EmployeeWelfareFundProcess, {
      foreignKey: 'directorSupporterId',
  })
  public EmployeeWelfareFundProcessAsdirectorSupporter: HasMany<
      typeof EmployeeWelfareFundProcess
  >;

  @hasMany(() => EmployeeWelfareFundProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public EmployeeWelfareFundProcessAsverifier: HasMany<
      typeof EmployeeWelfareFundProcess
  >;

  @hasMany(() => EmployeeWelfareFundProcess, {
      foreignKey: 'appointedSupporterId',
  })
  public EmployeeWelfareFundProcessAsappointedSupporter: HasMany<
      typeof EmployeeWelfareFundProcess
  >;

  @hasMany(() => EmployeeWelfareFundProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public EmployeeWelfareFundProcessAsapprover: HasMany<
      typeof EmployeeWelfareFundProcess
  >;

  @hasMany(() => HouseMovingProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HouseMovingProcessAsconfirmer: HasMany<typeof HouseMovingProcess>;

  @hasMany(() => HouseMovingProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HouseMovingProcessAsverifier: HasMany<typeof HouseMovingProcess>;

  @hasMany(() => HouseMovingProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HouseMovingProcessAssupporter: HasMany<typeof HouseMovingProcess>;

  @hasMany(() => HouseMovingProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public HouseMovingProcessAsapprover: HasMany<typeof HouseMovingProcess>;

  @hasMany(() => PassportPaymentProcess, {
      foreignKey: 'directorSupporterId',
  })
  public PassportPaymentProcessAsdirectorSupporter: HasMany<
      typeof PassportPaymentProcess
  >;

  @hasMany(() => PassportPaymentProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PassportPaymentProcessAsverifier: HasMany<
      typeof PassportPaymentProcess
  >;

  @hasMany(() => PassportPaymentProcess, {
      foreignKey: 'appointedSupporterId',
  })
  public PassportPaymentProcessAsappointedSupporter: HasMany<
      typeof PassportPaymentProcess
  >;

  @hasMany(() => PassportPaymentProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PassportPaymentProcessAsapprover: HasMany<
      typeof PassportPaymentProcess
  >;

  @hasMany(() => PersonalInsuranceProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PersonalInsuranceProcessAsverifier: HasMany<
      typeof PersonalInsuranceProcess
  >;

  @hasMany(() => PersonalInsuranceProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PersonalInsuranceProcessAssupporter: HasMany<
      typeof PersonalInsuranceProcess
  >;

  @hasMany(() => PersonalInsuranceProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public PersonalInsuranceProcessAsapprover: HasMany<
      typeof PersonalInsuranceProcess
  >;

  @hasMany(() => CargoShippingProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public CargoShippingProcessAsverifier: HasMany<typeof CargoShippingProcess>;

  @hasMany(() => CargoShippingProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public CargoShippingProcessAssupporter: HasMany<
      typeof CargoShippingProcess
  >;

  @hasMany(() => CargoShippingProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public CargoShippingProcessAsapprover: HasMany<typeof CargoShippingProcess>;

  //Loan Module
  @hasMany(() => MovingInProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MovingInProcessAsverifier: HasMany<typeof MovingInProcess>;

  @hasMany(() => MovingInProcess, {
      foreignKey: 'secretaryApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MovingInProcessAssecretaryApprover: HasMany<typeof MovingInProcess>;

  @hasMany(() => MovingInProcess, {
      foreignKey: 'directorApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MovingInProcessAsdirectorApprover: HasMany<typeof MovingInProcess>;

  @hasMany(() => MovingOutProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MovingOutProcessAsverifier: HasMany<typeof MovingOutProcess>;

  @hasMany(() => MovingOutProcess, {
      foreignKey: 'directorApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MovingOutProcessAsdirectorApprover: HasMany<typeof MovingOutProcess>;

  @hasMany(() => ComputerLoanProcess, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ComputerLoanProcessAsverifier: HasMany<typeof ComputerLoanProcess>;

  @hasMany(() => ComputerLoanProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ComputerLoanProcessAssupporter: HasMany<typeof ComputerLoanProcess>;

  @hasMany(() => ComputerLoanProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ComputerLoanProcessAsapprover: HasMany<typeof ComputerLoanProcess>;

  @hasMany(() => VehicleLoanProcesses, {
      foreignKey: 'verifierId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public VehicleLoanProcessAsverifier: HasMany<typeof VehicleLoanProcesses>;

  @hasMany(() => VehicleLoanProcesses, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public VehicleLoanProcessAssupporter: HasMany<typeof VehicleLoanProcesses>;

  @hasMany(() => VehicleLoanProcesses, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public VehicleLoanProcessAsapprover: HasMany<typeof VehicleLoanProcesses>;

  //Relationship -> Module Medical
  @hasMany(() => AnnualMedicalAllocation, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public AnnualMedicalAllocationAsemployee: HasMany<
      typeof AnnualMedicalAllocation
  >;

  @hasMany(() => MedicalClaimProcess, {
      foreignKey: 'secretaryApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MedicalClaimProcessAssecretaryApprover: HasMany<
      typeof MedicalClaimProcess
  >;

  @hasMany(() => MedicalClaimProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MedicalClaimProcessAssupporter: HasMany<typeof MedicalClaimProcess>;

  @hasMany(() => MedicalClaimProcess, {
      foreignKey: 'appointedApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public MedicalClaimProcessAsappointedApprover: HasMany<
      typeof MedicalClaimProcess
  >;

  @hasMany(() => ClinicClaimProcess, {
      foreignKey: 'secretaryApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClinicClaimProcessAssecretaryApprover: HasMany<
      typeof ClinicClaimProcess
  >;

  @hasMany(() => ClinicClaimProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClinicClaimProcessAssupporter: HasMany<typeof ClinicClaimProcess>;

  @hasMany(() => ClinicClaimProcess, {
      foreignKey: 'appointedApproverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClinicClaimProcessAsappointedApprover: HasMany<
      typeof ClinicClaimProcess
  >;

  @hasMany(() => ClinicApproveProcess, {
      foreignKey: 'confirmerId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClinicApprovalProcessAsconfirmer: HasMany<
      typeof ClinicApproveProcess
  >;

  @hasMany(() => ClinicApproveProcess, {
      foreignKey: 'supporterId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClinicApprovalProcessAssupporter: HasMany<
      typeof ClinicApproveProcess
  >;

  @hasMany(() => ClinicApproveProcess, {
      foreignKey: 'approverId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public ClinicApprovalProcessAsapprover: HasMany<
      typeof ClinicApproveProcess
  >;

  @hasMany(() => LeaveEntitlement, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public LeaveEntitlementAsEmployee: HasMany<typeof LeaveEntitlement>;

  @hasMany(() => InternalRelationship, {
      foreignKey: 'employeeId',
      onQuery: (query) => {
          query.where('active', true);
      },
  })
  public internalRelationship: HasMany<typeof InternalRelationship>;
}
