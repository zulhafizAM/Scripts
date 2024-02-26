import { DateTime } from 'luxon';
import {
    column,
    BaseModel,
    belongsTo,
    BelongsTo,
    hasOne,
    HasOne,
    HasMany,
    hasMany,
    beforeFind,
    scope,
} from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';
import PastPosition from './PastPosition';
import PersonalDetail from './PersonalDetail';
import Position from './Position';
import Grade from './Grade';
import ServiceType from './ServiceType';
import ServiceGroup from './ServiceGroup';
import Unit from './Unit';
import Placement from './Placement';
import EmploymentStatus from './EmploymentStatus';
import Candidate from './Candidate';
import UserAccount from './UserAccount';
import TemporaryPermission from './TemporaryPermission';
import EmployeeRole from './EmployeeRole';
import UnspecifiedRetirement from './UnspecifiedRetirement';
import ForcedRetirement from './ForcedRetirement';
import ForcedRetirementProcess from './ForcedRetirementProcess';
import VoluntaryRetirement from './VoluntaryRetirement';
import VoluntaryRetirementProcess from './VoluntaryRetirementProcess';
import EmploymentInterim from './EmploymentInterim';
import ApplicationInterimProcess from './ApplicationInterimProcess';
import TerminationInterimProcess from './TerminationInterimProcess';
import ChecklistInterim from './ChecklistInterim';
import SelfTransfers from './SelfTransfers';
import SelfRequestProcess from './SelfRequestProcess';
import SelfRequestPostponeProcess from './SelfRequestPostponeProcess';
import ForceTransferByDirector from './ForceTransferByDirector';
import ForcedByDirectorProcess from './ForcedByDirectorProcess';
import ForcedByDirectorPostponeProcess from './ForcedByDirectorPostponeProcess';
import ForceTransferByManagement from './ForceTransferByManagement';
import ForcedByManagementProcess from './ForcedByManagementProcess';
import ForcedByManagementPostponeProcesses from './ForcedByManagementPostponeProcesses';
import GradeActingType from './GradeActingType';
import GradeActingTypesProcess from './GradeActingTypesProcess';
import MainGradeActingPromotion from './MainGradeActingPromotion';
import MainGradeActingPromotionProcess from './MainGradeActingPromotionProcess';
import GradePromotionType from './GradePromotionType';
import GradePromotionProcess from './GradePromotionProcess';
import PensionDetail from './PensionDetail';
import ServiceConfirmation from './ServiceConfirmation';
import ServiceConfirmationProcess from './ServiceConfirmationProcess';
import ConfirmationMoreThan3 from './ConfirmationMoreThan3';
import NewOffer from './NewOffer';
import NewOfferProcess from './NewOfferProcess';
import NewHire from './NewHire';
import NewHiredProcess from './NewHiredProcess';
import Surcharge from './Surcharge';
import AppealApplication from './AppealApplication';
import IntegrityProceeding from './IntegrityProceeding';
import OtherLeave from './OtherLeave';
import ReplacementAnnualLeaveProcess from './ReplacementAnnualLeaveProcess';
import OtherLeaveProcess from './OtherLeaveProcess';
import RemoteReligiousLeave from './RemoteReligiousLeave';
import RemoteReligiousLeaveProcess from './RemoteReligiousLeaveProcess';
import MaternityLeave from './MaternityLeave';
import MaternityLeaveProcess from './MaternityLeaveProcess';
import WithoutPayLeave from './WithoutPayLeave';
import WithoutPayLeaveProcess from './WithoutPayLeaveProcess';
import HalfPayLeave from './HalfPayLeave';
import HalfPayLeaveProcess from './HalfPayLeaveProcess';
import AlternateUntrackedLeave from './AlternateUntrackedLeave';
import AlternateUntrackedLeaveProcess from './AlternateUntrackedLeaveProcess';
import ReplacementAnnualLeave from './ReplacementAnnualLeave';
import WithdrawalAnnualLeave from './WithdrawalAnnualLeave';
import WithdrawalAnnualLeaveProcess from './WithdrawalAnnualLeaveProcess';
import AccruedAnnualLeave from './AccruedAnnualLeave';
import AccruedAnnualLeaveProcess from './AccruedAnnualLeaveProcess';
import ExcellenceAwardHistory from './ExcellenceAwardHistory';
import Performance from './Performance';
import ContractAppointmentsProcess from './ContractAppointmentsProcess';
import ContractLifeCycleProcess from './ContractLifeCycleProcess';
import EducationFundReimbursement from './EducationFundReimbursement';
import FundReimbursementProcess from './FundReimbursementProcess';
import EducationFundApplication from './EducationFundApplication';
import FundApplicationProcess from './FundApplicationProcess';
import ExamApplication from './ExamApplication';
import ExamApplicationProcess from './ExamApplicationProcess';
import Salary from './Salary';
import ClothingAssistanceProcess from './ClothingAssistanceProcess';
import StateVisitAllowanceProcess from './StateVisitAllowanceProcess';
import FuneralArrangementProcess from './FuneralArrangementProcess';
import EmployeeWelfareFundProcess from './EmployeeWelfareFundProcess';
import HouseMovingProcess from './HouseMovingProcess';
import PassportPaymentProcess from './PassportPaymentProcess';
import PersonalInsuranceProcess from './PersonalInsuranceProcess';
import CargoShippingProcess from './CargoShippingProcess';
import MovingInProcess from './MovingInProcess';
import MovingOutProcess from './MovingOutProcess';
import ComputerLoanProcess from './ComputerLoanProcess';
import VehicleLoanProcesses from './VehicleLoanProcesses';
import AnnualMedicalAllocation from './AnnualMedicalAllocation';
import MedicalClaimProcess from './MedicalClaimProcess';
import ClinicClaimProcess from './ClinicClaimProcess';
import ClinicApproveProcess from './ClinicApproveProcess';
import LeaveEntitlement from './LeaveEntitlement';
import InternalRelationship from './InternalRelationship';
import { personalDetailPreloads } from 'App/Helpers/preloads';

export default class Employee extends BaseModel {
    public static table = 'employees';
    public static primaryKey = 'id';
    public static incrementing = false;

    public static namingStrategy = new CamelCaseNamingStrategy();

    public static withPreloadedList = scope<typeof Employee>((query) => {
        query
            .preload('personalDetail', personalDetailPreloads)
            .preload('position')
            .preload('grade')
            .preload('serviceType')
            .preload('serviceGroup')
            .preload('unit')
            .preload('placement')
            .preload('employmentStatus')
            .preload('candidate')
            .preload('pastPosition')
            .preload('userAccount')
            .preload('employeeSalary')
            .preload('temporaryPermissions')
            .preload('employeeRoles')
            .preload('unspecifiedRetirements')
            .preload('unspecifiedRetirementsAsConfirmer')
            .preload('forcedRetirements')
            .preload('forcedRetirementProcessesAsCertifier')
            .preload('forcedRetirementProcessesAsConfirmer')
            .preload('voluntaryRetirements')
            .preload('voluntaryRetirementProcessesAsCertifier')
            .preload('voluntaryRetirementProcessAsConfirmer')
            .preload('VoluntaryRetirementProcessAssupporter1')
            .preload('VoluntaryRetirementProcessAssupporter2')
            .preload('VoluntaryRetirementProcessAsappointedApprover')
            .preload('VoluntaryRetirementProcessAssecretaryApprover')
            .preload('VoluntaryRetirementProcessAsDocumentCertifier')
            .preload('VoluntaryRetirementProcessAsLetterCertifier')
            .preload('employmentInterimAsEmployeeId')
            .preload('applicationInterimProcessAssupporter')
            .preload('applicationInterimProcessAsverifier')
            .preload('applicationInterimProcessAsapprover')
            .preload('terminationInterimProcessAsverifier')
            .preload('terminationInterimProcessAssupporter')
            .preload('terminationInterimProcessAsapprover')
            .preload('checklistInterimAspreparer')
            .preload('checklistInterimAschecker')
            .preload('SelfRequestAsemployee')
            .preload('SelfRequestProcessAsdirectorSupporter')
            .preload('SelfRequestProcessAsappointedSupporter')
            .preload('SelfRequestProcessAsappointedApprover')
            .preload('SelfRequestPostponeProcessAsapprover')
            .preload('ForceTransferByDirectorAsemployee')
            .preload('ForceByDirectorProcessAssupporter')
            .preload('ForceByDirectorProcessAsapprover')
            .preload('ForceByDirectorPostponeProcessAsapprover')
            .preload('ForceTransferByManagementAsemployee')
            .preload('ForceByManagementProcessAssupporter')
            .preload('ForceByManagementProcessAsapprover')
            .preload('ForceByManagementPostponeProcessAsapprover')
            .preload('GradeActingTypesAsemployee')
            .preload('GradeActingTypesProcessAsintegrityCertifier')
            .preload('GradeActingTypesProcessAsdirectorCertifier')
            .preload('GradeActingTypesProcessAssupporter')
            .preload('GradeActingTypesProcessAsapprover')
            .preload('MainGradeActingPromotionAsemployee')
            .preload('MainGradeActingPromotionProcessAscertifier')
            .preload('MainGradeActingPromotionProcessAssupporter')
            .preload('MainGradeActingPromotionProcessAsapprover')
            .preload('GradePromotionTypeAsemployee')
            .preload('GradePromotionProcessAsintegrityCertifier')
            .preload('GradePromotionProcessAsdirectorCertifier')
            .preload('GradePromotionProcessAssupporter')
            .preload('GradePromotionProcessAsapprover')
            .preload('PensionDetailsAsemployee')
            .preload('PensionDetailsAsapprover')
            .preload('PensionDetailsAssupporter')
            .preload('ServiceComfirmationAsemployee')
            .preload('ServiceComfirmationProcessAsintegrityCertifier')
            .preload('ServiceComfirmationProcessAsdirectorCertifier')
            .preload('ConfirmationMoreThan3Asemployee')
            .preload('ConfirmationMoreThan3Asverifier')
            .preload('NewOffersAsemployee')
            .preload('NewOffersProcessAssupporter')
            .preload('NewOffersProcessAsapprover')
            .preload('NewHiresAsemployee')
            .preload('NewHiredProcessAssupporter')
            .preload('NewHiredProcessAsapprover')
            .preload('SurchargeAsemployee')
            .preload('AppealApplicationAsemployee')
            .preload('IntegrityProceedingsAsemployee')
            .preload('OtherLeavesAsemployee')
            .preload('ReplacementAnnualLeaveProcessAsdirectorSupporter')
            .preload('ReplacementAnnualLeaveProcessAsappointedSupporter')
            .preload('ReplacementAnnualLeaveProcessAscertifier')
            .preload('ReplacementAnnualLeaveProcessAsapprover')
            .preload('OtherLeaveProcessAssupporter')
            .preload('OtherLeaveProcessAsverifier')
            .preload('OtherLeaveProcessAsconfirmer')
            .preload('OtherLeaveProcessAsapprover')
            .preload('RemoteReligiousLeavesAsemployee')
            .preload('RemoteReligiousLeaveProcessAssupporter')
            .preload('RemoteReligiousLeaveProcessAsverifier')
            .preload('RemoteReligiousLeaveProcessAsapprover')
            .preload('MaternityLeavesAsemployee')
            .preload('MaternityLeaveProcessAsverifier')
            .preload('MaternityLeaveProcessAsapprover')
            .preload('WithoutPayLeavesAsemployee')
            .preload('WithoutPayLeaveProcessAsdirectorSupporter')
            .preload('WithoutPayLeaveProcessAsverifier')
            .preload('WithoutPayLeaveProcessAsconfirmer')
            .preload('WithoutPayLeaveProcessAsappointedSupporter')
            .preload('WithoutPayLeaveProcessAsapprover')
            .preload('HalfPayLeavesAsemployee')
            .preload('HalfPayLeaveProcessAsdirectorSupporter')
            .preload('HalfPayLeaveProcessAsverifier')
            .preload('HalfPayLeaveProcessAsconfirmer')
            .preload('HalfPayLeaveProcessAsapprover')
            .preload('AlternateUntrackedLeavesAsemployee')
            .preload('AlternateUntrackedLeaveProcessAsdirectorSupporter')
            .preload('AlternateUntrackedLeaveProcessAsverifier')
            .preload('AlternateUntrackedLeaveProcessAsconfirmer')
            .preload('AlternateUntrackedLeaveProcessAsappointedSupporter')
            .preload('AlternateUntrackedLeaveProcessAsapprover')
            .preload('ReplacementAnnualLeavesAsemployee')
            .preload('WithdrawalAnnualLeavesAsemployee')
            .preload('WithdrawalAnnualLeaveProcessAssupporter')
            .preload('WithdrawalAnnualLeaveProcessAsverifier')
            .preload('WithdrawalAnnualLeaveProcessAsconfirmer')
            .preload('WithdrawalAnnualLeaveProcessAscertifier')
            .preload('WithdrawalAnnualLeaveProcessAsapprover')
            .preload('AccruedAnnualLeavesAsemployee')
            .preload('AccruedAnnualLeaveProcessAssupporter')
            .preload('AccruedAnnualLeaveProcessAsapprover')
            .preload('AccruedAnnualLeaveProcessAsverifier')
            .preload('AccruedAnnualLeaveProcessAsconfirmer')
            .preload('ExcellenceAwardHistoriesAsemployee')
            .preload('PerformancesAsemployee')
            .preload('PerformancesAsPPKEmployee')
            .preload('PerformancesAsPPPEmployee')
            .preload('ContractAppointmentProcessAssupporter')
            .preload('ContractAppointmentProcessAsapprover')
            .preload('ContractLifeCycleProcessAscertifier')
            .preload('ContractLifeCycleProcessAssupporter')
            .preload('ContractLifeCycleProcessAsapprover')
            .preload('ContractLifeCycleProcessAsconfirmer')
            .preload('EducationFundReimbursementAsemployee')
            .preload('FundReimbursementAsconfimer')
            .preload('FundReimbursementAsverifier')
            .preload('EducationFundApplicationAsemployee')
            .preload('FundApplicationProcessAssupporter')
            .preload('FundApplicationProcessAscertifier')
            .preload('FundApplicationProcessAsconfirmer')
            .preload('FundApplicationProcessAsverifier')
            .preload('ExamApplicationAsemployee')
            .preload('ExamApplicationProcessAsverifier')
            .preload('ExamApplicationProcessAsconfimer')
            .preload('ClothingAssistanceProcessAsdirectorSupporter')
            .preload('ClothingAssistanceProcessAsverifier')
            .preload('ClothingAssistanceProcessAsappointedSupporter')
            .preload('ClothingAssistanceProcessAsapprover')
            .preload('StateVisitAllowanceProcessAsverifier')
            .preload('StateVisitAllowanceProcessAssupporter')
            .preload('StateVisitAllowanceProcessAsapprover')
            .preload('FuneralArrangementProcessAssecretaryVerifier')
            .preload('FuneralArrangementProcessAssupporter')
            .preload('FuneralArrangementProcessAsapprover')
            .preload('FuneralArrangementProcessAsverifier')
            .preload('FuneralArrangementProcessAsconfirmer')
            .preload('EmployeeWelfareFundProcessAsdirectorSupporter')
            .preload('EmployeeWelfareFundProcessAsverifier')
            .preload('EmployeeWelfareFundProcessAsappointedSupporter')
            .preload('EmployeeWelfareFundProcessAsapprover')
            .preload('HouseMovingProcessAsconfirmer')
            .preload('HouseMovingProcessAsverifier')
            .preload('HouseMovingProcessAssupporter')
            .preload('HouseMovingProcessAsapprover')
            .preload('PassportPaymentProcessAsdirectorSupporter')
            .preload('PassportPaymentProcessAsverifier')
            .preload('PassportPaymentProcessAsappointedSupporter')
            .preload('PassportPaymentProcessAsapprover')
            .preload('PersonalInsuranceProcessAsverifier')
            .preload('PersonalInsuranceProcessAssupporter')
            .preload('PersonalInsuranceProcessAsapprover')
            .preload('CargoShippingProcessAsverifier')
            .preload('CargoShippingProcessAssupporter')
            .preload('CargoShippingProcessAsapprover')
            .preload('MovingInProcessAsverifier')
            .preload('MovingInProcessAssecretaryApprover')
            .preload('MovingInProcessAsdirectorApprover')
            .preload('MovingOutProcessAsverifier')
            .preload('MovingOutProcessAsdirectorApprover')
            .preload('ComputerLoanProcessAsverifier')
            .preload('ComputerLoanProcessAssupporter')
            .preload('ComputerLoanProcessAsapprover')
            .preload('VehicleLoanProcessAsverifier')
            .preload('VehicleLoanProcessAssupporter')
            .preload('VehicleLoanProcessAsapprover')
            .preload('AnnualMedicalAllocationAsemployee')
            .preload('MedicalClaimProcessAssecretaryApprover')
            .preload('MedicalClaimProcessAssupporter')
            .preload('MedicalClaimProcessAsappointedApprover')
            .preload('ClinicClaimProcessAssecretaryApprover')
            .preload('ClinicClaimProcessAssupporter')
            .preload('ClinicClaimProcessAsappointedApprover')
            .preload('ClinicApprovalProcessAsconfirmer')
            .preload('ClinicApprovalProcessAssupporter')
            .preload('ClinicApprovalProcessAsapprover')
            .preload('LeaveEntitlementAsEmployee')
            .preload('internalRelationship');
    });
    
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
    
    @beforeFind()
    public static async preloadTables(query) {
        query
            .preload('personalDetail', personalDetailPreloads)
            .preload('position')
            .preload('grade')
            .preload('serviceType')
            .preload('serviceGroup')
            .preload('unit')
            .preload('placement')
            .preload('employmentStatus')
            .preload('employee')
            .preload('pastPosition')
            .preload('userAccount')
            .preload('salary')
            .preload('temporaryPermissions')
            .preload('employeeRoles')
            .preload('unspecifiedRetirements')
            .preload('unspecifiedRetirementsAsConfirmer')
            .preload('forcedRetirements')
            .preload('forcedRetirementProcessesAsCertifier')
            .preload('forcedRetirementProcessesAsConfirmer')
            .preload('voluntaryRetirements')
            .preload('voluntaryRetirementProcessesAsCertifier')
            .preload('voluntaryRetirementProcessAsConfirmer')
            .preload('VoluntaryRetirementProcessAssupporter1')
            .preload('VoluntaryRetirementProcessAssupporter2')
            .preload('VoluntaryRetirementProcessAsappointedApprover')
            .preload('VoluntaryRetirementProcessAssecretaryApprover')
            .preload('VoluntaryRetirementProcessAsDocumentCertifier')
            .preload('VoluntaryRetirementProcessAsLetterCertifier')
            .preload('employmentInterimAsEmployeeId')
            .preload('applicationInterimProcessAssupporter')
            .preload('applicationInterimProcessAsverifier')
            .preload('applicationInterimProcessAsapprover')
            .preload('terminationInterimProcessAsverifier')
            .preload('terminationInterimProcessAssupporter')
            .preload('terminationInterimProcessAsapprover')
            .preload('checklistInterimAspreparer')
            .preload('checklistInterimAschecker')
            .preload('SelfRequestAsemployee')
            .preload('SelfRequestProcessAsdirectorSupporter')
            .preload('SelfRequestProcessAsappointedSupporter')
            .preload('SelfRequestProcessAsappointedApprover')
            .preload('SelfRequestPostponeProcessAsapprover')
            .preload('ForceTransferByDirectorAsemployee')
            .preload('ForceByDirectorProcessAssupporter')
            .preload('ForceByDirectorProcessAsapprover')
            .preload('ForceByDirectorPostponeProcessAsapprover')
            .preload('ForceTransferByManagementAsemployee')
            .preload('ForceByManagementProcessAssupporter')
            .preload('ForceByManagementProcessAsapprover')
            .preload('ForceByManagementPostponeProcessAsapprover')
            .preload('GradeActingTypesAsemployee')
            .preload('GradeActingTypesProcessAsintegrityCertifier')
            .preload('GradeActingTypesProcessAsdirectorCertifier')
            .preload('GradeActingTypesProcessAssupporter')
            .preload('GradeActingTypesProcessAsapprover')
            .preload('MainGradeActingPromotionAsemployee')
            .preload('MainGradeActingPromotionProcessAscertifier')
            .preload('MainGradeActingPromotionProcessAssupporter')
            .preload('MainGradeActingPromotionProcessAsapprover')
            .preload('GradePromotionTypeAsemployee')
            .preload('GradePromotionProcessAsintegrityCertifier')
            .preload('GradePromotionProcessAsdirectorCertifier')
            .preload('GradePromotionProcessAssupporter')
            .preload('GradePromotionProcessAsapprover')
            .preload('PensionDetailsAsemployee')
            .preload('PensionDetailsAsapprover')
            .preload('PensionDetailsAssupporter')
            .preload('ServiceComfirmationAsemployee')
            .preload('ServiceComfirmationProcessAsintegrityCertifier')
            .preload('ServiceComfirmationProcessAsdirectorCertifier')
            .preload('ConfirmationMoreThan3Asemployee')
            .preload('ConfirmationMoreThan3Asverifier')
            .preload('NewOffersAsemployee')
            .preload('NewOffersProcessAssupporter')
            .preload('NewOffersProcessAsapprover')
            .preload('NewHiresAsemployee')
            .preload('NewHiredProcessAssupporter')
            .preload('NewHiredProcessAsapprover')
            .preload('SurchargeAsemployee')
            .preload('AppealApplicationAsemployee')
            .preload('IntegrityProceedingsAsemployee')
            .preload('OtherLeavesAsemployee')
            .preload('ReplacementAnnualLeaveProcessAsdirectorSupporter')
            .preload('ReplacementAnnualLeaveProcessAsappointedSupporter')
            .preload('ReplacementAnnualLeaveProcessAscertifier')
            .preload('ReplacementAnnualLeaveProcessAsapprover')
            .preload('OtherLeaveProcessAssupporter')
            .preload('OtherLeaveProcessAsverifier')
            .preload('OtherLeaveProcessAsconfirmer')
            .preload('OtherLeaveProcessAsapprover')
            .preload('RemoteReligiousLeavesAsemployee')
            .preload('RemoteReligiousLeaveProcessAssupporter')
            .preload('RemoteReligiousLeaveProcessAsverifier')
            .preload('RemoteReligiousLeaveProcessAsapprover')
            .preload('MaternityLeavesAsemployee')
            .preload('MaternityLeaveProcessAsverifier')
            .preload('MaternityLeaveProcessAsapprover')
            .preload('WithoutPayLeavesAsemployee')
            .preload('WithoutPayLeaveProcessAsdirectorSupporter')
            .preload('WithoutPayLeaveProcessAsverifier')
            .preload('WithoutPayLeaveProcessAsconfirmer')
            .preload('WithoutPayLeaveProcessAsappointedSupporter')
            .preload('WithoutPayLeaveProcessAsapprover')
            .preload('HalfPayLeavesAsemployee')
            .preload('HalfPayLeaveProcessAsdirectorSupporter')
            .preload('HalfPayLeaveProcessAsverifier')
            .preload('HalfPayLeaveProcessAsconfirmer')
            .preload('HalfPayLeaveProcessAsapprover')
            .preload('AlternateUntrackedLeavesAsemployee')
            .preload('AlternateUntrackedLeaveProcessAsdirectorSupporter')
            .preload('AlternateUntrackedLeaveProcessAsverifier')
            .preload('AlternateUntrackedLeaveProcessAsconfirmer')
            .preload('AlternateUntrackedLeaveProcessAsappointedSupporter')
            .preload('AlternateUntrackedLeaveProcessAsapprover')
            .preload('ReplacementAnnualLeavesAsemployee')
            .preload('WithdrawalAnnualLeavesAsemployee')
            .preload('WithdrawalAnnualLeaveProcessAssupporter')
            .preload('WithdrawalAnnualLeaveProcessAsverifier')
            .preload('WithdrawalAnnualLeaveProcessAsconfirmer')
            .preload('WithdrawalAnnualLeaveProcessAscertifier')
            .preload('WithdrawalAnnualLeaveProcessAsapprover')
            .preload('AccruedAnnualLeavesAsemployee')
            .preload('AccruedAnnualLeaveProcessAssupporter')
            .preload('AccruedAnnualLeaveProcessAsapprover')
            .preload('AccruedAnnualLeaveProcessAsverifier')
            .preload('AccruedAnnualLeaveProcessAsconfirmer')
            .preload('ExcellenceAwardHistoriesAsemployee')
            .preload('PerformancesAsemployee')
            .preload('PerformancesAsPPKEmployee')
            .preload('PerformancesAsPPPEmployee')
            .preload('ContractAppointmentProcessAssupporter')
            .preload('ContractAppointmentProcessAsapprover')
            .preload('ContractLifeCycleProcessAscertifier')
            .preload('ContractLifeCycleProcessAssupporter')
            .preload('ContractLifeCycleProcessAsapprover')
            .preload('ContractLifeCycleProcessAsconfirmer')
            .preload('EducationFundReimbursementAsemployee')
            .preload('FundReimbursementAsconfimer')
            .preload('FundReimbursementAsverifier')
            .preload('EducationFundApplicationAsemployee')
            .preload('FundApplicationProcessAssupporter')
            .preload('FundApplicationProcessAscertifier')
            .preload('FundApplicationProcessAsconfirmer')
            .preload('FundApplicationProcessAsverifier')
            .preload('ExamApplicationAsemployee')
            .preload('ExamApplicationProcessAsverifier')
            .preload('ExamApplicationProcessAsconfimer')
            .preload('ClothingAssistanceProcessAsdirectorSupporter')
            .preload('ClothingAssistanceProcessAsverifier')
            .preload('ClothingAssistanceProcessAsappointedSupporter')
            .preload('ClothingAssistanceProcessAsapprover')
            .preload('StateVisitAllowanceProcessAsverifier')
            .preload('StateVisitAllowanceProcessAssupporter')
            .preload('StateVisitAllowanceProcessAsapprover')
            .preload('FuneralArrangementProcessAssecretaryVerifier')
            .preload('FuneralArrangementProcessAssupporter')
            .preload('FuneralArrangementProcessAsapprover')
            .preload('FuneralArrangementProcessAsverifier')
            .preload('FuneralArrangementProcessAsconfirmer')
            .preload('EmployeeWelfareFundProcessAsdirectorSupporter')
            .preload('EmployeeWelfareFundProcessAsverifier')
            .preload('EmployeeWelfareFundProcessAsappointedSupporter')
            .preload('EmployeeWelfareFundProcessAsapprover')
            .preload('HouseMovingProcessAsconfirmer')
            .preload('HouseMovingProcessAsverifier')
            .preload('HouseMovingProcessAssupporter')
            .preload('HouseMovingProcessAsapprover')
            .preload('PassportPaymentProcessAsdirectorSupporter')
            .preload('PassportPaymentProcessAsverifier')
            .preload('PassportPaymentProcessAsappointedSupporter')
            .preload('PassportPaymentProcessAsapprover')
            .preload('PersonalInsuranceProcessAsverifier')
            .preload('PersonalInsuranceProcessAssupporter')
            .preload('PersonalInsuranceProcessAsapprover')
            .preload('CargoShippingProcessAsverifier')
            .preload('CargoShippingProcessAssupporter')
            .preload('CargoShippingProcessAsapprover')
            .preload('MovingInProcessAsverifier')
            .preload('MovingInProcessAssecretaryApprover')
            .preload('MovingInProcessAsdirectorApprover')
            .preload('MovingOutProcessAsverifier')
            .preload('MovingOutProcessAsdirectorApprover')
            .preload('ComputerLoanProcessAsverifier')
            .preload('ComputerLoanProcessAssupporter')
            .preload('ComputerLoanProcessAsapprover')
            .preload('VehicleLoanProcessAsverifier')
            .preload('VehicleLoanProcessAssupporter')
            .preload('VehicleLoanProcessAsapprover')
            .preload('AnnualMedicalAllocationAsemployee')
            .preload('MedicalClaimProcessAssecretaryApprover')
            .preload('MedicalClaimProcessAssupporter')
            .preload('MedicalClaimProcessAsappointedApprover')
            .preload('ClinicClaimProcessAssecretaryApprover')
            .preload('ClinicClaimProcessAssupporter')
            .preload('ClinicClaimProcessAsappointedApprover')
            .preload('ClinicApprovalProcessAsconfirmer')
            .preload('ClinicApprovalProcessAssupporter')
            .preload('ClinicApprovalProcessAsapprover')
            .preload('LeaveEntitlementAsEmployee')
            .preload('internalRelationship');
    }
}