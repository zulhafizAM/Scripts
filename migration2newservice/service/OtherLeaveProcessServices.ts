import BaseService from 'App/Services/BaseService';
import OtherLeaveProcess from 'App/Models/OtherLeaveProcess';

export default class OtherLeaveProcessServices extends BaseService {
    public async getOtherLeaveProcesses(
        payload,
    ): Promise<OtherLeaveProcessesResponse> {
        const otherLeaveProcessList = await OtherLeaveProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const otherLeaveProcess = {
            pageNum: payload.pageNum,
            totalData: otherLeaveProcessList.length,
            totalPage: Math.ceil(
                otherLeaveProcessList.length / payload.pageSize,
            ),
            otherLeaveProcesss: otherLeaveProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as OtherLeaveProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, otherLeaveProcess);
        // }

        otherLeaveProcess.otherLeaveProcesss =
            otherLeaveProcess.otherLeaveProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(otherLeaveProcessList);
        return otherLeaveProcess;
    }
    public async getOtherLeaveProcess(
        personalDetailId,
    ): Promise<OtherLeaveProcessDetailResponse | Error> {
        let otherLeaveProcess: OtherLeaveProcessDetailResponse =
            new OtherLeaveProcessDetailResponse();

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
        otherLeaveProcess.employee.populate(personalDetail);
        return otherLeaveProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class OtherLeaveProcessDetailResponse {
    public employee: OtherLeaveProcessEmployeeResponse =
        new OtherLeaveProcessEmployeeResponse();
    public service: OtherLeaveProcessServiceResponse =
        new OtherLeaveProcessServiceResponse();
}
export class OtherLeaveProcessEmployeeResponse {
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
export class OtherLeaveProcessServiceResponse {
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

export default class OtherLeaveProcessesResponse extends BaseResponse<OtherLeaveProcessResponse> {
    private otherLeaveProcessList: OtherLeaveProcessResponse[] = [];
    public get otherLeaveProcesses(): OtherLeaveProcessResponse[] {
        return this.otherLeaveProcessList;
    }
    public set otherLeaveProcesses(v: OtherLeaveProcessResponse[]) {
        this.otherLeaveProcessList = v;
        this.currentPageSize = this.otherLeaveProcessList.length;
    }
}
export class OtherLeaveProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
