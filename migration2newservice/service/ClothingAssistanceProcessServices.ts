import BaseService from 'App/Services/BaseService';
import ClothingAssistanceProcess from 'App/Models/ClothingAssistanceProcess';

export default class ClothingAssistanceProcessServices extends BaseService {
    public async getClothingAssistanceProcesses(
        payload,
    ): Promise<ClothingAssistanceProcessesResponse> {
        const clothingAssistanceProcessList = await ClothingAssistanceProcess.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const clothingAssistanceProcess = {
            pageNum: payload.pageNum,
            totalData: clothingAssistanceProcessList.length,
            totalPage: Math.ceil(
                clothingAssistanceProcessList.length / payload.pageSize,
            ),
            clothingAssistanceProcesss: clothingAssistanceProcessList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ClothingAssistanceProcessesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, clothingAssistanceProcess);
        // }

        clothingAssistanceProcess.clothingAssistanceProcesss =
            clothingAssistanceProcess.clothingAssistanceProcesss.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(clothingAssistanceProcessList);
        return clothingAssistanceProcess;
    }
    public async getClothingAssistanceProcess(
        personalDetailId,
    ): Promise<ClothingAssistanceProcessDetailResponse | Error> {
        let clothingAssistanceProcess: ClothingAssistanceProcessDetailResponse =
            new ClothingAssistanceProcessDetailResponse();

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
        clothingAssistanceProcess.employee.populate(personalDetail);
        return clothingAssistanceProcess;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ClothingAssistanceProcessDetailResponse {
    public employee: ClothingAssistanceProcessEmployeeResponse =
        new ClothingAssistanceProcessEmployeeResponse();
    public service: ClothingAssistanceProcessServiceResponse =
        new ClothingAssistanceProcessServiceResponse();
}
export class ClothingAssistanceProcessEmployeeResponse {
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
export class ClothingAssistanceProcessServiceResponse {
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

export default class ClothingAssistanceProcessesResponse extends BaseResponse<ClothingAssistanceProcessResponse> {
    private clothingAssistanceProcessList: ClothingAssistanceProcessResponse[] = [];
    public get clothingAssistanceProcesses(): ClothingAssistanceProcessResponse[] {
        return this.clothingAssistanceProcessList;
    }
    public set clothingAssistanceProcesses(v: ClothingAssistanceProcessResponse[]) {
        this.clothingAssistanceProcessList = v;
        this.currentPageSize = this.clothingAssistanceProcessList.length;
    }
}
export class ClothingAssistanceProcessResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
