import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SalaryMovementServices from 'App/Services/SalaryMovementServices';
import SalaryMovementSchema from 'App/Validators/SalaryMovementValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class SalaryMovementsController extends BaseController {
    constructor(private salaryMovementService: SalaryMovementServices) {
        super();
    }

    public async getSalaryMovements({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const salaryMovementSchema =
                SalaryMovementSchema.safeParse(requestParams);
            if (!salaryMovementSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        salaryMovementSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.salaryMovementService.getSalaryMovements(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getSalaryMovement({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.salaryMovementService.getSalaryMovement,
        );
    }

    public async addSalaryMovement({ request }: HttpContextContract) {
        const salaryMovement = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const SalaryMovementValidate =
                SalaryMovementSchema.safeParse(salaryMovement);
            if (!SalaryMovementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SalaryMovementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.salaryMovementService.addSalaryMovement(salaryMovement);
            return this.responseStatusService.showSuccess(
                'create',
                salaryMovement,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editSalaryMovement({ request }: HttpContextContract) {
        const salaryMovement = request.body();

        try {
            const SalaryMovementValidate =
                SalaryMovementSchema.safeParse(salaryMovement);
            if (!SalaryMovementValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        SalaryMovementValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.salaryMovementService.editSalaryMovement(salaryMovement);
            return this.responseStatusService.showSuccess(
                'update',
                salaryMovement,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
