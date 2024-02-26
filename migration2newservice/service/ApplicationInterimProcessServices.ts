import BaseService from 'App/Services/BaseService';
import ApplicationInterimProcess from 'App/Models/ApplicationInterimProcess';

export default class ApplicationInterimProcessServices extends BaseService {
    public async getApplicationInterimProcesses(
        payload,
    ): Promise<ApplicationInterimProcessesResponse> {
        const applicationInterimProcessList = await ApplicationInterimProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const applicationInterimProcess = {
            pageNum: payload.pageNum,
            totalData: applicationInterimProcessList.length,
            totalPage: Math.ceil(
                applicationInterimProcessList.length / payload.pageSize,
            ),
            applicationInterimProcesss: applicationInterimProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ApplicationInterimProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, applicationInterimProcess);
        // }

        applicationInterimProcess.applicationInterimProcesss =
            applicationInterimProcess.applicationInterimProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(applicationInterimProcessList);
        return applicationInterimProcess;
    }
    public async getApplicationInterimProcess(
        personalDetailId,
    ): Promise<ApplicationInterimProcessDetailResponse | Error> {
        let applicationInterimProcess: ApplicationInterimProcessDetailResponse =
            new ApplicationInterimProcessDetailResponse();

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
        applicationInterimProcess.employee.populate(personalDetail);
        return applicationInterimProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ApplicationInterimProcessDetailResponse {
    public employee: ApplicationInterimProcessEmployeeResponse =
        new ApplicationInterimProcessEmployeeResponse();
    public service: ApplicationInterimProcessServiceResponse =
        new ApplicationInterimProcessServiceResponse();
}
export class ApplicationInterimProcessEmployeeResponse {
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
export class ApplicationInterimProcessServiceResponse {
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

export default class ApplicationInterimProcessesResponse extends BaseResponse<ApplicationInterimProcessResponse> {
    private applicationInterimProcessList: ApplicationInterimProcessResponse[] = [];
    public get applicationInterimProcesses(): ApplicationInterimProcessResponse[] {
        return this.applicationInterimProcessList;
    }
    public set applicationInterimProcesses(v: ApplicationInterimProcessResponse[]) {
        this.applicationInterimProcessList = v;
        this.currentPageSize = this.applicationInterimProcessList.length;
    }
}
export class ApplicationInterimProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
