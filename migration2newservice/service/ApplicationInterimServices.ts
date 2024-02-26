import BaseService from 'App/Services/BaseService';
import ApplicationInterim from 'App/Models/ApplicationInterim';

export default class ApplicationInterimServices extends BaseService {
    public async getApplicationInterims(
        payload,
    ): Promise<ApplicationInterimsResponse> {
        const applicationInterimList = await ApplicationInterim.query().preload(
            'employee',
            (data) => data.preload('personalDetail'),
        );

        const applicationInterim = {
            pageNum: payload.pageNum,
            totalData: applicationInterimList.length,
            totalPage: Math.ceil(
                applicationInterimList.length / payload.pageSize,
            ),
            applicationInterims: applicationInterimList.map((result) => ({
                employeeNo: result.employee.employeeNumber,
                employeeName: result.employee.personalDetail.name,
                identityCardNo:
                    result.employee.personalDetail.identityDocumentNumber,
                category: 'tetap',
                status: result.status,
                remark: result.remark,
            })),
        } as ApplicationInterimsResponse;

        // if (payload.orderBy !== null) {
        //     this.ordering(payload, applicationInterim);
        // }

        applicationInterim.applicationInterims =
            applicationInterim.applicationInterims.slice(
                (payload.pageNum - 1) * payload.pageSize,
                payload.pageNum * payload.pageSize,
            );

        console.log(applicationInterimList);
        return applicationInterim;
    }
    public async getApplicationInterim(
        personalDetailId,
    ): Promise<ApplicationInterimDetailResponse | Error> {
        let applicationInterim: ApplicationInterimDetailResponse =
            new ApplicationInterimDetailResponse();

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
        applicationInterim.employee.populate(personalDetail);
        return applicationInterim;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class ApplicationInterimDetailResponse {
    public employee: ApplicationInterimEmployeeResponse =
        new ApplicationInterimEmployeeResponse();
    public service: ApplicationInterimServiceResponse =
        new ApplicationInterimServiceResponse();
}
export class ApplicationInterimEmployeeResponse {
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
export class ApplicationInterimServiceResponse {
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

export default class ApplicationInterimsResponse extends BaseResponse<ApplicationInterimResponse> {
    private applicationInterimList: ApplicationInterimResponse[] = [];
    public get applicationInterims(): ApplicationInterimResponse[] {
        return this.applicationInterimList;
    }
    public set applicationInterims(v: ApplicationInterimResponse[]) {
        this.applicationInterimList = v;
        this.currentPageSize = this.applicationInterimList.length;
    }
}
export class ApplicationInterimResponse {
    public employeeNo: string;
    public employeeName: string;
    public identityCardNo: string;
    public applicationDate: DateTime;
    public status: string;
    public remark: string;
}
