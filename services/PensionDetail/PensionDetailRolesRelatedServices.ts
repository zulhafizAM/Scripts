import db from '@adonisjs/lucid/services/db'
import CommonServices from '#services/shared/common_service'
export default class PensionDetailRolesRelatedServices {
    public async getRolesRelated(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailRolesRelatedResponse>> {
        let rolesRelated = new DefaultDataResponse<PensionDetailRolesRelatedResponse>();
        const readRolesRelated = await RolesRelated.query()
            .where('id', payload.id)
            .firstOrFail();
        rolesRelated = {
            details: {
                id: Number(readRolesRelated.id),
            },
        } as DefaultDataResponse<PensionDetailRolesRelatedResponse>;
        return rolesRelated;
    }
    public async editRolesRelated(
        payload,
    ): Promise<DefaultDataResponse<PensionDetailRolesRelatedResponse>> {
        const transaction = await Database.transaction();
        try {
            let response = new DefaultDataResponse<PensionDetailRolesRelatedResponse>();
            const rolesRelated = await RolesRelated.query()
                .where('id', payload.id)
                .firstOrFail();

            await rolesRelated.save();

            await transaction.commit();
            response = {
                details: {
                    id: Number(rolesRelated.id),
                },
            } as DefaultDataResponse<PensionDetailRolesRelatedResponse>;
            return response;
        } catch (error) {
            await transaction.rollback();
            console.log(error);
            throw error;
        }
    }
}
