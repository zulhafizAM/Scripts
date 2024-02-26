import BaseService from 'App/Services/BaseService';
import OtherLeave from 'App/Models/OtherLeave';

export default class OtherLeaveServices extends BaseService {
    public async getOtherLeaves(
        payload,
    ): Promise<OtherLeavesResponse> {
        const otherLeaveList = await OtherLeave.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const otherLeave = {
            pageNum: payload.pageNum,
            totalData: otherLeaveList.length,
            totalPage: Math.ceil(
                otherLeaveList.length / payload.pageSize,
            ),
            otherLeaves: otherLeaveList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as OtherLeavesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, otherLeave);
        // }

        otherLeave.otherLeaves =
            otherLeave.otherLeaves.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(otherLeaveList);
        return otherLeave;
    }
    public async getOtherLeave(
        personalDetailId,
    ): Promise<OtherLeaveDetailResponse | Error> {
        let otherLeave: OtherLeaveDetailResponse =
            new OtherLeaveDetailResponse();

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
        otherLeave.employee.populate(personalDetail);
        return otherLeave;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class OtherLeaveDetailResponse {
    public employee: OtherLeaveEmployeeResponse =
        new OtherLeaveEmployeeResponse();
    public service: OtherLeaveServiceResponse =
        new OtherLeaveServiceResponse();
}
export class OtherLeaveEmployeeResponse {
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
export class OtherLeaveServiceResponse {
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

export default class OtherLeavesResponse extends BaseResponse<OtherLeaveResponse> {
    private otherLeaveList: OtherLeaveResponse[] = [];
    public get otherLeaves(): OtherLeaveResponse[] {
        return this.otherLeaveList;
    }
    public set otherLeaves(v: OtherLeaveResponse[]) {
        this.otherLeaveList = v;
        this.currentPageSize = this.otherLeaveList.length;
    }
}
export class OtherLeaveResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
