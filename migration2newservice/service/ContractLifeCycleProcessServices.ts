import BaseService from 'App/Services/BaseService';
import ContractLifeCycleProcess from 'App/Models/ContractLifeCycleProcess';

export default class ContractLifeCycleProcessServices extends BaseService {
    public async getContractLifeCycleProcesses(
        payload,
    ): Promise<ContractLifeCycleProcessesResponse> {
        const contractLifeCycleProcessList = await ContractLifeCycleProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const contractLifeCycleProcess = {
            pageNum: payload.pageNum,
            totalData: contractLifeCycleProcessList.length,
            totalPage: Math.ceil(
                contractLifeCycleProcessList.length / payload.pageSize,
            ),
            contractLifeCycleProcesss: contractLifeCycleProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ContractLifeCycleProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, contractLifeCycleProcess);
        // }

        contractLifeCycleProcess.contractLifeCycleProcesss =
            contractLifeCycleProcess.contractLifeCycleProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(contractLifeCycleProcessList);
        return contractLifeCycleProcess;
    }
    public async getContractLifeCycleProcess(
        personalDetailId,
    ): Promise<ContractLifeCycleProcessDetailResponse | Error> {
        let contractLifeCycleProcess: ContractLifeCycleProcessDetailResponse =
            new ContractLifeCycleProcessDetailResponse();

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
        contractLifeCycleProcess.employee.populate(personalDetail);
        return contractLifeCycleProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ContractLifeCycleProcessDetailResponse {
    public employee: ContractLifeCycleProcessEmployeeResponse =
        new ContractLifeCycleProcessEmployeeResponse();
    public service: ContractLifeCycleProcessServiceResponse =
        new ContractLifeCycleProcessServiceResponse();
}
export class ContractLifeCycleProcessEmployeeResponse {
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
export class ContractLifeCycleProcessServiceResponse {
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

export default class ContractLifeCycleProcessesResponse extends BaseResponse<ContractLifeCycleProcessResponse> {
    private contractLifeCycleProcessList: ContractLifeCycleProcessResponse[] = [];
    public get contractLifeCycleProcesses(): ContractLifeCycleProcessResponse[] {
        return this.contractLifeCycleProcessList;
    }
    public set contractLifeCycleProcesses(v: ContractLifeCycleProcessResponse[]) {
        this.contractLifeCycleProcessList = v;
        this.currentPageSize = this.contractLifeCycleProcessList.length;
    }
}
export class ContractLifeCycleProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
