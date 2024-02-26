import BaseService from 'App/Services/BaseService';
import HouseMovingProcess from 'App/Models/HouseMovingProcess';

export default class HouseMovingProcessServices extends BaseService {
    public async getHouseMovingProcesses(
        payload,
    ): Promise<HouseMovingProcessesResponse> {
        const houseMovingProcessList = await HouseMovingProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const houseMovingProcess = {
            pageNum: payload.pageNum,
            totalData: houseMovingProcessList.length,
            totalPage: Math.ceil(
                houseMovingProcessList.length / payload.pageSize,
            ),
            houseMovingProcesss: houseMovingProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as HouseMovingProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, houseMovingProcess);
        // }

        houseMovingProcess.houseMovingProcesss =
            houseMovingProcess.houseMovingProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(houseMovingProcessList);
        return houseMovingProcess;
    }
    public async getHouseMovingProcess(
        personalDetailId,
    ): Promise<HouseMovingProcessDetailResponse | Error> {
        let houseMovingProcess: HouseMovingProcessDetailResponse =
            new HouseMovingProcessDetailResponse();

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
        houseMovingProcess.employee.populate(personalDetail);
        return houseMovingProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class HouseMovingProcessDetailResponse {
    public employee: HouseMovingProcessEmployeeResponse =
        new HouseMovingProcessEmployeeResponse();
    public service: HouseMovingProcessServiceResponse =
        new HouseMovingProcessServiceResponse();
}
export class HouseMovingProcessEmployeeResponse {
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
export class HouseMovingProcessServiceResponse {
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

export default class HouseMovingProcessesResponse extends BaseResponse<HouseMovingProcessResponse> {
    private houseMovingProcessList: HouseMovingProcessResponse[] = [];
    public get houseMovingProcesses(): HouseMovingProcessResponse[] {
        return this.houseMovingProcessList;
    }
    public set houseMovingProcesses(v: HouseMovingProcessResponse[]) {
        this.houseMovingProcessList = v;
        this.currentPageSize = this.houseMovingProcessList.length;
    }
}
export class HouseMovingProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
