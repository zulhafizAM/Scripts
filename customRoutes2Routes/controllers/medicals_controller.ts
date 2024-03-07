import { roleUser } from '#abilities/main'
import MedicalPaymentServices from 'App/Services/Medical/MedicalPaymentServices';
import MedicalAnnual_allocationServices from 'App/Services/Medical/MedicalAnnual_allocationServices';
import MedicalAnnual_employee_claimServices from 'App/Services/Medical/MedicalAnnual_employee_claimServices';
import MedicalClinic_allocationServices from 'App/Services/Medical/MedicalClinic_allocationServices';
import MedicalEmployee_allocationServices from 'App/Services/Medical/MedicalEmployee_allocationServices';
import MedicalMedical_claimServices from 'App/Services/Medical/MedicalMedical_claimServices';
import MedicalPatientServices from 'App/Services/Medical/MedicalPatientServices';
import MedicalTreatmentServices from 'App/Services/Medical/MedicalTreatmentServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class MedicalsController {
    constructor(
        protected medicalPaymentService: MedicalPaymentServices,
        protected medicalAnnual_allocationService: MedicalAnnual_allocationServices,
        protected medicalAnnual_employee_claimService: MedicalAnnual_employee_claimServices,
        protected medicalClinic_allocationService: MedicalClinic_allocationServices,
        protected medicalEmployee_allocationService: MedicalEmployee_allocationServices,
        protected medicalMedical_claimService: MedicalMedical_claimServices,
        protected medicalPatientService: MedicalPatientServices,
        protected medicalTreatmentService: MedicalTreatmentServices,
        ) {
    }

    async getPayments({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalPaymentService.getPayments(payload)))
    }
    async getPayment({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.medicalPaymentService.getPayment(payload.id)))
    }
    async addPayment({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddMedicalPaymentValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalPaymentService.addPayment(payload, auth.user!)))
    }

    async getAnnual_allocations({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalAnnual_allocationService.getAnnual_allocations(payload)))
    }
    async getAnnual_employee_claims({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalAnnual_employee_claimService.getAnnual_employee_claims(payload)))
    }
    async getClinic_allocations({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalClinic_allocationService.getClinic_allocations(payload)))
    }
    async getClinic_allocation({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.medicalClinic_allocationService.getClinic_allocation(payload.id)))
    }
    async addClinic_allocation({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddMedicalClinic_allocationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalClinic_allocationService.addClinic_allocation(payload, auth.user!)))
    }

    async getEmployee_allocations({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalEmployee_allocationService.getEmployee_allocations(payload)))
    }
    async addEmployee_allocation({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddMedicalEmployee_allocationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalEmployee_allocationService.addEmployee_allocation(payload, auth.user!)))
    }

    async editEmployee_allocation({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMedicalEmployee_allocationValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalEmployee_allocationService.editEmployee_allocation(payload, auth.user!)))
    }

    async getMedical_claims({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalMedical_claimService.getMedical_claims(payload)))
    }
    async getMedical_claim({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.medicalMedical_claimService.getMedical_claim(payload.id)))
    }
    async addMedical_claim({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddMedicalMedical_claimValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalMedical_claimService.addMedical_claim(payload, auth.user!)))
    }

    async editMedical_claim({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMedicalMedical_claimValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalMedical_claimService.editMedical_claim(payload, auth.user!)))
    }

    async getPatients({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalPatientService.getPatients(payload)))
    }
    async getPatient({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.medicalPatientService.getPatient(payload.id)))
    }
    async addPatient({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddMedicalPatientValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalPatientService.addPatient(payload, auth.user!)))
    }

    async editPatient({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMedicalPatientValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalPatientService.editPatient(payload, auth.user!)))
    }

    async getTreatments({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.medicalTreatmentService.getTreatments(payload)))
    }
    async getTreatment({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.medicalTreatmentService.getTreatment(payload.id)))
    }
    async addTreatment({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddMedicalTreatmentValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalTreatmentService.addTreatment(payload, auth.user!)))
    }

    async editTreatment({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(EditMedicalTreatmentValidator)
        return response
            .status(200)
            .send(jsend.success(await this.medicalTreatmentService.editTreatment(payload, auth.user!)))
    }

}
