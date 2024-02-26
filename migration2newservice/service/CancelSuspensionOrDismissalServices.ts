import BaseService from 'App/Services/BaseService';
import CancelSuspensionOrDismissal from 'App/Models/CancelSuspensionOrDismissal';

export default class CancelSuspensionOrDismissalServices extends BaseService {
    public async getCancelSuspensionOrDismissals(
        payload,
    ): Promise<CancelSuspensionOrDismissalsResponse> {
        const cancelSuspensionOrDismissalList = await CancelSuspensionOrDismissal.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const cancelSuspensionOrDismissal = {
            pageNum: payload.pageNum,
            totalData: cancelSuspensionOrDismissalList.length,
            totalPage: Math.ceil(
                cancelSuspensionOrDismissalList.length / payload.pageSize,
            ),
            cancelSuspensionOrDismissals: cancelSuspensionOrDismissalList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as CancelSuspensionOrDismissalsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, cancelSuspensionOrDismissal);
        // }

        cancelSuspensionOrDismissal.cancelSuspensionOrDismissals =
            cancelSuspensionOrDismissal.cancelSuspensionOrDismissals.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(cancelSuspensionOrDismissalList);
        return cancelSuspensionOrDismissal;
    }
    public async getCancelSuspensionOrDismissal(
        personalDetailId,
    ): Promise<CancelSuspensionOrDismissalDetailResponse | Error> {
        let cancelSuspensionOrDismissal: CancelSuspensionOrDismissalDetailResponse =
            new CancelSuspensionOrDismissalDetailResponse();

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
        cancelSuspensionOrDismissal.employee.populate(personalDetail);
        return cancelSuspensionOrDismissal;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class CancelSuspensionOrDismissalDetailResponse {
    public employee: CancelSuspensionOrDismissalEmployeeResponse =
        new CancelSuspensionOrDismissalEmployeeResponse();
    public service: CancelSuspensionOrDismissalServiceResponse =
        new CancelSuspensionOrDismissalServiceResponse();
}
export class CancelSuspensionOrDismissalEmployeeResponse {
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
export class CancelSuspensionOrDismissalServiceResponse {
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

export default class CancelSuspensionOrDismissalsResponse extends BaseResponse<CancelSuspensionOrDismissalResponse> {
    private cancelSuspensionOrDismissalList: CancelSuspensionOrDismissalResponse[] = [];
    public get cancelSuspensionOrDismissals(): CancelSuspensionOrDismissalResponse[] {
        return this.cancelSuspensionOrDismissalList;
    }
    public set cancelSuspensionOrDismissals(v: CancelSuspensionOrDismissalResponse[]) {
        this.cancelSuspensionOrDismissalList = v;
        this.currentPageSize = this.cancelSuspensionOrDismissalList.length;
    }
}
export class CancelSuspensionOrDismissalResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
