import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';
import MedicalEmployeeAllocationServices from 'App/Services/Medical/MedicalEmployeeAllocationServices';
import MedicalClinicAllocationServices from 'App/Services/Medical/MedicalClinicAllocationServices';
import MedicalMedicalClaimServices from 'App/Services/Medical/MedicalMedicalClaimServices';
import MedicalPatientServices from 'App/Services/Medical/MedicalPatientServices';
import MedicalTreatmentServices from 'App/Services/Medical/MedicalTreatmentServices';
import GetByIdSchema from 'App/Validators/Shared/GetByIdValidator';
import ListMedicalEmployeeAllocationSchema from 'App/Validators/Medical/EmployeeAllocation/ListMedicalEmployeeAllocationSchema';
import AddMedicalEmployeeAllocationSchema from 'App/Validators/Medical/EmployeeAllocation/AddMedicalEmployeeAllocationSchema';
import EditMedicalEmployeeAllocationSchema from 'App/Validators/Medical/EmployeeAllocation/EditMedicalEmployeeAllocationSchema';
import ListMedicalClinicAllocationSchema from 'App/Validators/Medical/ClinicAllocation/ListMedicalClinicAllocationSchema';
import AddMedicalClinicAllocationSchema from 'App/Validators/Medical/ClinicAllocation/AddMedicalClinicAllocationSchema';
import EditMedicalClinicAllocationSchema from 'App/Validators/Medical/ClinicAllocation/EditMedicalClinicAllocationSchema';
import ListMedicalMedicalClaimSchema from 'App/Validators/Medical/MedicalClaim/ListMedicalMedicalClaimSchema';
import AddMedicalMedicalClaimSchema from 'App/Validators/Medical/MedicalClaim/AddMedicalMedicalClaimSchema';
import EditMedicalMedicalClaimSchema from 'App/Validators/Medical/MedicalClaim/EditMedicalMedicalClaimSchema';
import ListMedicalPatientSchema from 'App/Validators/Medical/Patient/ListMedicalPatientSchema';
import AddMedicalPatientSchema from 'App/Validators/Medical/Patient/AddMedicalPatientSchema';
import EditMedicalPatientSchema from 'App/Validators/Medical/Patient/EditMedicalPatientSchema';
import ListMedicalTreatmentSchema from 'App/Validators/Medical/Treatment/ListMedicalTreatmentSchema';
import AddMedicalTreatmentSchema from 'App/Validators/Medical/Treatment/AddMedicalTreatmentSchema';
import EditMedicalTreatmentSchema from 'App/Validators/Medical/Treatment/EditMedicalTreatmentSchema';

@inject()
export default class MedicalsController extends BaseController {
    constructor(
        private medicalEmployeeAllocationService: MedicalEmployeeAllocationServices,
        private medicalClinicAllocationService: MedicalClinicAllocationServices,
        private medicalMedicalClaimService: MedicalMedicalClaimServices,
        private medicalPatientService: MedicalPatientServices,
        private medicalTreatmentService: MedicalTreatmentServices,
        ) {
        super();
    }

    public async getEmployeeAllocations({ request }: HttpContextContract) {
        return this.handleList(
            request,
            this.medicalEmployeeAllocationService.getEmployeeAllocations.bind(this.medicalEmployeeAllocationService),
            ListMedicalEmployeeAllocationSchema,
        );
    }
    public async getEmployeeAllocation({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalEmployeeAllocationService.getEmployeeAllocation,
            GetByIdSchema,
        );
    }

    public async addEmployeeAllocation({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalEmployeeAllocationService.addEmployeeAllocation,
            AddMedicalEmployeeAllocationSchema,
        );
    }

    public async editEmployeeAllocation({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalEmployeeAllocationService.editEmployeeAllocation,
            EditMedicalEmployeeAllocationSchema,
        );
    }
    public async getClinicAllocations({ request }: HttpContextContract) {
        return this.handleList(
            request,
            this.medicalClinicAllocationService.getClinicAllocations.bind(this.medicalClinicAllocationService),
            ListMedicalClinicAllocationSchema,
        );
    }
    public async getClinicAllocation({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalClinicAllocationService.getClinicAllocation,
            GetByIdSchema,
        );
    }

    public async addClinicAllocation({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalClinicAllocationService.addClinicAllocation,
            AddMedicalClinicAllocationSchema,
        );
    }

    public async editClinicAllocation({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalClinicAllocationService.editClinicAllocation,
            EditMedicalClinicAllocationSchema,
        );
    }
    public async getMedicalClaims({ request }: HttpContextContract) {
        return this.handleList(
            request,
            this.medicalMedicalClaimService.getMedicalClaims.bind(this.medicalMedicalClaimService),
            ListMedicalMedicalClaimSchema,
        );
    }
    public async getMedicalClaim({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalMedicalClaimService.getMedicalClaim,
            GetByIdSchema,
        );
    }

    public async addMedicalClaim({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalMedicalClaimService.addMedicalClaim,
            AddMedicalMedicalClaimSchema,
        );
    }

    public async editMedicalClaim({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalMedicalClaimService.editMedicalClaim,
            EditMedicalMedicalClaimSchema,
        );
    }
    public async getPatients({ request }: HttpContextContract) {
        return this.handleList(
            request,
            this.medicalPatientService.getPatients.bind(this.medicalPatientService),
            ListMedicalPatientSchema,
        );
    }
    public async getPatient({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalPatientService.getPatient,
            GetByIdSchema,
        );
    }

    public async addPatient({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalPatientService.addPatient,
            AddMedicalPatientSchema,
        );
    }

    public async editPatient({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalPatientService.editPatient,
            EditMedicalPatientSchema,
        );
    }
    public async getTreatments({ request }: HttpContextContract) {
        return this.handleList(
            request,
            this.medicalTreatmentService.getTreatments.bind(this.medicalTreatmentService),
            ListMedicalTreatmentSchema,
        );
    }
    public async getTreatment({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalTreatmentService.getTreatment,
            GetByIdSchema,
        );
    }

    public async addTreatment({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalTreatmentService.addTreatment,
            AddMedicalTreatmentSchema,
        );
    }

    public async editTreatment({ request }: HttpContextContract) {
        return this.validateAndProcessRequest(
            request,
            this.medicalTreatmentService.editTreatment,
            EditMedicalTreatmentSchema,
        );
    }
}
