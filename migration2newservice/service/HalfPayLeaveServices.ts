import BaseService from 'App/Services/BaseService';
import HalfPayLeave from 'App/Models/HalfPayLeave';

export default class HalfPayLeaveServices extends BaseService {
    public async getHalfPayLeaves(
        payload,
    ): Promise<HalfPayLeavesResponse> {
        const halfPayLeaveList = await HalfPayLeave.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const halfPayLeave = {
            pageNum: payload.pageNum,
            totalData: halfPayLeaveList.length,
            totalPage: Math.ceil(
                halfPayLeaveList.length / payload.pageSize,
            ),
            halfPayLeaves: halfPayLeaveList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as HalfPayLeavesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, halfPayLeave);
        // }

        halfPayLeave.halfPayLeaves =
            halfPayLeave.halfPayLeaves.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(halfPayLeaveList);
        return halfPayLeave;
    }
    public async getHalfPayLeave(
        personalDetailId,
    ): Promise<HalfPayLeaveDetailResponse | Error> {
        let halfPayLeave: HalfPayLeaveDetailResponse =
            new HalfPayLeaveDetailResponse();

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
        halfPayLeave.employee.populate(personalDetail);
        return halfPayLeave;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class HalfPayLeaveDetailResponse {
    public employee: HalfPayLeaveEmployeeResponse =
        new HalfPayLeaveEmployeeResponse();
    public service: HalfPayLeaveServiceResponse =
        new HalfPayLeaveServiceResponse();
}
export class HalfPayLeaveEmployeeResponse {
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
export class HalfPayLeaveServiceResponse {
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

export default class HalfPayLeavesResponse extends BaseResponse<HalfPayLeaveResponse> {
    private halfPayLeaveList: HalfPayLeaveResponse[] = [];
    public get halfPayLeaves(): HalfPayLeaveResponse[] {
        return this.halfPayLeaveList;
    }
    public set halfPayLeaves(v: HalfPayLeaveResponse[]) {
        this.halfPayLeaveList = v;
        this.currentPageSize = this.halfPayLeaveList.length;
    }
}
export class HalfPayLeaveResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
