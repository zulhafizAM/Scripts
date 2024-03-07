import { roleUser } from '#abilities/main'
import MovingInMovingInServices from 'App/Services/MovingIn/MovingInMovingInServices';
import MovingInApplicantTypeServices from 'App/Services/MovingIn/MovingInApplicantTypeServices';
import MovingInPersonalDetailServices from 'App/Services/MovingIn/MovingInPersonalDetailServices';
import MovingInPartnerDetailServices from 'App/Services/MovingIn/MovingInPartnerDetailServices';
import MovingInServiceDetailServices from 'App/Services/MovingIn/MovingInServiceDetailServices';
import MovingInConfirmationServices from 'App/Services/MovingIn/MovingInConfirmationServices';
import MovingInSecretaryApprovalServices from 'App/Services/MovingIn/MovingInSecretaryApprovalServices';
import MovingInQualificationServices from 'App/Services/MovingIn/MovingInQualificationServices';
import MovingInOfferServices from 'App/Services/MovingIn/MovingInOfferServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class MovingInsController {
    constructor(
        protected movingInMovingInService: MovingInMovingInServices,
        protected movingInApplicantTypeService: MovingInApplicantTypeServices,
        protected movingInPersonalDetailService: MovingInPersonalDetailServices,
        protected movingInPartnerDetailService: MovingInPartnerDetailServices,
        protected movingInServiceDetailService: MovingInServiceDetailServices,
        protected movingInConfirmationService: MovingInConfirmationServices,
        protected movingInSecretaryApprovalService: MovingInSecretaryApprovalServices,
        protected movingInQualificationService: MovingInQualificationServices,
        protected movingInOfferService: MovingInOfferServices,
        ) {
    }

    async getMovingIns({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.movingInMovingInService.getMovingIns(payload)))
    }
    async getApplicantType({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInApplicantTypeService.getApplicantType(payload.id)))
    }
    async editApplicantType({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMovingInApplicantTypeValidator)
        return response
            .status(200)
            .send(jsend.success(await this.movingInApplicantTypeService.editApplicantType(payload, auth.user!)))
    }

    async getPersonalDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInPersonalDetailService.getPersonalDetail(payload.id)))
    }
    async getPartnerDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInPartnerDetailService.getPartnerDetail(payload.id)))
    }
    async getServiceDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInServiceDetailService.getServiceDetail(payload.id)))
    }
    async getConfirmation({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInConfirmationService.getConfirmation(payload.id)))
    }
    async editConfirmation({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMovingInConfirmationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.movingInConfirmationService.editConfirmation(payload, auth.user!)))
    }

    async getSecretaryApproval({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInSecretaryApprovalService.getSecretaryApproval(payload.id)))
    }
    async editSecretaryApproval({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMovingInSecretaryApprovalValidator)
        return response
            .status(200)
            .send(jsend.success(await this.movingInSecretaryApprovalService.editSecretaryApproval(payload, auth.user!)))
    }

    async getQualification({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInQualificationService.getQualification(payload.id)))
    }
    async getOffer({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.movingInOfferService.getOffer(payload.id)))
    }
    async editOffer({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMovingInOfferValidator)
        return response
            .status(200)
            .send(jsend.success(await this.movingInOfferService.editOffer(payload, auth.user!)))
    }

}
