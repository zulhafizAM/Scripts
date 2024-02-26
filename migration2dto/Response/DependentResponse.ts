import { DateTime } from 'luxon';

export default class GetDependentResponse {
    public dependent: DependentResponse =
        new DependentResponse();
}
export class DependentResponse {
    public name: string = '';
    public personalDetailId: bigint;
    public alternativeName: string = '';
    public isMalaysian: boolean;
    public identityDocumentType: string = '';
    public identityDocumentNumber: string = '';
    public relationship: string = '';
    public gender: string = '';
    public marriageDate: DateTime;
    public inSchool: boolean;

    public getFull(data) {
        this.name = data.name;
        this.personalDetailId = data.personalDetailId;
        this.alternativeName = data.alternativeName;
        this.isMalaysian = data.isMalaysian;
        this.identityDocumentType = data.identityDocumentType;
        this.identityDocumentNumber = data.identityDocumentNumber;
        this.relationship = data.relationship;
        this.gender = data.gender;
        this.marriageDate = data.marriageDate;
        this.inSchool = data.inSchool;
    }
}