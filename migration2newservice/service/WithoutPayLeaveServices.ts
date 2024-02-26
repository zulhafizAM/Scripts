import BaseService from 'App/Services/BaseService';
import WithoutPayLeave from 'App/Models/WithoutPayLeave';

export default class WithoutPayLeaveServices extends BaseService {
    public async getWithoutPayLeaves(
        payload,
    ): Promise<WithoutPayLeavesResponse> {
        const withoutPayLeaveList = await WithoutPayLeave.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const withoutPayLeave = {
            pageNum: payload.pageNum,
            totalData: withoutPayLeaveList.length,
            totalPage: Math.ceil(
                withoutPayLeaveList.length / payload.pageSize,
            ),
            withoutPayLeaves: withoutPayLeaveList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as WithoutPayLeavesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, withoutPayLeave);
        // }

        withoutPayLeave.withoutPayLeaves =
            withoutPayLeave.withoutPayLeaves.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(withoutPayLeaveList);
        return withoutPayLeave;
    }
    public async getWithoutPayLeave(
        personalDetailId,
    ): Promise<WithoutPayLeaveDetailResponse | Error> {
        let withoutPayLeave: WithoutPayLeaveDetailResponse =
            new WithoutPayLeaveDetailResponse();

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
        withoutPayLeave.employee.populate(personalDetail);
        return withoutPayLeave;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class WithoutPayLeaveDetailResponse {
    public employee: WithoutPayLeaveEmployeeResponse =
        new WithoutPayLeaveEmployeeResponse();
    public service: WithoutPayLeaveServiceResponse =
        new WithoutPayLeaveServiceResponse();
}
export class WithoutPayLeaveEmployeeResponse {
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
export class WithoutPayLeaveServiceResponse {
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

export default class WithoutPayLeavesResponse extends BaseResponse<WithoutPayLeaveResponse> {
    private withoutPayLeaveList: WithoutPayLeaveResponse[] = [];
    public get withoutPayLeaves(): WithoutPayLeaveResponse[] {
        return this.withoutPayLeaveList;
    }
    public set withoutPayLeaves(v: WithoutPayLeaveResponse[]) {
        this.withoutPayLeaveList = v;
        this.currentPageSize = this.withoutPayLeaveList.length;
    }
}
export class WithoutPayLeaveResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
