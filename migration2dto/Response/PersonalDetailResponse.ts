import { DateTime } from 'luxon';

export default class GetPersonalDetailResponse {
    public personalDetail: PersonalDetailResponse =
        new PersonalDetailResponse();
}
export class PersonalDetailResponse {
    public name: string = '';
    public birthStateId: bigint;
    public raceId: bigint;
    public religionId: bigint;
    public mailStateId: bigint;
    public homeStateId: bigint;
    public alternativeName: string = '';
    public isMalaysian: boolean;
    public identityDocumentType: string = '';
    public identityDocumentNumber: string = '';
    public email: string = '';
    public marital: string = '';
    public gender: string = '';
    public bankName: string = '';
    public bankAccount: string = '';
    public phoneNumber: string = '';
    public homeNumber: string = '';
    public birthDate: DateTime;
    public birthplace: string = '';
    public isExPoliceOrSoldier: boolean;
    public homeAddress: string = '';
    public homePoscode: string = '';
    public homeCity: string = '';
    public mailAddress: string = '';
    public mailPoscode: string = '';
    public mailCity: string = '';

    public getFull(data) {
        this.name = data.name;
        this.birthStateId = data.birthStateId;
        this.raceId = data.raceId;
        this.religionId = data.religionId;
        this.mailStateId = data.mailStateId;
        this.homeStateId = data.homeStateId;
        this.alternativeName = data.alternativeName;
        this.isMalaysian = data.isMalaysian;
        this.identityDocumentType = data.identityDocumentType;
        this.identityDocumentNumber = data.identityDocumentNumber;
        this.email = data.email;
        this.marital = data.marital;
        this.gender = data.gender;
        this.bankName = data.bankName;
        this.bankAccount = data.bankAccount;
        this.phoneNumber = data.phoneNumber;
        this.homeNumber = data.homeNumber;
        this.birthDate = data.birthDate;
        this.birthplace = data.birthplace;
        this.isExPoliceOrSoldier = data.isExPoliceOrSoldier;
        this.homeAddress = data.homeAddress;
        this.homePoscode = data.homePoscode;
        this.homeCity = data.homeCity;
        this.mailAddress = data.mailAddress;
        this.mailPoscode = data.mailPoscode;
        this.mailCity = data.mailCity;
    }
}