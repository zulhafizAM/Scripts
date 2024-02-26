import { DateTime } from 'luxon';

export default class NewHirePersonalDetailResponse {
    public id: bigint;
    public identityDocumentNumber: string;
    public name: string;
    public alternativeName: string;
    public identityDocumentColor: string;
    public birthDate: DateTime;
    public birthPlace: string;
    public isMalaysia: boolean;
    public raceId: bigint;
    public religionId: bigint;
    public gender: string;
    public marital: string;
    public email: string;
    public homeAddress: string;
    public mailAddress: string;
    public isExPoliceOrSoldier: boolean;
    public isInternalRelationship: boolean;
    public employeeNumber: string;
    public employeeName: string;
    public employeePosition: string;
    public relationship: string;
    public isReadonly: boolean;
}
