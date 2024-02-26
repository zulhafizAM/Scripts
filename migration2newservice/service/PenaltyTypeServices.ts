import BaseService from 'App/Services/BaseService';
import PenaltyType from 'App/Models/PenaltyType';

export default class PenaltyTypeServices extends BaseService {
    public async getPenaltyTypes(
        payload,
    ): Promise<PenaltyTypesResponse> {
        const penaltyTypeList = await PenaltyType.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const penaltyType = {
            pageNum: payload.pageNum,
            totalData: penaltyTypeList.length,
            totalPage: Math.ceil(
                penaltyTypeList.length / payload.pageSize,
            ),
            penaltyTypes: penaltyTypeList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as PenaltyTypesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, penaltyType);
        // }

        penaltyType.penaltyTypes =
            penaltyType.penaltyTypes.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(penaltyTypeList);
        return penaltyType;
    }
    public async getPenaltyType(
        personalDetailId,
    ): Promise<PenaltyTypeDetailResponse | Error> {
        let penaltyType: PenaltyTypeDetailResponse =
            new PenaltyTypeDetailResponse();

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
        penaltyType.employee.populate(personalDetail);
        return penaltyType;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class PenaltyTypeDetailResponse {
    public employee: PenaltyTypeEmployeeResponse =
        new PenaltyTypeEmployeeResponse();
    public service: PenaltyTypeServiceResponse =
        new PenaltyTypeServiceResponse();
}
export class PenaltyTypeEmployeeResponse {
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
export class PenaltyTypeServiceResponse {
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

export default class PenaltyTypesResponse extends BaseResponse<PenaltyTypeResponse> {
    private penaltyTypeList: PenaltyTypeResponse[] = [];
    public get penaltyTypes(): PenaltyTypeResponse[] {
        return this.penaltyTypeList;
    }
    public set penaltyTypes(v: PenaltyTypeResponse[]) {
        this.penaltyTypeList = v;
        this.currentPageSize = this.penaltyTypeList.length;
    }
}
export class PenaltyTypeResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
