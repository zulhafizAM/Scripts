import { BaseModel, HasOne, hasOne,HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import Salary from 'App/Models/Salary';
import ComputerLoanProcess from 'App/Models/ComputerLoanProcess';
import MovingInProcess from 'App/Models/MovingInProcess';
import MovingOutProcess from 'App/Models/MovingOutProcess';
import VehicleLoanProcesses from 'App/Models/VehicleLoanProcesses';
import CargoShippingProcess from 'App/Models/CargoShippingProcess';
import ClothingAssistanceProcess from 'App/Models/ClothingAssistanceProcess';
import EmployeeWelfareFundProcess from 'App/Models/EmployeeWelfareFundProcess';
import FuneralArrangementProcess from 'App/Models/FuneralArrangementProcess';
import HouseMovingProcess from 'App/Models/HouseMovingProcess';
import PassportPaymentProcess from 'App/Models/PassportPaymentProcess';
import PersonalInsuranceProcess from 'App/Models/PersonalInsuranceProcess';
import StateVisitAllowanceProcess from 'App/Models/StateVisitAllowanceProcess';
export default class employeeToSalaryRelationship extends BaseModel {

    @hasOne(() => Salary, { foreignKey: 'employeeId'})
    public SalaryAsemployee: HasOne<typeof Salary>;

    //Allowances
    @hasMany(() => ClothingAssistanceProcess, { foreignKey: 'directorSupporterId'})
    public ClothingAssistanceProcessAsdirectorSupporter: HasMany<typeof ClothingAssistanceProcess>;

    @hasMany(() => ClothingAssistanceProcess, { foreignKey: 'verifierId'})
    public ClothingAssistanceProcessAsverifier: HasMany<typeof ClothingAssistanceProcess>;

    @hasMany(() => ClothingAssistanceProcess, { foreignKey: 'appointedSupporterId'})
    public ClothingAssistanceProcessAsappointedSupporter: HasMany<typeof ClothingAssistanceProcess>;

    @hasMany(() => ClothingAssistanceProcess, { foreignKey: 'approverId'})
    public ClothingAssistanceProcessAsapprover: HasMany<typeof ClothingAssistanceProcess>;

    @hasMany(() => StateVisitAllowanceProcess, { foreignKey: 'verifierId'})
    public StateVisitAllowanceProcessAsverifier: HasMany<typeof StateVisitAllowanceProcess>;

    @hasMany(() => StateVisitAllowanceProcess, { foreignKey: 'supporterId'})
    public StateVisitAllowanceProcessAssupporter: HasMany<typeof StateVisitAllowanceProcess>;

    @hasMany(() => StateVisitAllowanceProcess, { foreignKey: 'approverId'})
    public StateVisitAllowanceProcessAsapprover: HasMany<typeof StateVisitAllowanceProcess>;

    @hasMany(() => FuneralArrangementProcess, { foreignKey: 'secretaryVerifierId'})
    public FuneralArrangementProcessAssecretaryVerifier: HasMany<typeof FuneralArrangementProcess>;

    @hasMany(() => FuneralArrangementProcess, { foreignKey: 'supporterId'})
    public FuneralArrangementProcessAssupporter: HasMany<typeof FuneralArrangementProcess>;

    @hasMany(() => FuneralArrangementProcess, { foreignKey: 'approverId'})
    public FuneralArrangementProcessAsapprover: HasMany<typeof FuneralArrangementProcess>;

    @hasMany(() => FuneralArrangementProcess, { foreignKey: 'verifierId'})
    public FuneralArrangementProcessAsverifier: HasMany<typeof FuneralArrangementProcess>;

    @hasMany(() => FuneralArrangementProcess, { foreignKey: 'confirmerId'})
    public FuneralArrangementProcessAsconfirmer: HasMany<typeof FuneralArrangementProcess>;

    @hasMany(() => EmployeeWelfareFundProcess, { foreignKey: 'directorSupporterId'})
    public EmployeeWelfareFundProcessAsdirectorSupporter: HasMany<typeof EmployeeWelfareFundProcess>;

    @hasMany(() => EmployeeWelfareFundProcess, { foreignKey: 'verifierId'})
    public EmployeeWelfareFundProcessAsverifier: HasMany<typeof EmployeeWelfareFundProcess>;

    @hasMany(() => EmployeeWelfareFundProcess, { foreignKey: 'appointedSupporterId'})
    public EmployeeWelfareFundProcessAsappointedSupporter: HasMany<typeof EmployeeWelfareFundProcess>;

    @hasMany(() => EmployeeWelfareFundProcess, { foreignKey: 'approverId'})
    public EmployeeWelfareFundProcessAsapprover: HasMany<typeof EmployeeWelfareFundProcess>;

    @hasMany(() => HouseMovingProcess, { foreignKey: 'confirmerId'})
    public HouseMovingProcessAsconfirmer: HasMany<typeof HouseMovingProcess>;

    @hasMany(() => HouseMovingProcess, { foreignKey: 'verifierId'})
    public HouseMovingProcessAsverifier: HasMany<typeof HouseMovingProcess>;

    @hasMany(() => HouseMovingProcess, { foreignKey: 'supporterId'})
    public HouseMovingProcessAssupporter: HasMany<typeof HouseMovingProcess>;

    @hasMany(() => HouseMovingProcess, { foreignKey: 'approverId'})
    public HouseMovingProcessAsapprover: HasMany<typeof HouseMovingProcess>;

    @hasMany(() => PassportPaymentProcess, { foreignKey: 'directorSupporterId'})
    public PassportPaymentProcessAsdirectorSupporter: HasMany<typeof PassportPaymentProcess>;

    @hasMany(() => PassportPaymentProcess, { foreignKey: 'verifierId'})
    public PassportPaymentProcessAsverifier: HasMany<typeof PassportPaymentProcess>;

    @hasMany(() => PassportPaymentProcess, { foreignKey: 'appointedSupporterId'})
    public PassportPaymentProcessAsappointedSupporter: HasMany<typeof PassportPaymentProcess>;

    @hasMany(() => PassportPaymentProcess, { foreignKey: 'approverId'})
    public PassportPaymentProcessAsapprover: HasMany<typeof PassportPaymentProcess>;

    @hasMany(() => PersonalInsuranceProcess, { foreignKey: 'verifierId'})
    public PersonalInsuranceProcessAsverifier: HasMany<typeof PersonalInsuranceProcess>;

    @hasMany(() => PersonalInsuranceProcess, { foreignKey: 'supporterId'})
    public PersonalInsuranceProcessAssupporter: HasMany<typeof PersonalInsuranceProcess>;

    @hasMany(() => PersonalInsuranceProcess, { foreignKey: 'approverId'})
    public PersonalInsuranceProcessAsapprover: HasMany<typeof PersonalInsuranceProcess>;

    @hasMany(() => CargoShippingProcess, { foreignKey: 'verifierId'})
    public CargoShippingProcessAsverifier: HasMany<typeof CargoShippingProcess>;

    @hasMany(() => CargoShippingProcess, { foreignKey: 'supporterId'})
    public CargoShippingProcessAssupporter: HasMany<typeof CargoShippingProcess>;

    @hasMany(() => CargoShippingProcess, { foreignKey: 'approverId'})
    public CargoShippingProcessAsapprover: HasMany<typeof CargoShippingProcess>;

    //Loan Module
    @hasMany(() => MovingInProcess, { foreignKey: 'verifierId' })
    public MovingInProcessAsverifier: HasMany<typeof MovingInProcess>;

    @hasMany(() => MovingInProcess, { foreignKey: 'secretaryApproverId' })
    public MovingInProcessAssecretaryApprover: HasMany<typeof MovingInProcess>;

    @hasMany(() => MovingInProcess, { foreignKey: 'directorApproverId' })
    public MovingInProcessAsdirectorApprover: HasMany<typeof MovingInProcess>;

    @hasMany(() => MovingOutProcess, { foreignKey: 'verifierId' })
    public MovingOutProcessAsverifier: HasMany< typeof MovingOutProcess>;

    @hasMany(() => MovingOutProcess, { foreignKey: 'directorApproverId' })
    public MovingOutProcessAsdirectorApprover: HasMany<typeof MovingOutProcess>;

    @hasMany(() => ComputerLoanProcess, { foreignKey: 'verifierId' })
    public ComputerLoanProcessAsverifier: HasMany<typeof ComputerLoanProcess>;

    @hasMany(() => ComputerLoanProcess, { foreignKey: 'supporterId' })
    public ComputerLoanProcessAssupporter: HasMany< typeof ComputerLoanProcess>;

    @hasMany(() => ComputerLoanProcess, { foreignKey: 'approverId' })
    public ComputerLoanProcessAsapprover: HasMany<typeof ComputerLoanProcess>;

    @hasMany(() => VehicleLoanProcesses, { foreignKey: 'verifierId' })
    public VehicleLoanProcessAsverifier: HasMany<typeof VehicleLoanProcesses>;

    @hasMany(() => VehicleLoanProcesses, { foreignKey: 'supporterId' })
    public VehicleLoanProcessAssupporter: HasMany<typeof VehicleLoanProcesses>;

    @hasMany(() => VehicleLoanProcesses, { foreignKey: 'approverId' })
    public VehicleLoanProcessAsapprover: HasMany<typeof VehicleLoanProcesses>;
}