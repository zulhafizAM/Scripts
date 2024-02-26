import BaseService from 'App/Services/BaseService';
import MovingOutProcess from 'App/Models/MovingOutProcess';

export default class MovingOutProcessServices extends BaseService {
    public async getMovingOutProcesses(
        payload,
    ): Promise<MovingOutProcessesResponse> {
        const movingOutProcessList = await MovingOutProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const movingOutProcess = {
            pageNum: payload.pageNum,
            totalData: movingOutProcessList.length,
            totalPage: Math.ceil(
                movingOutProcessList.length / payload.pageSize,
            ),
            movingOutProcesss: movingOutProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as MovingOutProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, movingOutProcess);
        // }

        movingOutProcess.movingOutProcesss =
            movingOutProcess.movingOutProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(movingOutProcessList);
        return movingOutProcess;
    }
    public async getMovingOutProcess(
        personalDetailId,
    ): Promise<MovingOutProcessDetailResponse | Error> {
        let movingOutProcess: MovingOutProcessDetailResponse =
            new MovingOutProcessDetailResponse();

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
        movingOutProcess.employee.populate(personalDetail);
        return movingOutProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class MovingOutProcessDetailResponse {
    public employee: MovingOutProcessEmployeeResponse =
        new MovingOutProcessEmployeeResponse();
    public service: MovingOutProcessServiceResponse =
        new MovingOutProcessServiceResponse();
}
export class MovingOutProcessEmployeeResponse {
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
export class MovingOutProcessServiceResponse {
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

export default class MovingOutProcessesResponse extends BaseResponse<MovingOutProcessResponse> {
    private movingOutProcessList: MovingOutProcessResponse[] = [];
    public get movingOutProcesses(): MovingOutProcessResponse[] {
        return this.movingOutProcessList;
    }
    public set movingOutProcesses(v: MovingOutProcessResponse[]) {
        this.movingOutProcessList = v;
        this.currentPageSize = this.movingOutProcessList.length;
    }
}
export class MovingOutProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
