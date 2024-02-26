import { roleUser } from '#abilities/main'
import { inject } from '@adonisjs/core/build/standalone';
import { error, fail, success } from 'App/Models/DTO/Shared/DefaultResponse';import Acting154Services from 'App/Services/Acting/Acting154Services';
import ActingFlexi41Services from 'App/Services/Acting/ActingFlexi41Services';
import ActingMainServices from 'App/Services/Acting/ActingMainServices';
import ActingEmployeeListServices from 'App/Services/Acting/ActingEmployeeListServices';
import ActingChosenEmployeeListServices from 'App/Services/Acting/ActingChosenEmployeeListServices';
import ActingCandidateSelectionMeetingServices from 'App/Services/Acting/ActingCandidateSelectionMeetingServices';
import ActingInterviewInfoServices from 'App/Services/Acting/ActingInterviewInfoServices';
import ActingInterviewResultServices from 'App/Services/Acting/ActingInterviewResultServices';
import ActingInterviewResultMarkServices from 'App/Services/Acting/ActingInterviewResultMarkServices';
import ActingPromotionMeetingResultServices from 'App/Services/Acting/ActingPromotionMeetingResultServices';
import ActingPromotionMeetingResultDetailServices from 'App/Services/Acting/ActingPromotionMeetingResultDetailServices';
import ActingPromotionMeetingPlacementServices from 'App/Services/Acting/ActingPromotionMeetingPlacementServices';
import ActingPromotionMeetingPlacementDetailServices from 'App/Services/Acting/ActingPromotionMeetingPlacementDetailServices';
import ActingEmployeeServices from 'App/Services/Acting/ActingEmployeeServices';
import ActingPostponeServices from 'App/Services/Acting/ActingPostponeServices';
import ActingPostponeResultServices from 'App/Services/Acting/ActingPostponeResultServices';
import ActingActingResultServices from 'App/Services/Acting/ActingActingResultServices';
import ActingActingConfirmationServices from 'App/Services/Acting/ActingActingConfirmationServices';
import ActingDirectorCertifyServices from 'App/Services/Acting/ActingDirectorCertifyServices';
import ActingApproveServices from 'App/Services/Acting/ActingApproveServices';
import ActingSupportServices from 'App/Services/Acting/ActingSupportServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class ActingsController {
    constructor(
        protected acting154Service: Acting154Services,
        protected actingFlexi41Service: ActingFlexi41Services,
        protected actingMainService: ActingMainServices,
        protected actingEmployeeListService: ActingEmployeeListServices,
        protected actingChosenEmployeeListService: ActingChosenEmployeeListServices,
        protected actingCandidateSelectionMeetingService: ActingCandidateSelectionMeetingServices,
        protected actingInterviewInfoService: ActingInterviewInfoServices,
        protected actingInterviewResultService: ActingInterviewResultServices,
        protected actingInterviewResultMarkService: ActingInterviewResultMarkServices,
        protected actingPromotionMeetingResultService: ActingPromotionMeetingResultServices,
        protected actingPromotionMeetingResultDetailService: ActingPromotionMeetingResultDetailServices,
        protected actingPromotionMeetingPlacementService: ActingPromotionMeetingPlacementServices,
        protected actingPromotionMeetingPlacementDetailService: ActingPromotionMeetingPlacementDetailServices,
        protected actingEmployeeService: ActingEmployeeServices,
        protected actingPostponeService: ActingPostponeServices,
        protected actingPostponeResultService: ActingPostponeResultServices,
        protected actingActingResultService: ActingActingResultServices,
        protected actingActingConfirmationService: ActingActingConfirmationServices,
        protected actingDirectorCertifyService: ActingDirectorCertifyServices,
        protected actingApproveService: ActingApproveServices,
        protected actingSupportService: ActingSupportServices,
        ) {
    }

    async get154s({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.acting154Service.get154s(payload)))
    }
    async getFlexi41s({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingFlexi41Service.getFlexi41s(payload)))
    }
    async getMains({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingMainService.getMains(payload)))
    }
    async getEmployeeLists({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingEmployeeListService.getEmployeeLists(payload)))
    }
    async getChosenEmployeeLists({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingChosenEmployeeListService.getChosenEmployeeLists(payload)))
    }
    async addChosenEmployeeList({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddActingChosenEmployeeListValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.addChosenEmployeeList(payload, auth.user!)))
    }

    async editCandidateSelectionMeeting({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditCandidateSelectionMeetingCandidateSelectionMeetingValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editCandidateSelectionMeeting(payload, auth.user!)))
    }

    async getInterviewInfos({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingInterviewInfoService.getInterviewInfos(payload)))
    }
    async editInterviewInfo({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditInterviewInfoInterviewInfoValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editInterviewInfo(payload, auth.user!)))
    }

    async getInterviewResults({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingInterviewResultService.getInterviewResults(payload)))
    }
    async getInterviewResultMarks({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingInterviewResultMarkService.getInterviewResultMarks(payload)))
    }
    async editInterviewResultMark({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditInterviewResultMarkInterviewResultMarkValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editInterviewResultMark(payload, auth.user!)))
    }

    async getPromotionMeetingResults({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingPromotionMeetingResultService.getPromotionMeetingResults(payload)))
    }
    async addPromotionMeetingResult({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddActingPromotionMeetingResultValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.addPromotionMeetingResult(payload, auth.user!)))
    }

    async editPromotionMeetingResult({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionMeetingResultPromotionMeetingResultValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editPromotionMeetingResult(payload, auth.user!)))
    }

    async getPromotionMeetingResultDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.actingPromotionMeetingResultDetailService.PromotionMeetingResultDetail(payload.id)))
    }
    async editPromotionMeetingResultDetail({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionMeetingResultDetailPromotionMeetingResultDetailValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editPromotionMeetingResultDetail(payload, auth.user!)))
    }

    async addPromotionMeetingPlacement({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddActingPromotionMeetingPlacementValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.addPromotionMeetingPlacement(payload, auth.user!)))
    }

    async editPromotionMeetingPlacement({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionMeetingPlacementPromotionMeetingPlacementValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editPromotionMeetingPlacement(payload, auth.user!)))
    }

    async editPromotionMeetingPlacementDetail({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPromotionMeetingPlacementDetailPromotionMeetingPlacementDetailValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editPromotionMeetingPlacementDetail(payload, auth.user!)))
    }

    async getEmployee({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.actingEmployeeService.Employee(payload.id)))
    }
    async getPostpones({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingPostponeService.getPostpones(payload)))
    }
    async getPostpone({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.actingPostponeService.Postpone(payload.id)))
    }
    async editPostpone({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditPostponePostponeValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editPostpone(payload, auth.user!)))
    }

    async getPostponeResults({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingPostponeResultService.getPostponeResults(payload)))
    }
    async editActingResult({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditActingResultActingResultValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editActingResult(payload, auth.user!)))
    }

    async getActingConfirmations({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.actingActingConfirmationService.getActingConfirmations(payload)))
    }
    async getActingConfirmation({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.actingActingConfirmationService.ActingConfirmation(payload.id)))
    }
    async getDirectorCertify({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.actingDirectorCertifyService.DirectorCertify(payload.id)))
    }
    async editDirectorCertify({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditDirectorCertifyDirectorCertifyValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editDirectorCertify(payload, auth.user!)))
    }

    async editApprove({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditApproveApproveValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editApprove(payload, auth.user!)))
    }

    async editSupport({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditSupportSupportValidator)
        return response
            .status(200)
            .send(jsend.success(await this.service.editSupport(payload, auth.user!)))
    }

}
