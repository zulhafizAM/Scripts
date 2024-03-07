import { roleUser } from '#abilities/main'
import PromotionPromotionServices from 'App/Services/Promotion/PromotionPromotionServices';
import PromotionApplicantServices from 'App/Services/Promotion/PromotionApplicantServices';
import PromotionApplicationServices from 'App/Services/Promotion/PromotionApplicationServices';
import PromotionRelatedRoleServices from 'App/Services/Promotion/PromotionRelatedRoleServices';
import PromotionApplicantQualificationServices from 'App/Services/Promotion/PromotionApplicantQualificationServices';
import PromotionApprovalDetailServices from 'App/Services/Promotion/PromotionApprovalDetailServices';
import PromotionFirstScheduleServices from 'App/Services/Promotion/PromotionFirstScheduleServices';
import PromotionSecondScheduleServices from 'App/Services/Promotion/PromotionSecondScheduleServices';
import PromotionOfferLetterServices from 'App/Services/Promotion/PromotionOfferLetterServices';
import PromotionApproveServices from 'App/Services/Promotion/PromotionApproveServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class PromotionsController {
    constructor(
        protected promotionPromotionService: PromotionPromotionServices,
        protected promotionApplicantService: PromotionApplicantServices,
        protected promotionApplicationService: PromotionApplicationServices,
        protected promotionRelatedRoleService: PromotionRelatedRoleServices,
        protected promotionApplicantQualificationService: PromotionApplicantQualificationServices,
        protected promotionApprovalDetailService: PromotionApprovalDetailServices,
        protected promotionFirstScheduleService: PromotionFirstScheduleServices,
        protected promotionSecondScheduleService: PromotionSecondScheduleServices,
        protected promotionOfferLetterService: PromotionOfferLetterServices,
        protected promotionApproveService: PromotionApproveServices,
        ) {
    }

    async getPromotions({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.promotionPromotionService.getPromotions(payload)))
    }
    async getApplicant({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApplicantService.getApplicant(payload.id)))
    }
    async getApplication({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApplicationService.getApplication(payload.id)))
    }
    async editApplication({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionApplicationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApplicationService.editApplication(payload, auth.user!)))
    }

    async getRelatedRole({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionRelatedRoleService.getRelatedRole(payload.id)))
    }
    async editRelatedRole({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionRelatedRoleValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionRelatedRoleService.editRelatedRole(payload, auth.user!)))
    }

    async getApplicantQualification({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApplicantQualificationService.getApplicantQualification(payload.id)))
    }
    async editApplicantQualification({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionApplicantQualificationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApplicantQualificationService.editApplicantQualification(payload, auth.user!)))
    }

    async getApprovalDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApprovalDetailService.getApprovalDetail(payload.id)))
    }
    async editApprovalDetail({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionApprovalDetailValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApprovalDetailService.editApprovalDetail(payload, auth.user!)))
    }

    async getFirstSchedule({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionFirstScheduleService.getFirstSchedule(payload.id)))
    }
    async editFirstSchedule({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionFirstScheduleValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionFirstScheduleService.editFirstSchedule(payload, auth.user!)))
    }

    async getSecondSchedule({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionSecondScheduleService.getSecondSchedule(payload.id)))
    }
    async editSecondSchedule({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionSecondScheduleValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionSecondScheduleService.editSecondSchedule(payload, auth.user!)))
    }

    async getOfferLetter({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionOfferLetterService.getOfferLetter(payload.id)))
    }
    async editOfferLetter({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionOfferLetterValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionOfferLetterService.editOfferLetter(payload, auth.user!)))
    }

    async getApprove({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApproveService.getApprove(payload.id)))
    }
    async editApprove({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionApproveValidator)
        return response
            .status(200)
            .send(jsend.success(await this.promotionApproveService.editApprove(payload, auth.user!)))
    }

}
