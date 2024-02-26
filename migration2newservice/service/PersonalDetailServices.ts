import BaseService from 'App/Services/BaseService';
import PersonalDetail from 'App/Models/PersonalDetail';

export default class PersonalDetailServices extends BaseService {
    public async getPersonalDetails(
        payload,
    ): Promise<PersonalDetailsResponse> {
        const personalDetailList = await PersonalDetail.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const personalDetail = {
            pageNum: payload.pageNum,
            totalData: personalDetailList.length,
            totalPage: Math.ceil(
                personalDetailList.length / payload.pageSize,
            ),
            personalDetails: personalDetailList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as PersonalDetailsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, personalDetail);
        // }

        personalDetail.personalDetails =
            personalDetail.personalDetails.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(personalDetailList);
        return personalDetail;
    }
    public async getPersonalDetail(
        personalDetailId,
    ): Promise<PersonalDetailDetailResponse | Error> {
        let personalDetail: PersonalDetailDetailResponse =
            new PersonalDetailDetailResponse();

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
        personalDetail.employee.populate(personalDetail);
        return personalDetail;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class PersonalDetailDetailResponse {
    public employee: PersonalDetailEmployeeResponse =
        new PersonalDetailEmployeeResponse();
    public service: PersonalDetailServiceResponse =
        new PersonalDetailServiceResponse();
}
export class PersonalDetailEmployeeResponse {
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
export class PersonalDetailServiceResponse {
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

export default class PersonalDetailsResponse extends BaseResponse<PersonalDetailResponse> {
    private personalDetailList: PersonalDetailResponse[] = [];
    public get personalDetails(): PersonalDetailResponse[] {
        return this.personalDetailList;
    }
    public set personalDetails(v: PersonalDetailResponse[]) {
        this.personalDetailList = v;
        this.currentPageSize = this.personalDetailList.length;
    }
}
export class PersonalDetailResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
