import { BaseModel,hasOne, HasOne,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Loan from 'App/Models/Loan';
import VehicleLoanProcesses from 'App/Models/VehicleLoanProcesses';

export default class VehicleLoanRelationship extends BaseModel {
    @hasOne(() => VehicleLoanProcesses, { foreignKey: 'vehicleLoanId' })
    public VehicleLoanProcessAsvehicleLoan: HasOne<typeof VehicleLoanProcesses>;

    @belongsTo(() => Loan, { foreignKey: 'loanId' })
    public LoansAsloan: BelongsTo<typeof Loan>;
}
