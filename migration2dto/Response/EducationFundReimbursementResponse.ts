import { DateTime } from 'luxon';

export default class GetEducationFundReimbursementResponse {
    public educationFundReimbursement: EducationFundReimbursementResponse =
        new EducationFundReimbursementResponse();
}
export class EducationFundReimbursementResponse {
    public employeeId: bigint;
    public academicLevel: string = '';
    public courseName: string = '';
    public institution: string = '';
    public learningInstitution: string = '';
    public studyDuration: number;
    public entryDateToInstituition: DateTime;
    public educationType: string = '';
    public applicationType: string = '';
    public status: string = '';
    public document: Blob;

    public getFull(data) {
        this.employeeId = data.employeeId;
        this.academicLevel = data.academicLevel;
        this.courseName = data.courseName;
        this.institution = data.institution;
        this.learningInstitution = data.learningInstitution;
        this.studyDuration = data.studyDuration;
        this.entryDateToInstituition = data.entryDateToInstituition;
        this.educationType = data.educationType;
        this.applicationType = data.applicationType;
        this.status = data.status;
        this.document = data.document;
    }
}