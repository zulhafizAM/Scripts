import Relationship from 'App/Models/Relationship';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class RelationshipServices extends BaseService {
    public async getRelationships(): Promise<
        DefaultListResponse<RelationshipsResponse>
    > {
        let relationshipList =
            new DefaultListResponse<RelationshipsResponse>();
        const readRelationship = await Relationship.query();

        relationshipList = {
            dataList: readRelationship.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return relationshipList;
    }
}
