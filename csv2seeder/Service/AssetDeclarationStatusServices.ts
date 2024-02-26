import AssetDeclarationStatus from 'App/Models/AssetDeclarationStatus';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class AssetDeclarationStatusServices extends BaseService {
    public async getAssetDeclarationStatuses(): Promise<
        DefaultListResponse<AssetDeclarationStatusesResponse>
    > {
        let assetDeclarationStatusList =
            new DefaultListResponse<AssetDeclarationStatusesResponse>();
        const readAssetDeclarationStatus = await AssetDeclarationStatus.query();

        assetDeclarationStatusList = {
            dataList: readAssetDeclarationStatus.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return assetDeclarationStatusList;
    }
}
