import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ActivityServices from 'App/Services/ActivityServices';
import ActivitySchema from 'App/Validators/ActivityValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ActivitiesController extends BaseController {
    constructor(private activityService: ActivityServices) {
        super();
    }

    public async getActivities({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const activitySchema =
                ActivitySchema.safeParse(requestParams);
            if (!activitySchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        activitySchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.activityService.getActivitys(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getActivity({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.activityService.getActivity,
        );
    }

    public async addActivity({ request }: HttpContextContract) {
        const activity = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ActivityValidate =
                ActivitySchema.safeParse(activity);
            if (!ActivityValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ActivityValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.activityService.addActivity(activity);
            return this.responseStatusService.showSuccess(
                'create',
                activity,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editActivity({ request }: HttpContextContract) {
        const activity = request.body();

        try {
            const ActivityValidate =
                ActivitySchema.safeParse(activity);
            if (!ActivityValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ActivityValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.activityService.editActivity(activity);
            return this.responseStatusService.showSuccess(
                'update',
                activity,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
