import Sponsorship from 'App/Models/Sponsorship';
import BaseService from 'App/Services/Shared/BaseService';
import DefaultListResponse from 'App/Models/DTO/Shared/DefaultListResponse';
export default class SponsorshipServices extends BaseService {
    public async getSponsorships(): Promise<
        DefaultListResponse<SponsorshipsResponse>
    > {
        let sponsorshipList =
            new DefaultListResponse<SponsorshipsResponse>();
        const readSponsorship = await Sponsorship.query();

        sponsorshipList = {
            dataList: readSponsorship.map((result) => ({
                id: Number(result.id),
                code: result.code,
                description: result.description,
            })),
        };

        return sponsorshipList;
    }
}
