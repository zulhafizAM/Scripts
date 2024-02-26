import { DateTime } from 'luxon';

export default class GetSalaryMovementResponse {
    public salaryMovement: SalaryMovementResponse =
        new SalaryMovementResponse();
}
export class SalaryMovementResponse {
    public salaryDetailId: bigint;
    public meetingId: bigint;
    public salaryMovement: number;
    public stateAllowance: number;
    public criticalAllowance: number;
    public annualSalaryIncrement: number;
    public specialAid: number;
    public specialRaiseType: string = '';
    public specialRaise: number;
    public status: string = '';
    public remark: string = '';

    public getFull(data) {
        this.salaryDetailId = data.salaryDetailId;
        this.meetingId = data.meetingId;
        this.salaryMovement = data.salaryMovement;
        this.stateAllowance = data.stateAllowance;
        this.criticalAllowance = data.criticalAllowance;
        this.annualSalaryIncrement = data.annualSalaryIncrement;
        this.specialAid = data.specialAid;
        this.specialRaiseType = data.specialRaiseType;
        this.specialRaise = data.specialRaise;
        this.status = data.status;
        this.remark = data.remark;
    }
}