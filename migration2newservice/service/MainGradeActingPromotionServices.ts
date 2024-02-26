import BaseService from 'App/Services/BaseService';
import MainGradeActingPromotion from 'App/Models/MainGradeActingPromotion';

export default class MainGradeActingPromotionServices extends BaseService {
    public async getMainGradeActingPromotions(
        payload,
    ): Promise<MainGradeActingPromotionsResponse> {
        const mainGradeActingPromotionList = await MainGradeActingPromotion.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const mainGradeActingPromotion = {
            pageNum: payload.pageNum,
            totalData: mainGradeActingPromotionList.length,
            totalPage: Math.ceil(
                mainGradeActingPromotionList.length / payload.pageSize,
            ),
            mainGradeActingPromotions: mainGradeActingPromotionList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as MainGradeActingPromotionsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, mainGradeActingPromotion);
        // }

        mainGradeActingPromotion.mainGradeActingPromotions =
            mainGradeActingPromotion.mainGradeActingPromotions.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(mainGradeActingPromotionList);
        return mainGradeActingPromotion;
    }
    public async getMainGradeActingPromotion(
        personalDetailId,
    ): Promise<MainGradeActingPromotionDetailResponse | Error> {
        let mainGradeActingPromotion: MainGradeActingPromotionDetailResponse =
            new MainGradeActingPromotionDetailResponse();

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
        mainGradeActingPromotion.employee.populate(personalDetail);
        return mainGradeActingPromotion;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class MainGradeActingPromotionDetailResponse {
    public employee: MainGradeActingPromotionEmployeeResponse =
        new MainGradeActingPromotionEmployeeResponse();
    public service: MainGradeActingPromotionServiceResponse =
        new MainGradeActingPromotionServiceResponse();
}
export class MainGradeActingPromotionEmployeeResponse {
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
export class MainGradeActingPromotionServiceResponse {
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

export default class MainGradeActingPromotionsResponse extends BaseResponse<MainGradeActingPromotionResponse> {
    private mainGradeActingPromotionList: MainGradeActingPromotionResponse[] = [];
    public get mainGradeActingPromotions(): MainGradeActingPromotionResponse[] {
        return this.mainGradeActingPromotionList;
    }
    public set mainGradeActingPromotions(v: MainGradeActingPromotionResponse[]) {
        this.mainGradeActingPromotionList = v;
        this.currentPageSize = this.mainGradeActingPromotionList.length;
    }
}
export class MainGradeActingPromotionResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
