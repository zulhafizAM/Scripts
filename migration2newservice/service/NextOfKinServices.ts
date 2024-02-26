import BaseService from 'App/Services/BaseService';
import NextOfKin from 'App/Models/NextOfKin';

export default class NextOfKinServices extends BaseService {
    public async getNextOfKins(
        payload,
    ): Promise<NextOfKinsResponse> {
        const nextOfKinList = await NextOfKin.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const nextOfKin = {
            pageNum: payload.pageNum,
            totalData: nextOfKinList.length,
            totalPage: Math.ceil(
                nextOfKinList.length / payload.pageSize,
            ),
            nextOfKins: nextOfKinList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as NextOfKinsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, nextOfKin);
        // }

        nextOfKin.nextOfKins =
            nextOfKin.nextOfKins.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(nextOfKinList);
        return nextOfKin;
    }
    public async getNextOfKin(
        personalDetailId,
    ): Promise<NextOfKinDetailResponse | Error> {
        let nextOfKin: NextOfKinDetailResponse =
            new NextOfKinDetailResponse();

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
        nextOfKin.employee.populate(personalDetail);
        return nextOfKin;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class NextOfKinDetailResponse {
    public employee: NextOfKinEmployeeResponse =
        new NextOfKinEmployeeResponse();
    public service: NextOfKinServiceResponse =
        new NextOfKinServiceResponse();
}
export class NextOfKinEmployeeResponse {
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
export class NextOfKinServiceResponse {
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

export default class NextOfKinsResponse extends BaseResponse<NextOfKinResponse> {
    private nextOfKinList: NextOfKinResponse[] = [];
    public get nextOfKins(): NextOfKinResponse[] {
        return this.nextOfKinList;
    }
    public set nextOfKins(v: NextOfKinResponse[]) {
        this.nextOfKinList = v;
        this.currentPageSize = this.nextOfKinList.length;
    }
}
export class NextOfKinResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
