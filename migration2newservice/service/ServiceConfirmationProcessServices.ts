import BaseService from 'App/Services/BaseService';
import ServiceConfirmationProcess from 'App/Models/ServiceConfirmationProcess';

export default class ServiceConfirmationProcessServices extends BaseService {
    public async getServiceConfirmationProcesses(
        payload,
    ): Promise<ServiceConfirmationProcessesResponse> {
        const serviceConfirmationProcessList = await ServiceConfirmationProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const serviceConfirmationProcess = {
            pageNum: payload.pageNum,
            totalData: serviceConfirmationProcessList.length,
            totalPage: Math.ceil(
                serviceConfirmationProcessList.length / payload.pageSize,
            ),
            serviceConfirmationProcesss: serviceConfirmationProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ServiceConfirmationProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, serviceConfirmationProcess);
        // }

        serviceConfirmationProcess.serviceConfirmationProcesss =
            serviceConfirmationProcess.serviceConfirmationProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(serviceConfirmationProcessList);
        return serviceConfirmationProcess;
    }
    public async getServiceConfirmationProcess(
        personalDetailId,
    ): Promise<ServiceConfirmationProcessDetailResponse | Error> {
        let serviceConfirmationProcess: ServiceConfirmationProcessDetailResponse =
            new ServiceConfirmationProcessDetailResponse();

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
        serviceConfirmationProcess.employee.populate(personalDetail);
        return serviceConfirmationProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ServiceConfirmationProcessDetailResponse {
    public employee: ServiceConfirmationProcessEmployeeResponse =
        new ServiceConfirmationProcessEmployeeResponse();
    public service: ServiceConfirmationProcessServiceResponse =
        new ServiceConfirmationProcessServiceResponse();
}
export class ServiceConfirmationProcessEmployeeResponse {
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
export class ServiceConfirmationProcessServiceResponse {
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

export default class ServiceConfirmationProcessesResponse extends BaseResponse<ServiceConfirmationProcessResponse> {
    private serviceConfirmationProcessList: ServiceConfirmationProcessResponse[] = [];
    public get serviceConfirmationProcesses(): ServiceConfirmationProcessResponse[] {
        return this.serviceConfirmationProcessList;
    }
    public set serviceConfirmationProcesses(v: ServiceConfirmationProcessResponse[]) {
        this.serviceConfirmationProcessList = v;
        this.currentPageSize = this.serviceConfirmationProcessList.length;
    }
}
export class ServiceConfirmationProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
