import { DateTime } from 'luxon';

export default class GetInternalRelationshipResponse {
    public internalRelationship: InternalRelationshipResponse =
        new InternalRelationshipResponse();
}
export class InternalRelationshipResponse {
    public personalDetailId: bigint;
    public employeeId: bigint;
    public relationship: string = '';

    public getFull(data) {
        this.personalDetailId = data.personalDetailId;
        this.employeeId = data.employeeId;
        this.relationship = data.relationship;
    }
}