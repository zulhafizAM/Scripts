import { DateTime } from 'luxon';

export default class GetClothingAssistanceResponse {
    public clothingAssistance: ClothingAssistanceResponse =
        new ClothingAssistanceResponse();
}
export class ClothingAssistanceResponse {
    public reason: string = '';
    public totalPersonalClaim: number;
    public totalPartnerClaim: number;
    public document: Blob;

    public getFull(data) {
        this.reason = data.reason;
        this.totalPersonalClaim = data.totalPersonalClaim;
        this.totalPartnerClaim = data.totalPartnerClaim;
        this.document = data.document;
    }
}