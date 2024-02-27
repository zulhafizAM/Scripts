import { roleUser } from '#abilities/main'
import { inject } from '@adonisjs/core/build/standalone';
import { error, fail, success } from 'App/Models/DTO/Shared/DefaultResponse';import Promotion154Services from 'App/Services/Promotion/Promotion154Services';
import PromotionTbk12Services from 'App/Services/Promotion/PromotionTbk12Services';
import PromotionMainServices from 'App/Services/Promotion/PromotionMainServices';
import PromotionEmployeeListServices from 'App/Services/Promotion/PromotionEmployeeListServices';
import PromotionCertificationServices from 'App/Services/Promotion/PromotionCertificationServices';
import PromotionPlacementMeetingServices from 'App/Services/Promotion/PromotionPlacementMeetingServices';
import PromotionPlacementMeetingDetailServices from 'App/Services/Promotion/PromotionPlacementMeetingDetailServices';
import PromotionPlacementMeetingSalaryAdjustmentServices from 'App/Services/Promotion/PromotionPlacementMeetingSalaryAdjustmentServices';
import PromotionEmployeePromotionServices from 'App/Services/Promotion/PromotionEmployeePromotionServices';
import PromotionDirectorCertifyServices from 'App/Services/Promotion/PromotionDirectorCertifyServices';
import PromotionApproveServices from 'App/Services/Promotion/PromotionApproveServices';
import PromotionSupportServices from 'App/Services/Promotion/PromotionSupportServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class PromotionsController {
    constructor(
        protected promotion154Service: Promotion154Services,
        protected promotionTbk12Service: PromotionTbk12Services,
        protected promotionMainService: PromotionMainServices,
        protected promotionEmployeeListService: PromotionEmployeeListServices,
        protected promotionCertificationService: PromotionCertificationServices,
        protected promotionPlacementMeetingService: PromotionPlacementMeetingServices,
        protected promotionPlacementMeetingDetailService: PromotionPlacementMeetingDetailServices,
        protected promotionPlacementMeetingSalaryAdjustmentService: PromotionPlacementMeetingSalaryAdjustmentServices,
        protected promotionEmployeePromotionService: PromotionEmployeePromotionServices,
        protected promotionDirectorCertifyService: PromotionDirectorCertifyServices,
        protected promotionApproveService: PromotionApproveServices,
        protected promotionSupportService: PromotionSupportServices,
        ) {
    }

    async get154s({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotion154Service.get154s(payload)))
    }
    async getTbk12s({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionTbk12Service.getTbk12s(payload)))
    }
    async getMains({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionMainService.getMains(payload)))
    }
    async getEmployeeLists({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionEmployeeListService.getEmployeeLists(payload)))
    }
    async getCertifications({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionCertificationService.getCertifications(payload)))
    }
    async getCertification({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionCertificationService.getCertification(payload.id)))
    }
    async editCertification({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionCertificationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionCertificationService.editCertification(payload, auth.user!)))
    }

    async getPlacementMeetings({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionPlacementMeetingService.getPlacementMeetings(payload)))
    }
    async getPlacementMeetingDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionPlacementMeetingDetailService.getPlacementMeetingDetail(payload.id)))
    }
    async editPlacementMeetingDetail({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionPlacementMeetingDetailValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionPlacementMeetingDetailService.editPlacementMeetingDetail(payload, auth.user!)))
    }

    async getPlacementMeetingSalaryAdjustments({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionPlacementMeetingSalaryAdjustmentService.getPlacementMeetingSalaryAdjustments(payload)))
    }
    async getPlacementMeetingSalaryAdjustment({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionPlacementMeetingSalaryAdjustmentService.getPlacementMeetingSalaryAdjustment(payload.id)))
    }
    async getEmployeePromotions({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionEmployeePromotionService.getEmployeePromotions(payload)))
    }
    async getEmployeePromotion({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionEmployeePromotionService.getEmployeePromotion(payload.id)))
    }
    async editEmployeePromotion({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionEmployeePromotionValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionEmployeePromotionService.editEmployeePromotion(payload, auth.user!)))
    }

    async getDirectorCertify({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionDirectorCertifyService.getDirectorCertify(payload.id)))
    }
    async editDirectorCertify({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionDirectorCertifyValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionDirectorCertifyService.editDirectorCertify(payload, auth.user!)))
    }

    async editApprove({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionApproveValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApproveService.editApprove(payload, auth.user!)))
    }

    async editSupport({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionSupportValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionSupportService.editSupport(payload, auth.user!)))
    }

}
