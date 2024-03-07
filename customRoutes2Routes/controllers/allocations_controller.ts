import { roleUser } from '#abilities/main'
import AllocationHistoryServices from 'App/Services/Allocation/AllocationHistoryServices';
import AllocationTreatment_detailServices from 'App/Services/Allocation/AllocationTreatment_detailServices';
import AllocationPatient_detailServices from 'App/Services/Allocation/AllocationPatient_detailServices';
import AllocationEmployee_detailServices from 'App/Services/Allocation/AllocationEmployee_detailServices';
import AllocationClaimServices from 'App/Services/Allocation/AllocationClaimServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class AllocationsController {
    constructor(
        protected allocationHistoryService: AllocationHistoryServices,
        protected allocationTreatment_detailService: AllocationTreatment_detailServices,
        protected allocationPatient_detailService: AllocationPatient_detailServices,
        protected allocationEmployee_detailService: AllocationEmployee_detailServices,
        protected allocationClaimService: AllocationClaimServices,
        ) {
    }

    async getHistories({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.allocationHistoryService.getHistories(payload)))
    }
    async getTreatment_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.allocationTreatment_detailService.getTreatment_detail(payload.id)))
    }
    async getPatient_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.allocationPatient_detailService.getPatient_detail(payload.id)))
    }
    async getEmployee_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.allocationEmployee_detailService.getEmployee_detail(payload.id)))
    }
    async getClaims({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.allocationClaimService.getClaims(payload)))
    }
    async getClaim({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.allocationClaimService.getClaim(payload.id)))
    }
    async addClaim({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddAllocationClaimValidator)
        return response
            .status(200)
            .send(jsend.success(await this.allocationClaimService.addClaim(payload, auth.user!)))
    }

}
