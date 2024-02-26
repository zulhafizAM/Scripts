import BaseService from 'App/Services/BaseService';
import PersonalTravelInsuranceClaim from 'App/Models/PersonalTravelInsuranceClaim';

export default class PersonalTravelInsuranceClaimServices extends BaseService {
    public async getPersonalTravelInsuranceClaims(
        payload,
    ): Promise<PersonalTravelInsuranceClaimsResponse> {
        const personalTravelInsuranceClaimList = await PersonalTravelInsuranceClaim.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const personalTravelInsuranceClaim = {
            pageNum: payload.pageNum,
            totalData: personalTravelInsuranceClaimList.length,
            totalPage: Math.ceil(
                personalTravelInsuranceClaimList.length / payload.pageSize,
            ),
            personalTravelInsuranceClaims: personalTravelInsuranceClaimList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as PersonalTravelInsuranceClaimsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, personalTravelInsuranceClaim);
        // }

        personalTravelInsuranceClaim.personalTravelInsuranceClaims =
            personalTravelInsuranceClaim.personalTravelInsuranceClaims.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(personalTravelInsuranceClaimList);
        return personalTravelInsuranceClaim;
    }
    public async getPersonalTravelInsuranceClaim(
        personalDetailId,
    ): Promise<PersonalTravelInsuranceClaimDetailResponse | Error> {
        let personalTravelInsuranceClaim: PersonalTravelInsuranceClaimDetailResponse =
            new PersonalTravelInsuranceClaimDetailResponse();

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
        personalTravelInsuranceClaim.employee.populate(personalDetail);
        return personalTravelInsuranceClaim;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class PersonalTravelInsuranceClaimDetailResponse {
    public employee: PersonalTravelInsuranceClaimEmployeeResponse =
        new PersonalTravelInsuranceClaimEmployeeResponse();
    public service: PersonalTravelInsuranceClaimServiceResponse =
        new PersonalTravelInsuranceClaimServiceResponse();
}
export class PersonalTravelInsuranceClaimEmployeeResponse {
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
export class PersonalTravelInsuranceClaimServiceResponse {
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

export default class PersonalTravelInsuranceClaimsResponse extends BaseResponse<PersonalTravelInsuranceClaimResponse> {
    private personalTravelInsuranceClaimList: PersonalTravelInsuranceClaimResponse[] = [];
    public get personalTravelInsuranceClaims(): PersonalTravelInsuranceClaimResponse[] {
        return this.personalTravelInsuranceClaimList;
    }
    public set personalTravelInsuranceClaims(v: PersonalTravelInsuranceClaimResponse[]) {
        this.personalTravelInsuranceClaimList = v;
        this.currentPageSize = this.personalTravelInsuranceClaimList.length;
    }
}
export class PersonalTravelInsuranceClaimResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
