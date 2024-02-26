import BaseService from 'App/Services/BaseService';
import EmploymentStatus from 'App/Models/EmploymentStatus';

export default class EmploymentStatusServices extends BaseService {
    public async getEmploymentStatus(
        payload,
    ): Promise<EmploymentStatusResponse> {
        const employmentStatusList = await EmploymentStatus.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const employmentStatus = {
            pageNum: payload.pageNum,
            totalData: employmentStatusList.length,
            totalPage: Math.ceil(
                employmentStatusList.length / payload.pageSize,
            ),
            employmentStatuss: employmentStatusList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as EmploymentStatusResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, employmentStatus);
        // }

        employmentStatus.employmentStatuss =
            employmentStatus.employmentStatuss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(employmentStatusList);
        return employmentStatus;
    }
    public async getEmploymentStatus(
        personalDetailId,
    ): Promise<EmploymentStatusDetailResponse | Error> {
        let employmentStatus: EmploymentStatusDetailResponse =
            new EmploymentStatusDetailResponse();

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
        employmentStatus.employee.populate(personalDetail);
        return employmentStatus;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class EmploymentStatusDetailResponse {
    public employee: EmploymentStatusEmployeeResponse =
        new EmploymentStatusEmployeeResponse();
    public service: EmploymentStatusServiceResponse =
        new EmploymentStatusServiceResponse();
}
export class EmploymentStatusEmployeeResponse {
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
export class EmploymentStatusServiceResponse {
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

export default class EmploymentStatusResponse extends BaseResponse<EmploymentStatusResponse> {
    private employmentStatusList: EmploymentStatusResponse[] = [];
    public get employmentStatus(): EmploymentStatusResponse[] {
        return this.employmentStatusList;
    }
    public set employmentStatus(v: EmploymentStatusResponse[]) {
        this.employmentStatusList = v;
        this.currentPageSize = this.employmentStatusList.length;
    }
}
export class EmploymentStatusResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
