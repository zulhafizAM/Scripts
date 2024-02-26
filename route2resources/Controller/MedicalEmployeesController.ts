import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';
import { error, fail, success } from 'App/Models/DTO/Shared/DefaultResponse';import MedicalEmployeeMedicalClaimServices from 'App/Services/MedicalEmployee/MedicalEmployeeMedicalClaimServices';
import GetByIdSchema from 'App/Validators/Shared/GetByIdValidator';

@inject()
export default class MedicalEmployeesController extends BaseController {
    constructor(
        private medicalEmployeeMedicalClaimService: MedicalEmployeeMedicalClaimServices,
        ) {
        super();
    }

    public async getMedicalClaim({ request, response }: HttpContextContract) {
        const data = request.body();
        let validate = GetByIdSchema.safeParse(data);
        try {
            if (!validate.success)
                return response.status(400).send(fail(validate.error.errors));
            const result = await this.medicalEmployeeMedicalClaimService.getMedicalClaim(
                data,
            );
            return response.status(200).send(success(result));
        } catch (e) {
            return response
                .status(409)
                .send(error('An error occured while processing your request'));
        }
    }
}
