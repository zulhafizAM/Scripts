import BaseService from 'App/Services/BaseService';
import ContractLifeCycle from 'App/Models/ContractLifeCycle';

export default class ContractLifeCycleServices extends BaseService {
    public async getContractLifeCycles(
        payload,
    ): Promise<ContractLifeCyclesResponse> {
        const contractLifeCycleList = await ContractLifeCycle.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const contractLifeCycle = {
            pageNum: payload.pageNum,
            totalData: contractLifeCycleList.length,
            totalPage: Math.ceil(
                contractLifeCycleList.length / payload.pageSize,
            ),
            contractLifeCycles: contractLifeCycleList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ContractLifeCyclesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, contractLifeCycle);
        // }

        contractLifeCycle.contractLifeCycles =
            contractLifeCycle.contractLifeCycles.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(contractLifeCycleList);
        return contractLifeCycle;
    }
    public async getContractLifeCycle(
        personalDetailId,
    ): Promise<ContractLifeCycleDetailResponse | Error> {
        let contractLifeCycle: ContractLifeCycleDetailResponse =
            new ContractLifeCycleDetailResponse();

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
        contractLifeCycle.employee.populate(personalDetail);
        return contractLifeCycle;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ContractLifeCycleDetailResponse {
    public employee: ContractLifeCycleEmployeeResponse =
        new ContractLifeCycleEmployeeResponse();
    public service: ContractLifeCycleServiceResponse =
        new ContractLifeCycleServiceResponse();
}
export class ContractLifeCycleEmployeeResponse {
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
export class ContractLifeCycleServiceResponse {
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

export default class ContractLifeCyclesResponse extends BaseResponse<ContractLifeCycleResponse> {
    private contractLifeCycleList: ContractLifeCycleResponse[] = [];
    public get contractLifeCycles(): ContractLifeCycleResponse[] {
        return this.contractLifeCycleList;
    }
    public set contractLifeCycles(v: ContractLifeCycleResponse[]) {
        this.contractLifeCycleList = v;
        this.currentPageSize = this.contractLifeCycleList.length;
    }
}
export class ContractLifeCycleResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
