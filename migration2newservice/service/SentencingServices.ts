import BaseService from 'App/Services/BaseService';
import Sentencing from 'App/Models/Sentencing';

export default class SentencingServices extends BaseService {
    public async getSentencings(
        payload,
    ): Promise<SentencingsResponse> {
        const sentencingList = await Sentencing.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const sentencing = {
            pageNum: payload.pageNum,
            totalData: sentencingList.length,
            totalPage: Math.ceil(
                sentencingList.length / payload.pageSize,
            ),
            sentencings: sentencingList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as SentencingsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, sentencing);
        // }

        sentencing.sentencings =
            sentencing.sentencings.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(sentencingList);
        return sentencing;
    }
    public async getSentencing(
        personalDetailId,
    ): Promise<SentencingDetailResponse | Error> {
        let sentencing: SentencingDetailResponse =
            new SentencingDetailResponse();

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
        sentencing.employee.populate(personalDetail);
        return sentencing;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class SentencingDetailResponse {
    public employee: SentencingEmployeeResponse =
        new SentencingEmployeeResponse();
    public service: SentencingServiceResponse =
        new SentencingServiceResponse();
}
export class SentencingEmployeeResponse {
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
export class SentencingServiceResponse {
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

export default class SentencingsResponse extends BaseResponse<SentencingResponse> {
    private sentencingList: SentencingResponse[] = [];
    public get sentencings(): SentencingResponse[] {
        return this.sentencingList;
    }
    public set sentencings(v: SentencingResponse[]) {
        this.sentencingList = v;
        this.currentPageSize = this.sentencingList.length;
    }
}
export class SentencingResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
