import BaseService from 'App/Services/BaseService';
import WithoutPayLeaveProcess from 'App/Models/WithoutPayLeaveProcess';

export default class WithoutPayLeaveProcessServices extends BaseService {
    public async getWithoutPayLeaveProcesses(
        payload,
    ): Promise<WithoutPayLeaveProcessesResponse> {
        const withoutPayLeaveProcessList = await WithoutPayLeaveProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const withoutPayLeaveProcess = {
            pageNum: payload.pageNum,
            totalData: withoutPayLeaveProcessList.length,
            totalPage: Math.ceil(
                withoutPayLeaveProcessList.length / payload.pageSize,
            ),
            withoutPayLeaveProcesss: withoutPayLeaveProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as WithoutPayLeaveProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, withoutPayLeaveProcess);
        // }

        withoutPayLeaveProcess.withoutPayLeaveProcesss =
            withoutPayLeaveProcess.withoutPayLeaveProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(withoutPayLeaveProcessList);
        return withoutPayLeaveProcess;
    }
    public async getWithoutPayLeaveProcess(
        personalDetailId,
    ): Promise<WithoutPayLeaveProcessDetailResponse | Error> {
        let withoutPayLeaveProcess: WithoutPayLeaveProcessDetailResponse =
            new WithoutPayLeaveProcessDetailResponse();

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
        withoutPayLeaveProcess.employee.populate(personalDetail);
        return withoutPayLeaveProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class WithoutPayLeaveProcessDetailResponse {
    public employee: WithoutPayLeaveProcessEmployeeResponse =
        new WithoutPayLeaveProcessEmployeeResponse();
    public service: WithoutPayLeaveProcessServiceResponse =
        new WithoutPayLeaveProcessServiceResponse();
}
export class WithoutPayLeaveProcessEmployeeResponse {
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
export class WithoutPayLeaveProcessServiceResponse {
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

export default class WithoutPayLeaveProcessesResponse extends BaseResponse<WithoutPayLeaveProcessResponse> {
    private withoutPayLeaveProcessList: WithoutPayLeaveProcessResponse[] = [];
    public get withoutPayLeaveProcesses(): WithoutPayLeaveProcessResponse[] {
        return this.withoutPayLeaveProcessList;
    }
    public set withoutPayLeaveProcesses(v: WithoutPayLeaveProcessResponse[]) {
        this.withoutPayLeaveProcessList = v;
        this.currentPageSize = this.withoutPayLeaveProcessList.length;
    }
}
export class WithoutPayLeaveProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
