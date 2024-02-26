import BaseService from 'App/Services/BaseService';
import LeaveEntitlement from 'App/Models/LeaveEntitlement';

export default class LeaveEntitlementServices extends BaseService {
    public async getLeaveEntitlements(
        payload,
    ): Promise<LeaveEntitlementsResponse> {
        const leaveEntitlementList = await LeaveEntitlement.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const leaveEntitlement = {
            pageNum: payload.pageNum,
            totalData: leaveEntitlementList.length,
            totalPage: Math.ceil(
                leaveEntitlementList.length / payload.pageSize,
            ),
            leaveEntitlements: leaveEntitlementList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as LeaveEntitlementsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, leaveEntitlement);
        // }

        leaveEntitlement.leaveEntitlements =
            leaveEntitlement.leaveEntitlements.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(leaveEntitlementList);
        return leaveEntitlement;
    }
    public async getLeaveEntitlement(
        personalDetailId,
    ): Promise<LeaveEntitlementDetailResponse | Error> {
        let leaveEntitlement: LeaveEntitlementDetailResponse =
            new LeaveEntitlementDetailResponse();

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
        leaveEntitlement.employee.populate(personalDetail);
        return leaveEntitlement;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class LeaveEntitlementDetailResponse {
    public employee: LeaveEntitlementEmployeeResponse =
        new LeaveEntitlementEmployeeResponse();
    public service: LeaveEntitlementServiceResponse =
        new LeaveEntitlementServiceResponse();
}
export class LeaveEntitlementEmployeeResponse {
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
export class LeaveEntitlementServiceResponse {
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

export default class LeaveEntitlementsResponse extends BaseResponse<LeaveEntitlementResponse> {
    private leaveEntitlementList: LeaveEntitlementResponse[] = [];
    public get leaveEntitlements(): LeaveEntitlementResponse[] {
        return this.leaveEntitlementList;
    }
    public set leaveEntitlements(v: LeaveEntitlementResponse[]) {
        this.leaveEntitlementList = v;
        this.currentPageSize = this.leaveEntitlementList.length;
    }
}
export class LeaveEntitlementResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
