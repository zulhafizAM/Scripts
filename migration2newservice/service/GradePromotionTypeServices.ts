import BaseService from 'App/Services/BaseService';
import GradePromotionType from 'App/Models/GradePromotionType';

export default class GradePromotionTypeServices extends BaseService {
    public async getGradePromotionTypes(
        payload,
    ): Promise<GradePromotionTypesResponse> {
        const gradePromotionTypeList = await GradePromotionType.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const gradePromotionType = {
            pageNum: payload.pageNum,
            totalData: gradePromotionTypeList.length,
            totalPage: Math.ceil(
                gradePromotionTypeList.length / payload.pageSize,
            ),
            gradePromotionTypes: gradePromotionTypeList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as GradePromotionTypesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, gradePromotionType);
        // }

        gradePromotionType.gradePromotionTypes =
            gradePromotionType.gradePromotionTypes.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(gradePromotionTypeList);
        return gradePromotionType;
    }
    public async getGradePromotionType(
        personalDetailId,
    ): Promise<GradePromotionTypeDetailResponse | Error> {
        let gradePromotionType: GradePromotionTypeDetailResponse =
            new GradePromotionTypeDetailResponse();

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
        gradePromotionType.employee.populate(personalDetail);
        return gradePromotionType;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class GradePromotionTypeDetailResponse {
    public employee: GradePromotionTypeEmployeeResponse =
        new GradePromotionTypeEmployeeResponse();
    public service: GradePromotionTypeServiceResponse =
        new GradePromotionTypeServiceResponse();
}
export class GradePromotionTypeEmployeeResponse {
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
export class GradePromotionTypeServiceResponse {
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

export default class GradePromotionTypesResponse extends BaseResponse<GradePromotionTypeResponse> {
    private gradePromotionTypeList: GradePromotionTypeResponse[] = [];
    public get gradePromotionTypes(): GradePromotionTypeResponse[] {
        return this.gradePromotionTypeList;
    }
    public set gradePromotionTypes(v: GradePromotionTypeResponse[]) {
        this.gradePromotionTypeList = v;
        this.currentPageSize = this.gradePromotionTypeList.length;
    }
}
export class GradePromotionTypeResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
