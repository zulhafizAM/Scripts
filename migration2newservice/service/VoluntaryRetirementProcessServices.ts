import BaseService from 'App/Services/BaseService';
import VoluntaryRetirementProcess from 'App/Models/VoluntaryRetirementProcess';

export default class VoluntaryRetirementProcessServices extends BaseService {
    public async getVoluntaryRetirementProcesses(
        payload,
    ): Promise<VoluntaryRetirementProcessesResponse> {
        const voluntaryRetirementProcessList = await VoluntaryRetirementProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const voluntaryRetirementProcess = {
            pageNum: payload.pageNum,
            totalData: voluntaryRetirementProcessList.length,
            totalPage: Math.ceil(
                voluntaryRetirementProcessList.length / payload.pageSize,
            ),
            voluntaryRetirementProcesss: voluntaryRetirementProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as VoluntaryRetirementProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, voluntaryRetirementProcess);
        // }

        voluntaryRetirementProcess.voluntaryRetirementProcesss =
            voluntaryRetirementProcess.voluntaryRetirementProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(voluntaryRetirementProcessList);
        return voluntaryRetirementProcess;
    }
    public async getVoluntaryRetirementProcess(
        personalDetailId,
    ): Promise<VoluntaryRetirementProcessDetailResponse | Error> {
        let voluntaryRetirementProcess: VoluntaryRetirementProcessDetailResponse =
            new VoluntaryRetirementProcessDetailResponse();

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
        voluntaryRetirementProcess.employee.populate(personalDetail);
        return voluntaryRetirementProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class VoluntaryRetirementProcessDetailResponse {
    public employee: VoluntaryRetirementProcessEmployeeResponse =
        new VoluntaryRetirementProcessEmployeeResponse();
    public service: VoluntaryRetirementProcessServiceResponse =
        new VoluntaryRetirementProcessServiceResponse();
}
export class VoluntaryRetirementProcessEmployeeResponse {
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
export class VoluntaryRetirementProcessServiceResponse {
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

export default class VoluntaryRetirementProcessesResponse extends BaseResponse<VoluntaryRetirementProcessResponse> {
    private voluntaryRetirementProcessList: VoluntaryRetirementProcessResponse[] = [];
    public get voluntaryRetirementProcesses(): VoluntaryRetirementProcessResponse[] {
        return this.voluntaryRetirementProcessList;
    }
    public set voluntaryRetirementProcesses(v: VoluntaryRetirementProcessResponse[]) {
        this.voluntaryRetirementProcessList = v;
        this.currentPageSize = this.voluntaryRetirementProcessList.length;
    }
}
export class VoluntaryRetirementProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
