import BaseService from 'App/Services/BaseService';
import GeneralAssessment from 'App/Models/GeneralAssessment';

export default class GeneralAssessmentServices extends BaseService {
    public async getGeneralAssessments(
        payload,
    ): Promise<GeneralAssessmentsResponse> {
        const generalAssessmentList = await GeneralAssessment.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const generalAssessment = {
            pageNum: payload.pageNum,
            totalData: generalAssessmentList.length,
            totalPage: Math.ceil(
                generalAssessmentList.length / payload.pageSize,
            ),
            generalAssessments: generalAssessmentList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as GeneralAssessmentsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, generalAssessment);
        // }

        generalAssessment.generalAssessments =
            generalAssessment.generalAssessments.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(generalAssessmentList);
        return generalAssessment;
    }
    public async getGeneralAssessment(
        personalDetailId,
    ): Promise<GeneralAssessmentDetailResponse | Error> {
        let generalAssessment: GeneralAssessmentDetailResponse =
            new GeneralAssessmentDetailResponse();

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
        generalAssessment.employee.populate(personalDetail);
        return generalAssessment;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class GeneralAssessmentDetailResponse {
    public employee: GeneralAssessmentEmployeeResponse =
        new GeneralAssessmentEmployeeResponse();
    public service: GeneralAssessmentServiceResponse =
        new GeneralAssessmentServiceResponse();
}
export class GeneralAssessmentEmployeeResponse {
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
export class GeneralAssessmentServiceResponse {
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

export default class GeneralAssessmentsResponse extends BaseResponse<GeneralAssessmentResponse> {
    private generalAssessmentList: GeneralAssessmentResponse[] = [];
    public get generalAssessments(): GeneralAssessmentResponse[] {
        return this.generalAssessmentList;
    }
    public set generalAssessments(v: GeneralAssessmentResponse[]) {
        this.generalAssessmentList = v;
        this.currentPageSize = this.generalAssessmentList.length;
    }
}
export class GeneralAssessmentResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
