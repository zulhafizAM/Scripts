import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PerformanceContributionNotOfficialDutyServices from 'App/Services/PerformanceContributionNotOfficialDutyServices';
import PerformanceContributionNotOfficialDutySchema from 'App/Validators/PerformanceContributionNotOfficialDutyValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class PerformanceContributionNotOfficialDutiesController extends BaseController {
    constructor(private performanceContributionNotOfficialDutyService: PerformanceContributionNotOfficialDutyServices) {
        super();
    }

    public async getPerformanceContributionNotOfficialDuties({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const performanceContributionNotOfficialDutySchema =
                PerformanceContributionNotOfficialDutySchema.safeParse(requestParams);
            if (!performanceContributionNotOfficialDutySchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        performanceContributionNotOfficialDutySchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.performanceContributionNotOfficialDutyService.getPerformanceContributionNotOfficialDutys(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getPerformanceContributionNotOfficialDuty({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.performanceContributionNotOfficialDutyService.getPerformanceContributionNotOfficialDuty,
        );
    }

    public async addPerformanceContributionNotOfficialDuty({ request }: HttpContextContract) {
        const performanceContributionNotOfficialDuty = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const PerformanceContributionNotOfficialDutyValidate =
                PerformanceContributionNotOfficialDutySchema.safeParse(performanceContributionNotOfficialDuty);
            if (!PerformanceContributionNotOfficialDutyValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PerformanceContributionNotOfficialDutyValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.performanceContributionNotOfficialDutyService.addPerformanceContributionNotOfficialDuty(performanceContributionNotOfficialDuty);
            return this.responseStatusService.showSuccess(
                'create',
                performanceContributionNotOfficialDuty,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editPerformanceContributionNotOfficialDuty({ request }: HttpContextContract) {
        const performanceContributionNotOfficialDuty = request.body();

        try {
            const PerformanceContributionNotOfficialDutyValidate =
                PerformanceContributionNotOfficialDutySchema.safeParse(performanceContributionNotOfficialDuty);
            if (!PerformanceContributionNotOfficialDutyValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        PerformanceContributionNotOfficialDutyValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.performanceContributionNotOfficialDutyService.editPerformanceContributionNotOfficialDuty(performanceContributionNotOfficialDuty);
            return this.responseStatusService.showSuccess(
                'update',
                performanceContributionNotOfficialDuty,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
