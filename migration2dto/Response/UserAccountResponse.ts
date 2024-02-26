import { DateTime } from 'luxon';

export default class GetUserAccountResponse {
    public userAccount: UserAccountResponse =
        new UserAccountResponse();
}
export class UserAccountResponse {
    public clinicId: bigint;
    public employeeId: bigint;
    public candidateId: bigint;
    public username: string = '';
    public password: string = '';
    public registeredDate: DateTime;

    public getFull(data) {
        this.clinicId = data.clinicId;
        this.employeeId = data.employeeId;
        this.candidateId = data.candidateId;
        this.username = data.username;
        this.password = data.password;
        this.registeredDate = data.registeredDate;
    }
}