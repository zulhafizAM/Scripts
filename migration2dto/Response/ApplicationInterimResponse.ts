import { DateTime } from 'luxon';

export default class GetApplicationInterimResponse {
    public applicationInterim: ApplicationInterimResponse =
        new ApplicationInterimResponse();
}
export class ApplicationInterimResponse {
    public interimId: bigint;
    public isSkipSeniority: boolean;
    public skippingRemark: string = '';
    public document: Blob;

    public getFull(data) {
        this.interimId = data.interimId;
        this.isSkipSeniority = data.isSkipSeniority;
        this.skippingRemark = data.skippingRemark;
        this.document = data.document;
    }
}