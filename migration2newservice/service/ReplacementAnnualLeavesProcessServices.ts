import BaseService from 'App/Services/BaseService';
import ReplacementAnnualLeavesProcess from 'App/Models/ReplacementAnnualLeavesProcess';

export default class ReplacementAnnualLeavesProcessServices extends BaseService {
    public async getReplacementAnnualLeavesProcesses(
        payload,
    ): Promise<ReplacementAnnualLeavesProcessesResponse> {
        const replacementAnnualLeavesProcessList = await ReplacementAnnualLeavesProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const replacementAnnualLeavesProcess = {
            pageNum: payload.pageNum,
            totalData: replacementAnnualLeavesProcessList.length,
            totalPage: Math.ceil(
                replacementAnnualLeavesProcessList.length / payload.pageSize,
            ),
            replacementAnnualLeavesProcesss: replacementAnnualLeavesProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ReplacementAnnualLeavesProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, replacementAnnualLeavesProcess);
        // }

        replacementAnnualLeavesProcess.replacementAnnualLeavesProcesss =
            replacementAnnualLeavesProcess.replacementAnnualLeavesProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(replacementAnnualLeavesProcessList);
        return replacementAnnualLeavesProcess;
    }
    public async getReplacementAnnualLeavesProcess(
        personalDetailId,
    ): Promise<ReplacementAnnualLeavesProcessDetailResponse | Error> {
        let replacementAnnualLeavesProcess: ReplacementAnnualLeavesProcessDetailResponse =
            new ReplacementAnnualLeavesProcessDetailResponse();

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
        replacementAnnualLeavesProcess.employee.populate(personalDetail);
        return replacementAnnualLeavesProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ReplacementAnnualLeavesProcessDetailResponse {
    public employee: ReplacementAnnualLeavesProcessEmployeeResponse =
        new ReplacementAnnualLeavesProcessEmployeeResponse();
    public service: ReplacementAnnualLeavesProcessServiceResponse =
        new ReplacementAnnualLeavesProcessServiceResponse();
}
export class ReplacementAnnualLeavesProcessEmployeeResponse {
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
export class ReplacementAnnualLeavesProcessServiceResponse {
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

export default class ReplacementAnnualLeavesProcessesResponse extends BaseResponse<ReplacementAnnualLeavesProcessResponse> {
    private replacementAnnualLeavesProcessList: ReplacementAnnualLeavesProcessResponse[] = [];
    public get replacementAnnualLeavesProcesses(): ReplacementAnnualLeavesProcessResponse[] {
        return this.replacementAnnualLeavesProcessList;
    }
    public set replacementAnnualLeavesProcesses(v: ReplacementAnnualLeavesProcessResponse[]) {
        this.replacementAnnualLeavesProcessList = v;
        this.currentPageSize = this.replacementAnnualLeavesProcessList.length;
    }
}
export class ReplacementAnnualLeavesProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
