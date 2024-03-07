import { roleUser } from '#abilities/main'
import LoanLoanServices from 'App/Services/Loan/LoanLoanServices';
import LoanApplicantServices from 'App/Services/Loan/LoanApplicantServices';
import LoanApplicationServices from 'App/Services/Loan/LoanApplicationServices';
import LoanRelatedRoleServices from 'App/Services/Loan/LoanRelatedRoleServices';
import LoanApplicantQualificationServices from 'App/Services/Loan/LoanApplicantQualificationServices';
import LoanApprovalDetailServices from 'App/Services/Loan/LoanApprovalDetailServices';
import LoanFirstScheduleServices from 'App/Services/Loan/LoanFirstScheduleServices';
import LoanSecondScheduleServices from 'App/Services/Loan/LoanSecondScheduleServices';
import LoanOfferLetterServices from 'App/Services/Loan/LoanOfferLetterServices';
import LoanApproveServices from 'App/Services/Loan/LoanApproveServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class LoansController {
    constructor(
        protected loanLoanService: LoanLoanServices,
        protected loanApplicantService: LoanApplicantServices,
        protected loanApplicationService: LoanApplicationServices,
        protected loanRelatedRoleService: LoanRelatedRoleServices,
        protected loanApplicantQualificationService: LoanApplicantQualificationServices,
        protected loanApprovalDetailService: LoanApprovalDetailServices,
        protected loanFirstScheduleService: LoanFirstScheduleServices,
        protected loanSecondScheduleService: LoanSecondScheduleServices,
        protected loanOfferLetterService: LoanOfferLetterServices,
        protected loanApproveService: LoanApproveServices,
        ) {
    }

    async getLoans({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.loanLoanService.getLoans(payload)))
    }
    async getApplicant({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanApplicantService.getApplicant(payload.id)))
    }
    async getApplication({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanApplicationService.getApplication(payload.id)))
    }
    async editApplication({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanApplicationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanApplicationService.editApplication(payload, auth.user!)))
    }

    async getRelatedRole({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanRelatedRoleService.getRelatedRole(payload.id)))
    }
    async editRelatedRole({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanRelatedRoleValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanRelatedRoleService.editRelatedRole(payload, auth.user!)))
    }

    async getApplicantQualification({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanApplicantQualificationService.getApplicantQualification(payload.id)))
    }
    async editApplicantQualification({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanApplicantQualificationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanApplicantQualificationService.editApplicantQualification(payload, auth.user!)))
    }

    async getApprovalDetail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanApprovalDetailService.getApprovalDetail(payload.id)))
    }
    async editApprovalDetail({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanApprovalDetailValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanApprovalDetailService.editApprovalDetail(payload, auth.user!)))
    }

    async getFirstSchedule({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanFirstScheduleService.getFirstSchedule(payload.id)))
    }
    async editFirstSchedule({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanFirstScheduleValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanFirstScheduleService.editFirstSchedule(payload, auth.user!)))
    }

    async getSecondSchedule({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanSecondScheduleService.getSecondSchedule(payload.id)))
    }
    async editSecondSchedule({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanSecondScheduleValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanSecondScheduleService.editSecondSchedule(payload, auth.user!)))
    }

    async getOfferLetter({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanOfferLetterService.getOfferLetter(payload.id)))
    }
    async editOfferLetter({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanOfferLetterValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanOfferLetterService.editOfferLetter(payload, auth.user!)))
    }

    async getApprove({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.loanApproveService.getApprove(payload.id)))
    }
    async editApprove({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditLoanApproveValidator)
        return response
            .status(200)
            .send(jsend.success(await this.loanApproveService.editApprove(payload, auth.user!)))
    }

}
