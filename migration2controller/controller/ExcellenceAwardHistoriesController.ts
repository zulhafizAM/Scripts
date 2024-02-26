import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExcellenceAwardHistoryServices from 'App/Services/ExcellenceAwardHistoryServices';
import ExcellenceAwardHistorySchema from 'App/Validators/ExcellenceAwardHistoryValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ExcellenceAwardHistoriesController extends BaseController {
    constructor(private excellenceAwardHistoryService: ExcellenceAwardHistoryServices) {
        super();
    }

    public async getExcellenceAwardHistories({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const excellenceAwardHistorySchema =
                ExcellenceAwardHistorySchema.safeParse(requestParams);
            if (!excellenceAwardHistorySchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        excellenceAwardHistorySchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.excellenceAwardHistoryService.getExcellenceAwardHistorys(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getExcellenceAwardHistory({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.excellenceAwardHistoryService.getExcellenceAwardHistory,
        );
    }

    public async addExcellenceAwardHistory({ request }: HttpContextContract) {
        const excellenceAwardHistory = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ExcellenceAwardHistoryValidate =
                ExcellenceAwardHistorySchema.safeParse(excellenceAwardHistory);
            if (!ExcellenceAwardHistoryValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExcellenceAwardHistoryValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.excellenceAwardHistoryService.addExcellenceAwardHistory(excellenceAwardHistory);
            return this.responseStatusService.showSuccess(
                'create',
                excellenceAwardHistory,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editExcellenceAwardHistory({ request }: HttpContextContract) {
        const excellenceAwardHistory = request.body();

        try {
            const ExcellenceAwardHistoryValidate =
                ExcellenceAwardHistorySchema.safeParse(excellenceAwardHistory);
            if (!ExcellenceAwardHistoryValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ExcellenceAwardHistoryValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.excellenceAwardHistoryService.editExcellenceAwardHistory(excellenceAwardHistory);
            return this.responseStatusService.showSuccess(
                'update',
                excellenceAwardHistory,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
