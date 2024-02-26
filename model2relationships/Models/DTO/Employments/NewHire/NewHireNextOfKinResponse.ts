import { DateTime } from 'luxon';

export default class NewHireNextOfKinResponse {
    public name: string;
    public identityDocumentNumber: string;
    public birthDate: DateTime;
    public relationship: string;
    public marriageDate: DateTime;
    public identityDocumentType: string;
    public homeNumber: string;
    public mobileNumber: string;
    public position: string;
    public company: string;
    public companyAddress: string;
    public isReadonly: boolean;
}
