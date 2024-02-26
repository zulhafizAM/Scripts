import { DateTime } from 'luxon';

export default class GetEmployeeWelfareFundResponse {
    public employeeWelfareFund: EmployeeWelfareFundResponse =
        new EmployeeWelfareFundResponse();
}
export class EmployeeWelfareFundResponse {
    public allowanceId: bigint;
    public typeOfWelfare: string = '';
    public document: Blob;

    public getFull(data) {
        this.allowanceId = data.allowanceId;
        this.typeOfWelfare = data.typeOfWelfare;
        this.document = data.document;
    }
}