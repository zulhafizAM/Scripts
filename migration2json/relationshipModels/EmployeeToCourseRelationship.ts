import { BaseModel, HasMany,  hasMany  } from '@ioc:Adonis/Lucid/Orm';
import EducationFundApplication from 'App/Models/EducationFundApplication';
import EducationFundReimbursement from 'App/Models/EducationFundReimbursement';
import ExamApplication from 'App/Models/ExamApplication';
import ExamApplicationProcess from 'App/Models/ExamApplicationProcess';
import FundApplicationProcess from 'App/Models/FundApplicationProcess';
import FundReimbursementProcess from 'App/Models/FundReimbursementProcess';

export default class employeeToCourseRelationship extends BaseModel{
    @hasMany(() => EducationFundReimbursement, { foreignKey: 'employeeId'})
    public EducationFundReimbursementAsemployee: HasMany<typeof EducationFundReimbursement>;

    @hasMany(() => FundReimbursementProcess, { foreignKey: 'confimerId'})
    public FundReimbursementAsconfimer: HasMany<typeof FundReimbursementProcess>;

    @hasMany(() => FundReimbursementProcess, { foreignKey: 'verifierId'})
    public FundReimbursementAsverifier: HasMany<typeof FundReimbursementProcess>;

    @hasMany(() => EducationFundApplication, { foreignKey: 'employeeId'})
    public EducationFundApplicationAsemployee: HasMany<typeof EducationFundApplication>;

    @hasMany(() => FundApplicationProcess, { foreignKey: 'supporterId'})
    public FundApplicationProcessAssupporter: HasMany<typeof FundApplicationProcess>;

    @hasMany(() => FundApplicationProcess, { foreignKey: 'certifierId'})
    public FundApplicationProcessAscertifier: HasMany<typeof FundApplicationProcess>;

    @hasMany(() => FundApplicationProcess, { foreignKey: 'confirmerId'})
    public FundApplicationProcessAsconfirmer: HasMany<typeof FundApplicationProcess>;

    @hasMany(() => FundApplicationProcess, { foreignKey: 'verifierId'})
    public FundApplicationProcessAsverifier: HasMany<typeof FundApplicationProcess>;

    @hasMany(() => ExamApplication, { foreignKey: 'employeeId'})
    public ExamApplicationAsemployee: HasMany<typeof ExamApplication>;

    @hasMany(() => ExamApplicationProcess, { foreignKey: 'verifierId'})
    public ExamApplicationProcessAsverifier: HasMany<typeof ExamApplicationProcess>;

    @hasMany(() => ExamApplicationProcess, { foreignKey: 'confimerId'})
    public ExamApplicationProcessAsconfimer: HasMany<typeof ExamApplicationProcess>;
    }