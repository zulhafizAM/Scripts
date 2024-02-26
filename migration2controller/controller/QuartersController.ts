import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import QuarterServices from 'App/Services/QuarterServices';
import QuarterSchema from 'App/Validators/QuarterValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class QuartersController extends BaseController {
    constructor(private quarterService: QuarterServices) {
        super();
    }

    public async getQuarters({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const quarterSchema =
                QuarterSchema.safeParse(requestParams);
            if (!quarterSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        quarterSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.quarterService.getQuarters(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getQuarter({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.quarterService.getQuarter,
        );
    }

    public async addQuarter({ request }: HttpContextContract) {
        const quarter = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const QuarterValidate =
                QuarterSchema.safeParse(quarter);
            if (!QuarterValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        QuarterValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.quarterService.addQuarter(quarter);
            return this.responseStatusService.showSuccess(
                'create',
                quarter,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editQuarter({ request }: HttpContextContract) {
        const quarter = request.body();

        try {
            const QuarterValidate =
                QuarterSchema.safeParse(quarter);
            if (!QuarterValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        QuarterValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.quarterService.editQuarter(quarter);
            return this.responseStatusService.showSuccess(
                'update',
                quarter,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
