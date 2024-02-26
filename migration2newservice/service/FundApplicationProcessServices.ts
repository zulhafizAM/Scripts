import BaseService from 'App/Services/BaseService';
import FundApplicationProcess from 'App/Models/FundApplicationProcess';

export default class FundApplicationProcessServices extends BaseService {
    public async getFundApplicationProcesses(
        payload,
    ): Promise<FundApplicationProcessesResponse> {
        const fundApplicationProcessList = await FundApplicationProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const fundApplicationProcess = {
            pageNum: payload.pageNum,
            totalData: fundApplicationProcessList.length,
            totalPage: Math.ceil(
                fundApplicationProcessList.length / payload.pageSize,
            ),
            fundApplicationProcesss: fundApplicationProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as FundApplicationProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, fundApplicationProcess);
        // }

        fundApplicationProcess.fundApplicationProcesss =
            fundApplicationProcess.fundApplicationProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(fundApplicationProcessList);
        return fundApplicationProcess;
    }
    public async getFundApplicationProcess(
        personalDetailId,
    ): Promise<FundApplicationProcessDetailResponse | Error> {
        let fundApplicationProcess: FundApplicationProcessDetailResponse =
            new FundApplicationProcessDetailResponse();

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
        fundApplicationProcess.employee.populate(personalDetail);
        return fundApplicationProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class FundApplicationProcessDetailResponse {
    public employee: FundApplicationProcessEmployeeResponse =
        new FundApplicationProcessEmployeeResponse();
    public service: FundApplicationProcessServiceResponse =
        new FundApplicationProcessServiceResponse();
}
export class FundApplicationProcessEmployeeResponse {
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
export class FundApplicationProcessServiceResponse {
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

export default class FundApplicationProcessesResponse extends BaseResponse<FundApplicationProcessResponse> {
    private fundApplicationProcessList: FundApplicationProcessResponse[] = [];
    public get fundApplicationProcesses(): FundApplicationProcessResponse[] {
        return this.fundApplicationProcessList;
    }
    public set fundApplicationProcesses(v: FundApplicationProcessResponse[]) {
        this.fundApplicationProcessList = v;
        this.currentPageSize = this.fundApplicationProcessList.length;
    }
}
export class FundApplicationProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
