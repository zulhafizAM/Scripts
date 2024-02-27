import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PromotionCertificationServices {
    public async getCertifications(
        payload,
    ): Promise<DefaultListResponse<PromotionCertificationsResponse>> {
        let certifications = new DefaultListResponse<PromotionCertificationsResponse>();
        const certificationList = await Certification.query()
        certifications = {
            meta: {
                pageNum: payload.pageNum,
                totalData: certificationList.length,
                totalPage: Math.ceil(certificationList.length / payload.pageSize),
                pageSize: 0,
            },
            dataList: certificationList.map((result) => ({
                id: Number(result.id),            })),
        } as DefaultListResponse<PromotionCertificationsResponse>;

        if (payload.orderBy !== null && payload.orderBy !== '') {
            this.ordering(payload, certifications, 'dataList');
        }

        certifications.dataList = certifications.dataList.slice(
            (payload.pageNum - 1) * payload.pageSize,
            payload.pageNum * payload.pageSize,
        );
        certifications.meta!.pageSize = certifications.dataList.length;
        return certifications;
    }
    public async getCertification(
        payload,
    ): Promise<DefaultDataResponse<PromotionCertificationResponse>> {
        let certification = new DefaultDataResponse<PromotionCertificationResponse>();
        const readCertification = await Certification.query()
            .where('id', payload.id)
            .firstOrFail();
        certification = {
            details: {
                id: Number(readCertification.id),
            },
        } as DefaultDataResponse<PromotionCertificationResponse>;
        return certification;
    }
    public async editCertification(
        payload,
    ): Promise<DefaultDataResponse<PromotionCertificationResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PromotionCertificationResponse>();
            const certification = await Certification.query()
                .where('id', payload.id)
                .firstOrFail();

            await certification.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(certification.id),
                },
            } as DefaultDataResponse<PromotionCertificationResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
