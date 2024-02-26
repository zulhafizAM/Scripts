export default class UnspecifiedEmployeesResponse {
    public currentPageSize: number = 0;
    public pageNum: number = 0;
    public totalPage: number = 0;
    public totalData: number = 0;
    private unspecifiedEmployeeList: UnspecifiedEmployeeResponse[] = [];
    public get unspecifiedEmployees(): UnspecifiedEmployeeResponse[] {
        return this.unspecifiedEmployeeList;
    }

    public set unspecifiedEmployees(v: UnspecifiedEmployeeResponse[]) {
        this.unspecifiedEmployeeList = v;
        this.currentPageSize = this.unspecifiedEmployeeList.length;
    }
}

export class UnspecifiedEmployeeResponse {
    public id: bigint;
    public employeeNumber: string = '';
    public name: string = '';
    public identityCardNumber: string = '';
    public programme: string = '';
    public scheme: string = '';
    public grade: string = '';
    public position: string = '';
    public placement: string = '';
    public propertyDeclaration: boolean;
    public educationLoan: boolean;
}
