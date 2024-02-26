import BaseService from 'App/Services/BaseService';
import SalaryMovement from 'App/Models/SalaryMovement';

export default class SalaryMovementServices extends BaseService {
    public async getSalaryMovements(
        payload,
    ): Promise<SalaryMovementsResponse> {
        const salaryMovementList = await SalaryMovement.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const salaryMovement = {
            pageNum: payload.pageNum,
            totalData: salaryMovementList.length,
            totalPage: Math.ceil(
                salaryMovementList.length / payload.pageSize,
            ),
            salaryMovements: salaryMovementList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as SalaryMovementsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, salaryMovement);
        // }

        salaryMovement.salaryMovements =
            salaryMovement.salaryMovements.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(salaryMovementList);
        return salaryMovement;
    }
    public async getSalaryMovement(
        personalDetailId,
    ): Promise<SalaryMovementDetailResponse | Error> {
        let salaryMovement: SalaryMovementDetailResponse =
            new SalaryMovementDetailResponse();

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
        salaryMovement.employee.populate(personalDetail);
        return salaryMovement;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class SalaryMovementDetailResponse {
    public employee: SalaryMovementEmployeeResponse =
        new SalaryMovementEmployeeResponse();
    public service: SalaryMovementServiceResponse =
        new SalaryMovementServiceResponse();
}
export class SalaryMovementEmployeeResponse {
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
export class SalaryMovementServiceResponse {
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

export default class SalaryMovementsResponse extends BaseResponse<SalaryMovementResponse> {
    private salaryMovementList: SalaryMovementResponse[] = [];
    public get salaryMovements(): SalaryMovementResponse[] {
        return this.salaryMovementList;
    }
    public set salaryMovements(v: SalaryMovementResponse[]) {
        this.salaryMovementList = v;
        this.currentPageSize = this.salaryMovementList.length;
    }
}
export class SalaryMovementResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
