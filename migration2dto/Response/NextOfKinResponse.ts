import { DateTime } from 'luxon';

export default class GetNextOfKinResponse {
    public nextOfKin: NextOfKinResponse =
        new NextOfKinResponse();
}
export class NextOfKinResponse {
    public name: string = '';
    public personalDetailId: bigint;
    public stateId: bigint;
    public alternativeName: string = '';
    public isMalaysian: boolean;
    public identityDocumentType: string = '';
    public identityDocumentNumber: string = '';
    public relationship: string = '';
    public gender: string = '';
    public phoneNumber: string = '';
    public marriageDate: DateTime;
    public inSchool: boolean;
    public homeNumber: string = '';
    public isLKIMStaff: boolean;
    public position: string = '';
    public taxNumber: string = '';
    public occupation: string = '';
    public company: string = '';
    public companyAddress: string = '';
    public address: string = '';

    public getFull(data) {
        this.name = data.name;
        this.personalDetailId = data.personalDetailId;
        this.stateId = data.stateId;
        this.alternativeName = data.alternativeName;
        this.isMalaysian = data.isMalaysian;
        this.identityDocumentType = data.identityDocumentType;
        this.identityDocumentNumber = data.identityDocumentNumber;
        this.relationship = data.relationship;
        this.gender = data.gender;
        this.phoneNumber = data.phoneNumber;
        this.marriageDate = data.marriageDate;
        this.inSchool = data.inSchool;
        this.homeNumber = data.homeNumber;
        this.isLKIMStaff = data.isLKIMStaff;
        this.position = data.position;
        this.taxNumber = data.taxNumber;
        this.occupation = data.occupation;
        this.company = data.company;
        this.companyAddress = data.companyAddress;
        this.address = data.address;
    }
}