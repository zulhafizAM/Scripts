import BaseService from 'App/Services/BaseService';
import GradePromotionProcess from 'App/Models/GradePromotionProcess';

export default class GradePromotionProcessServices extends BaseService {
    public async getGradePromotionProcesses(
        payload,
    ): Promise<GradePromotionProcessesResponse> {
        const gradePromotionProcessList = await GradePromotionProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const gradePromotionProcess = {
            pageNum: payload.pageNum,
            totalData: gradePromotionProcessList.length,
            totalPage: Math.ceil(
                gradePromotionProcessList.length / payload.pageSize,
            ),
            gradePromotionProcesss: gradePromotionProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as GradePromotionProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, gradePromotionProcess);
        // }

        gradePromotionProcess.gradePromotionProcesss =
            gradePromotionProcess.gradePromotionProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(gradePromotionProcessList);
        return gradePromotionProcess;
    }
    public async getGradePromotionProcess(
        personalDetailId,
    ): Promise<GradePromotionProcessDetailResponse | Error> {
        let gradePromotionProcess: GradePromotionProcessDetailResponse =
            new GradePromotionProcessDetailResponse();

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
        gradePromotionProcess.employee.populate(personalDetail);
        return gradePromotionProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class GradePromotionProcessDetailResponse {
    public employee: GradePromotionProcessEmployeeResponse =
        new GradePromotionProcessEmployeeResponse();
    public service: GradePromotionProcessServiceResponse =
        new GradePromotionProcessServiceResponse();
}
export class GradePromotionProcessEmployeeResponse {
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
export class GradePromotionProcessServiceResponse {
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

export default class GradePromotionProcessesResponse extends BaseResponse<GradePromotionProcessResponse> {
    private gradePromotionProcessList: GradePromotionProcessResponse[] = [];
    public get gradePromotionProcesses(): GradePromotionProcessResponse[] {
        return this.gradePromotionProcessList;
    }
    public set gradePromotionProcesses(v: GradePromotionProcessResponse[]) {
        this.gradePromotionProcessList = v;
        this.currentPageSize = this.gradePromotionProcessList.length;
    }
}
export class GradePromotionProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
