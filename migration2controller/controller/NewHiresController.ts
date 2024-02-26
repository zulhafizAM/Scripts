import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NewHireServices from 'App/Services/NewHireServices';
import NewHireSchema from 'App/Validators/NewHireValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class NewHiresController extends BaseController {
    constructor(private newHireService: NewHireServices) {
        super();
    }

    public async getNewHires({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const newHireSchema =
                NewHireSchema.safeParse(requestParams);
            if (!newHireSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        newHireSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.newHireService.getNewHires(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getNewHire({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.newHireService.getNewHire,
        );
    }

    public async addNewHire({ request }: HttpContextContract) {
        const newHire = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const NewHireValidate =
                NewHireSchema.safeParse(newHire);
            if (!NewHireValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewHireValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newHireService.addNewHire(newHire);
            return this.responseStatusService.showSuccess(
                'create',
                newHire,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editNewHire({ request }: HttpContextContract) {
        const newHire = request.body();

        try {
            const NewHireValidate =
                NewHireSchema.safeParse(newHire);
            if (!NewHireValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewHireValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newHireService.editNewHire(newHire);
            return this.responseStatusService.showSuccess(
                'update',
                newHire,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
