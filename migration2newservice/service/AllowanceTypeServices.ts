import BaseService from 'App/Services/BaseService';
import AllowanceType from 'App/Models/AllowanceType';

export default class AllowanceTypeServices extends BaseService {
    public async getAllowanceTypes(
        payload,
    ): Promise<AllowanceTypesResponse> {
        const allowanceTypeList = await AllowanceType.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const allowanceType = {
            pageNum: payload.pageNum,
            totalData: allowanceTypeList.length,
            totalPage: Math.ceil(
                allowanceTypeList.length / payload.pageSize,
            ),
            allowanceTypes: allowanceTypeList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as AllowanceTypesResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, allowanceType);
        // }

        allowanceType.allowanceTypes =
            allowanceType.allowanceTypes.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(allowanceTypeList);
        return allowanceType;
    }
    public async getAllowanceType(
        personalDetailId,
    ): Promise<AllowanceTypeDetailResponse | Error> {
        let allowanceType: AllowanceTypeDetailResponse =
            new AllowanceTypeDetailResponse();

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
        allowanceType.employee.populate(personalDetail);
        return allowanceType;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class AllowanceTypeDetailResponse {
    public employee: AllowanceTypeEmployeeResponse =
        new AllowanceTypeEmployeeResponse();
    public service: AllowanceTypeServiceResponse =
        new AllowanceTypeServiceResponse();
}
export class AllowanceTypeEmployeeResponse {
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
export class AllowanceTypeServiceResponse {
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

export default class AllowanceTypesResponse extends BaseResponse<AllowanceTypeResponse> {
    private allowanceTypeList: AllowanceTypeResponse[] = [];
    public get allowanceTypes(): AllowanceTypeResponse[] {
        return this.allowanceTypeList;
    }
    public set allowanceTypes(v: AllowanceTypeResponse[]) {
        this.allowanceTypeList = v;
        this.currentPageSize = this.allowanceTypeList.length;
    }
}
export class AllowanceTypeResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
