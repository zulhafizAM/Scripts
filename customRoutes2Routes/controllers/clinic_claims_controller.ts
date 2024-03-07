import { roleUser } from '#abilities/main'
import ClinicClaimClinicClaimServices from 'App/Services/ClinicClaim/ClinicClaimClinicClaimServices';
import ClinicClaimAllocationServices from 'App/Services/ClinicClaim/ClinicClaimAllocationServices';
import ClinicClaimClinic_detailServices from 'App/Services/ClinicClaim/ClinicClaimClinic_detailServices';
import ClinicClaimApprovalServices from 'App/Services/ClinicClaim/ClinicClaimApprovalServices';
import ClinicClaimCalculationServices from 'App/Services/ClinicClaim/ClinicClaimCalculationServices';
import ClinicClaimClaim_detailServices from 'App/Services/ClinicClaim/ClinicClaimClaim_detailServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class ClinicClaimsController {
    constructor(
        protected clinicClaimClinicClaimService: ClinicClaimClinicClaimServices,
        protected clinicClaimAllocationService: ClinicClaimAllocationServices,
        protected clinicClaimClinic_detailService: ClinicClaimClinic_detailServices,
        protected clinicClaimApprovalService: ClinicClaimApprovalServices,
        protected clinicClaimCalculationService: ClinicClaimCalculationServices,
        protected clinicClaimClaim_detailService: ClinicClaimClaim_detailServices,
        ) {
    }

    async getClinicClaims({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.clinicClaimClinicClaimService.getClinicClaims(payload)))
    }
    async getClinicClaim({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimClinicClaimService.getClinicClaim(payload.id)))
    }
    async addClinicClaim({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicClaimClinicClaimValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimClinicClaimService.addClinicClaim(payload, auth.user!)))
    }

    async getAllocation({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimAllocationService.getAllocation(payload.id)))
    }
    async getClinic_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimClinic_detailService.getClinic_detail(payload.id)))
    }
    async addApproval({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicClaimApprovalValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimApprovalService.addApproval(payload, auth.user!)))
    }

    async getCalculation({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimCalculationService.getCalculation(payload.id)))
    }
    async getClaim_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimClaim_detailService.getClaim_detail(payload.id)))
    }
    async editClaim_detail({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditClinicClaimClaim_detailValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimClaim_detailService.editClaim_detail(payload, auth.user!)))
    }

}
