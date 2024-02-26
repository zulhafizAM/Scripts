import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PerformanceServices from 'App/Services/PerformanceServices';
import PerformanceSchema from 'App/Validators/PerformanceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PerformancesController extends BaseController {
    constructor(private performanceService: PerformanceServices) {
        super();
    }

    public async getPerformances({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const performanceSchema =
                PerformanceSchema.safeParse(requestParams);
            if (!performanceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        performanceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.performanceService.getPerformances(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPerformance({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.performanceService.getPerformance,
        );
    }

    public async addPerformance({ request }: HttpContextContract) {
        const performance = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PerformanceValidate =
                PerformanceSchema.safeParse(performance);
            if (!PerformanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PerformanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.performanceService.addPerformance(performance);
            return this.responseStatusService.showSuccess(
                'create',
                performance,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPerformance({ request }: HttpContextContract) {
        const performance = request.body();

        try {
            const PerformanceValidate =
                PerformanceSchema.safeParse(performance);
            if (!PerformanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PerformanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.performanceService.editPerformance(performance);
            return this.responseStatusService.showSuccess(
                'update',
                performance,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
