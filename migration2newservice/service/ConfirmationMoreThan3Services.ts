import BaseService from 'App/Services/BaseService';
import ConfirmationMoreThan3 from 'App/Models/ConfirmationMoreThan3';

export default class ConfirmationMoreThan3Services extends BaseService {
    public async getConfirmationMoreThan3s(
        payload,
    ): Promise<ConfirmationMoreThan3sResponse> {
        const confirmationMoreThan3List = await ConfirmationMoreThan3.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const confirmationMoreThan3 = {
            pageNum: payload.pageNum,
            totalData: confirmationMoreThan3List.length,
            totalPage: Math.ceil(
                confirmationMoreThan3List.length / payload.pageSize,
            ),
            confirmationMoreThan3s: confirmationMoreThan3List.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ConfirmationMoreThan3sResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, confirmationMoreThan3);
        // }

        confirmationMoreThan3.confirmationMoreThan3s =
            confirmationMoreThan3.confirmationMoreThan3s.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(confirmationMoreThan3List);
        return confirmationMoreThan3;
    }
    public async getConfirmationMoreThan3(
        personalDetailId,
    ): Promise<ConfirmationMoreThan3DetailResponse | Error> {
        let confirmationMoreThan3: ConfirmationMoreThan3DetailResponse =
            new ConfirmationMoreThan3DetailResponse();

        const personalDetail = await PersonalDetail.query()
            .preload('employee', (employee) => {
                employee.preload('employeeSalary', (salary) => {
                    salary.preload('allowance');
                });
            })
            .preload('race')
            .preload('religion')
            .where('id', personalDetailId)
            .firstOrFail();
        confirmationMoreThan3.employee.populate(personalDetail);
        return confirmationMoreThan3;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ConfirmationMoreThan3DetailResponse {
    public employee: ConfirmationMoreThan3EmployeeResponse =
        new ConfirmationMoreThan3EmployeeResponse();
    public service: ConfirmationMoreThan3ServiceResponse =
        new ConfirmationMoreThan3ServiceResponse();
}
export class ConfirmationMoreThan3EmployeeResponse {
    public employeeNo: string = '';
    public name: string = '';
    public otherName: string = '';
    public identityCard: string = '';
    public identityCardColor: string = '';
    public dateOfBirth: string = '';
    public placeOfBirth: string = '';
    public nationality: string = '';
    public race: string = '';
    public religion: string = '';
    public gender: string = '';
    public status: string = '';
    public homeAddress: string = '';
    public mailAddress: string = '';
    public homeNo: string = '';
    public mobileNo: string = '';
    public housing: string = '';
    public houseLoan: string = '';
    public carLoan: string = '';
    public isExPolice: boolean = false;

    public populate(data) {
        this.employeeNo =
            data.employee === null ? '-' : data.employee.employeeNumber;
        this.name = data.name;
        this.otherName = data.alternativeName;
        this.identityCard = data.identityDocumentNumber;
        this.identityCardColor = data.identityDocumentType;
        this.dateOfBirth = data.birthDate;
        this.placeOfBirth = data.birthPlace;
        this.nationality = data.isMalaysian ? 'Malaysia' : 'Other Country';
        this.race = data.race.name;
        this.religion = data.religion.name;
        this.gender = data.gender;
        this.status = data.maritial;
        this.homeAddress = data.homeAddress;
        this.mailAddress = data.mailAddress;
        this.homeNo = data.homeNumber;
        this.mobileNo = data.mobileNo;
        this.housing =
            data.employee === null
                ? ''
                : data.employee.employeeSalary.allowance.houseAllowanceType;
        this.houseLoan =
            data.employee === null
                ? ''
                : data.employee.employeeSalary.allowance.houseAllowance;
        this.isExPolice = data.isExPoliceOrSoldier;
    }
}
export class ConfirmationMoreThan3ServiceResponse {
    public grade: string = '';
    public position: string = '';
    public placement: string = '';
    public serviceLevel: string = '';
    public hireDate: DateTime;
    public retirementType: string = '';
    public kwspNo: string = '';
    public maybankAccount: string = '';
    public program: string = '';
    public leaveEntitlement: string = '';
    public hireByGovermentDate: DateTime;
    public hireByLKIMDate: DateTime;
    public hireCurrentPositionDate: DateTime;
    public confirmedLKIM: string = '';
    public currentActing: string = '';
    public currentInterim: string | null = null;
    public enterPension: string = '';
    public lastSalary: string = '';
    public lastPromotion: string = '';
    public retirementDate: DateTime | null = null;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { DateTime } from 'luxon';
import { BaseResponse } from './BaseResponse';

export default class ConfirmationMoreThan3sResponse extends BaseResponse<ConfirmationMoreThan3Response> {
    private confirmationMoreThan3List: ConfirmationMoreThan3Response[] = [];
    public get confirmationMoreThan3s(): ConfirmationMoreThan3Response[] {
        return this.confirmationMoreThan3List;
    }
    public set confirmationMoreThan3s(v: ConfirmationMoreThan3Response[]) {
        this.confirmationMoreThan3List = v;
        this.currentPageSize = this.confirmationMoreThan3List.length;
    }
}
export class ConfirmationMoreThan3Response {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
