import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import ApplicationInterimProcess from 'App/Models/ApplicationInterimProcess';
import ChecklistInterim from 'App/Models/ChecklistInterim';
import ConfirmationMoreThan3 from 'App/Models/ConfirmationMoreThan3';
import EmploymentInterim from 'App/Models/EmploymentInterim';
import ForceTransferByDirector from 'App/Models/ForceTransferByDirector';
import ForceTransferByManagement from 'App/Models/ForceTransferByManagement';
import ForcedByDirectorPostponeProcess from 'App/Models/ForcedByDirectorPostponeProcess';
import ForcedByDirectorProcess from 'App/Models/ForcedByDirectorProcess';
import ForcedByManagementPostponeProcesses from 'App/Models/ForcedByManagementPostponeProcesses';
import ForcedByManagementProcess from 'App/Models/ForcedByManagementProcess';
import ForcedRetirement from 'App/Models/ForcedRetirement';
import ForcedRetirementProcess from 'App/Models/ForcedRetirementProcess';
import GradeActingType from 'App/Models/GradeActingType';
import GradeActingTypesProcess from 'App/Models/GradeActingTypesProcess';
import GradePromotionProcess from 'App/Models/GradePromotionProcess';
import GradePromotionType from 'App/Models/GradePromotionType';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';
import MainGradeActingPromotionProcess from 'App/Models/MainGradeActingPromotionProcess';
import NewHire from 'App/Models/NewHire';
import NewHiredProcess from 'App/Models/NewHiredProcess';
import NewOffer from 'App/Models/NewOffer';
import NewOfferProcess from 'App/Models/NewOfferProcess';
import PensionDetail from 'App/Models/PensionDetail';
import SelfRequest from 'App/Models/SelfRequest';
import SelfRequestPostponeProcess from 'App/Models/SelfRequestPostponeProcess';
import SelfRequestProcess from 'App/Models/SelfRequestProcess';
import ServiceConfirmation from 'App/Models/ServiceConfirmation';
import ServiceConfirmationProcess from 'App/Models/ServiceConfirmationProcess';
import TerminationInterimProcess from 'App/Models/TerminationInterimProcess';
import UnspecifiedRetirement from 'App/Models/UnspecifiedRetirement';
import VoluntaryRetirement from 'App/Models/VoluntaryRetirement';
import VoluntaryRetirementProcess from 'App/Models/VoluntaryRetirementProcess';

export default class employeeToEmploymentRelationship extends BaseModel {

   
    @hasMany(()=> UnspecifiedRetirement, {foreignKey: 'employeeId'})
    public UnSpecifiedRetirementAsEmployee: HasMany<typeof UnspecifiedRetirement> 

    @hasMany(()=> UnspecifiedRetirement, {foreignKey: 'confimerId'})
    public UnSpecifiedRetirementsAsConfimer: HasMany<typeof UnspecifiedRetirement> 
    
    //Force Retirement
    @hasMany(()=> ForcedRetirement, {foreignKey:'employeeId'})
    public forcedRetirements: HasMany<typeof ForcedRetirement>
    
    //Force RetirementProcess
    @hasMany(() => ForcedRetirementProcess, {foreignKey:'cerfitierId'})
    public forcedRetirementProcessAsCertifier: HasMany<typeof ForcedRetirementProcess>

    @hasMany(() => ForcedRetirementProcess, {foreignKey:'confirmerId'})
    public forcedRetirementProcessAsConfirmer: HasMany<typeof ForcedRetirementProcess>

    //Voluntary Retirement
    @hasMany(()=> VoluntaryRetirement,{foreignKey: 'employeeId'})
    public voluntaryRetirements: HasMany<typeof VoluntaryRetirement>

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'certifierId'})
    public VoluntaryRetirementProcessAscertifier: HasMany<typeof VoluntaryRetirementProcess>;

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'confirmerId'})
    public VoluntaryRetirementProcessAsconfirmer: HasMany<typeof VoluntaryRetirementProcess>;

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'supporter1Id'})
    public VoluntaryRetirementProcessAssupporter1: HasMany<typeof VoluntaryRetirementProcess>;

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'supporter2Id'})
    public VoluntaryRetirementProcessAssupporter2: HasMany<typeof VoluntaryRetirementProcess>;

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'appointedApproverId'})
    public VoluntaryRetirementProcessAsappointedApprover: HasMany<typeof VoluntaryRetirementProcess>;

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'secretaryApproverId'})
    public VoluntaryRetirementProcessAssecretaryApprover: HasMany<typeof VoluntaryRetirementProcess>;

    @hasMany(() => VoluntaryRetirementProcess, { foreignKey: 'secretaryCertifierId'})
    public VoluntaryRetirementProcessAssecretaryCertifier: HasMany<typeof VoluntaryRetirementProcess>;


    //Interim
    @hasMany(() => EmploymentInterim, {foreignKey:'employeeId'})
    public employmentInterimAsEmployeeId: HasMany<typeof EmploymentInterim>

    @hasMany(() => ApplicationInterimProcess, { foreignKey: 'supporterId'})
    public applicationInterimProcessAssupporter: HasMany<typeof ApplicationInterimProcess>;

    @hasMany(() => ApplicationInterimProcess, { foreignKey: 'verifierId'})
    public applicationInterimProcessAsverifier: HasMany<typeof ApplicationInterimProcess>;

    @hasMany(() => ApplicationInterimProcess, { foreignKey: 'approverId'})
    public applicationInterimProcessAsapprover: HasMany<typeof ApplicationInterimProcess>;

    @hasMany(() => TerminationInterimProcess, { foreignKey: 'verifierId'})
    public terminationInterimProcessAsverifier: HasMany<typeof TerminationInterimProcess>;

    @hasMany(() => TerminationInterimProcess, { foreignKey: 'supporterId'})
    public terminationInterimProcessAssupporter: HasMany<typeof TerminationInterimProcess>;

    @hasMany(() => TerminationInterimProcess, { foreignKey: 'approverId'})
    public terminationInterimProcessAsapprover: HasMany<typeof TerminationInterimProcess>;

    @hasMany(() => ChecklistInterim, { foreignKey: 'preparerId'})
    public checklistInterimAspreparer: HasMany<typeof ChecklistInterim>;

    @hasMany(() => ChecklistInterim, { foreignKey: 'checkerId'})
    public checklistInterimAschecker: HasMany<typeof ChecklistInterim>;

    //Transfer
    //Self Request
    @hasMany(() => SelfRequest, { foreignKey: 'employeeId'})
    public SelfRequestAsemployee: HasMany<typeof SelfRequest>;

    @hasMany(() => SelfRequestProcess, { foreignKey: 'directorSupporterId'})
    public SelfRequestProcessAsdirectorSupporter: HasMany<typeof SelfRequestProcess>;

    @hasMany(() => SelfRequestProcess, { foreignKey: 'appointedSupporterId'})
    public SelfRequestProcessAsappointedSupporter: HasMany<typeof SelfRequestProcess>;

    @hasMany(() => SelfRequestProcess, { foreignKey: 'appointedApproverId'})
    public SelfRequestProcessAsappointedApprover: HasMany<typeof SelfRequestProcess>;

    @hasMany(() => SelfRequestPostponeProcess, { foreignKey: 'approverId'})
    public SelfRequestPostponeProcessAsapprover: HasMany<typeof SelfRequestPostponeProcess>;
    
    //Force by Director
    @hasMany(() => ForceTransferByDirector, { foreignKey: 'employeeId'})
    public ForceTransferByDirectorAsemployee: HasMany<typeof ForceTransferByDirector>;

    @hasMany(() => ForcedByDirectorProcess, { foreignKey: 'supporterId'})
    public ForceByDirectorProcessAssupporter: HasMany<typeof ForcedByDirectorProcess>;

    @hasMany(() => ForcedByDirectorProcess, { foreignKey: 'approverId'})
    public ForceByDirectorProcessAsapprover: HasMany<typeof ForcedByDirectorProcess>;

    @hasMany(() => ForcedByDirectorPostponeProcess, { foreignKey: 'approverId'})
    public ForceByDirectorPostponeProcessAsapprover: HasMany<typeof ForcedByDirectorPostponeProcess>;

    //force by Management
    @hasMany(() => ForceTransferByManagement, { foreignKey: 'employeeId'})
    public ForceTransferByManagementAsemployee: HasMany<typeof ForceTransferByManagement>;

    @hasMany(() => ForcedByManagementProcess, { foreignKey: 'supporterId'})
    public ForceByManagementProcessAssupporter: HasMany<typeof ForcedByManagementProcess>;

    @hasMany(() => ForcedByManagementProcess, { foreignKey: 'approverId'})
    public ForceByManagementProcessAsapprover: HasMany<typeof ForcedByManagementProcess>;

    @hasMany(() => ForcedByManagementPostponeProcesses, { foreignKey: 'approverId'})
    public ForceByManagementPostponeProcessAsapprover: HasMany<typeof ForcedByManagementPostponeProcesses>;


    //Acting
    @hasMany(() => GradeActingType, { foreignKey: 'employeeId'})
    public GradeActingTypesAsemployee: HasMany<typeof GradeActingType>;

    @hasMany(() => GradeActingTypesProcess, { foreignKey: 'integrityCertifierId'})
    public GradeActingTypesProcessAsintegrityCertifier: HasMany<typeof GradeActingTypesProcess>;

    @hasMany(() => GradeActingTypesProcess, { foreignKey: 'directorCertifierId'})
    public GradeActingTypesProcessAsdirectorCertifier: HasMany<typeof GradeActingTypesProcess>;

    @hasMany(() => GradeActingTypesProcess, { foreignKey: 'supporterId'})
    public GradeActingTypesProcessAssupporter: HasMany<typeof GradeActingTypesProcess>;

    @hasMany(() => GradeActingTypesProcess, { foreignKey: 'approverId'})
    public GradeActingTypesProcessAsapprover: HasMany<typeof GradeActingTypesProcess>;

    @hasMany(() => MainGradeActingPromotion, { foreignKey: 'employeeId'})
    public MainGradeActingPromotionAsemployee: HasMany<typeof MainGradeActingPromotion>;

    @hasMany(() => MainGradeActingPromotionProcess, { foreignKey: 'certifierId'})
    public MainGradeActingPromotionProcessAscertifier: HasMany<typeof MainGradeActingPromotionProcess>;

    @hasMany(() => MainGradeActingPromotionProcess, { foreignKey: 'supporterId'})
    public MainGradeActingPromotionProcessAssupporter: HasMany<typeof MainGradeActingPromotionProcess>;

    @hasMany(() => MainGradeActingPromotionProcess, { foreignKey: 'approverId'})
    public MainGradeActingPromotionProcessAsapprover: HasMany<typeof MainGradeActingPromotionProcess>;

    //Grade Promotion Part
    @hasMany(() => GradePromotionType, { foreignKey: 'employeeId'})
    public GradePromotionTypeAsemployee: HasMany<typeof GradePromotionType>;

    @hasMany(() => GradePromotionProcess, { foreignKey: 'integrityCertifierId'})
    public GradePromotionProcessAsintegrityCertifier: HasMany<typeof GradePromotionProcess>;

    @hasMany(() => GradePromotionProcess, { foreignKey: 'directorCertifierId'})
    public GradePromotionProcessAsdirectorCertifier: HasMany<typeof GradePromotionProcess>;

    @hasMany(() => GradePromotionProcess, { foreignKey: 'supporterId'})
    public GradePromotionProcessAssupporter: HasMany<typeof GradePromotionProcess>;

    @hasMany(() => GradePromotionProcess, { foreignKey: 'approverId'})
    public GradePromotionProcessAsapprover: HasMany<typeof GradePromotionProcess>;
    
    //Pensions
    @hasMany(() => PensionDetail, { foreignKey: 'employeeId'})
    public PensionDetailsAsemployee: HasMany<typeof PensionDetail>;

    @hasMany(() => PensionDetail, { foreignKey: 'approverId'})
    public PensionDetailsAsapprover: HasMany<typeof PensionDetail>;

    @hasMany(() => PensionDetail, { foreignKey: 'supporterId'})
    public PensionDetailsAssupporter: HasMany<typeof PensionDetail>;

    //Service Confirmation 
    @hasMany(() => ServiceConfirmation, { foreignKey: 'employeeId'})
    public ServiceComfirmationAsemployee: HasMany<typeof ServiceConfirmation>;

    @hasMany(() => ServiceConfirmationProcess, { foreignKey: 'integrityCertifierId'})
    public ServiceComfirmationProcessAsintegrityCertifier: HasMany<typeof ServiceConfirmationProcess>;

    @hasMany(() => ServiceConfirmationProcess, { foreignKey: 'directorCertifierId'})
    public ServiceComfirmationProcessAsdirectorCertifier: HasMany<typeof ServiceConfirmationProcess>;

    @hasMany(() => ConfirmationMoreThan3, { foreignKey: 'employeeId'})
    public ConfirmationMoreThan3Asemployee: HasMany<typeof ConfirmationMoreThan3>;

    @hasMany(() => ConfirmationMoreThan3, { foreignKey: 'verifierId'})
    public ConfirmationMoreThan3Asverifier: HasMany<typeof ConfirmationMoreThan3>;

    //New Offers
    @hasMany(() => NewOffer, { foreignKey: 'employeeId'})
    public NewOffersAsemployee: HasMany<typeof NewOffer>;

    @hasMany(() => NewOfferProcess, { foreignKey: 'supporterId'})
    public NewOffersProcessAssupporter: HasMany<typeof NewOfferProcess>;

    @hasMany(() => NewOfferProcess, { foreignKey: 'approverId'})
    public NewOffersProcessAsapprover: HasMany<typeof NewOfferProcess>;

    //New Hires
    @hasMany(() => NewHire, { foreignKey: 'employeeId'})
    public NewHiresAsemployee: HasMany<typeof NewHire>;

    @hasMany(() => NewHiredProcess, { foreignKey: 'supporterId'})
    public NewHiredProcessAssupporter: HasMany<typeof NewHiredProcess>;

    @hasMany(() => NewHiredProcess, { foreignKey: 'approverId'})
    public NewHiredProcessAsapprover: HasMany<typeof NewHiredProcess>;

    }