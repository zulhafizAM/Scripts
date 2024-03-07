import { roleUser } from '#abilities/main'
import ClinicClinicServices from 'App/Services/Clinic/ClinicClinicServices';
import ClinicDateServices from 'App/Services/Clinic/ClinicDateServices';
import ClinicClinic_accountServices from 'App/Services/Clinic/ClinicClinic_accountServices';
import ClinicProfileServices from 'App/Services/Clinic/ClinicProfileServices';
import ClinicClaimServices from 'App/Services/Clinic/ClinicClaimServices';
import ClinicTreatmentServices from 'App/Services/Clinic/ClinicTreatmentServices';
import ClinicSecretary_approvalServices from 'App/Services/Clinic/ClinicSecretary_approvalServices';
import ClinicSupporter_approverServices from 'App/Services/Clinic/ClinicSupporter_approverServices';
import ClinicApprover_approvalServices from 'App/Services/Clinic/ClinicApprover_approvalServices';
import ClinicSupporter_approvalServices from 'App/Services/Clinic/ClinicSupporter_approvalServices';
import ClinicPatientServices from 'App/Services/Clinic/ClinicPatientServices';
import ClinicTreatmentServices from 'App/Services/Clinic/ClinicTreatmentServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class ClinicsController {
    constructor(
        protected clinicClinicService: ClinicClinicServices,
        protected clinicDateService: ClinicDateServices,
        protected clinicClinic_accountService: ClinicClinic_accountServices,
        protected clinicProfileService: ClinicProfileServices,
        protected clinicClaimService: ClinicClaimServices,
        protected clinicTreatmentService: ClinicTreatmentServices,
        protected clinicSecretary_approvalService: ClinicSecretary_approvalServices,
        protected clinicSupporter_approverService: ClinicSupporter_approverServices,
        protected clinicApprover_approvalService: ClinicApprover_approvalServices,
        protected clinicSupporter_approvalService: ClinicSupporter_approvalServices,
        protected clinicPatientService: ClinicPatientServices,
        protected clinicTreatmentService: ClinicTreatmentServices,
        ) {
    }

    async getClinics({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.clinicClinicService.getClinics(payload)))
    }
    async getClinic({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClinicService.getClinic(payload.id)))
    }
    async addClinic({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicClinicValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClinicService.addClinic(payload, auth.user!)))
    }

    async editClinic({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditClinicClinicValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClinicService.editClinic(payload, auth.user!)))
    }

    async getDate({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicDateService.getDate(payload.id)))
    }
    async addClinic_account({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicClinic_accountValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClinic_accountService.addClinic_account(payload, auth.user!)))
    }

    async getProfile({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicProfileService.getProfile(payload.id)))
    }
    async getClaim({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicClaimService.getClaim(payload.id)))
    }
    async getTreatment({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicTreatmentService.getTreatment(payload.id)))
    }
    async getSecretary_approval({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicSecretary_approvalService.getSecretary_approval(payload.id)))
    }
    async addSecretary_approval({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicSecretary_approvalValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicSecretary_approvalService.addSecretary_approval(payload, auth.user!)))
    }

    async getSupporter_approver({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicSupporter_approverService.getSupporter_approver(payload.id)))
    }
    async addSupporter_approver({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicSupporter_approverValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicSupporter_approverService.addSupporter_approver(payload, auth.user!)))
    }

    async getApprover_approval({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicApprover_approvalService.getApprover_approval(payload.id)))
    }
    async addApprover_approval({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicApprover_approvalValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicApprover_approvalService.addApprover_approval(payload, auth.user!)))
    }

    async getSupporter_approval({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicSupporter_approvalService.getSupporter_approval(payload.id)))
    }
    async addSupporter_approval({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicSupporter_approvalValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicSupporter_approvalService.addSupporter_approval(payload, auth.user!)))
    }

    async getPatient({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicPatientService.getPatient(payload.id)))
    }
    async addPatient({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicPatientValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicPatientService.addPatient(payload, auth.user!)))
    }

    async getTreatment({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicTreatmentService.getTreatment(payload.id)))
    }
    async addTreatment({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicTreatmentValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicTreatmentService.addTreatment(payload, auth.user!)))
    }

}
