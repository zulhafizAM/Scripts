import { DateTime } from 'luxon';

export default class GetMedicalHistoryResponse {
    public medicalHistory: MedicalHistoryResponse =
        new MedicalHistoryResponse();
}
export class MedicalHistoryResponse {
    public personalDetailId: bigint;
    public diseases: string = '';
    public isPersonal: boolean;
    public isFamily: boolean;
    public remark: string = '';

    public getFull(data) {
        this.personalDetailId = data.personalDetailId;
        this.diseases = data.diseases;
        this.isPersonal = data.isPersonal;
        this.isFamily = data.isFamily;
        this.remark = data.remark;
    }
}