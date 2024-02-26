import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MaternityLeaveServices from 'App/Services/MaternityLeaveServices';
import MaternityLeaveSchema from 'App/Validators/MaternityLeaveValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MaternityLeavesController extends BaseController {
    constructor(private maternityLeaveService: MaternityLeaveServices) {
        super();
    }

    public async getMaternityLeaves({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const maternityLeaveSchema =
                MaternityLeaveSchema.safeParse(requestParams);
            if (!maternityLeaveSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        maternityLeaveSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.maternityLeaveService.getMaternityLeaves(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMaternityLeave({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.maternityLeaveService.getMaternityLeave,
        );
    }

    public async addMaternityLeave({ request }: HttpContextContract) {
        const maternityLeave = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MaternityLeaveValidate =
                MaternityLeaveSchema.safeParse(maternityLeave);
            if (!MaternityLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MaternityLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.maternityLeaveService.addMaternityLeave(maternityLeave);
            return this.responseStatusService.showSuccess(
                'create',
                maternityLeave,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMaternityLeave({ request }: HttpContextContract) {
        const maternityLeave = request.body();

        try {
            const MaternityLeaveValidate =
                MaternityLeaveSchema.safeParse(maternityLeave);
            if (!MaternityLeaveValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MaternityLeaveValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.maternityLeaveService.editMaternityLeave(maternityLeave);
            return this.responseStatusService.showSuccess(
                'update',
                maternityLeave,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
