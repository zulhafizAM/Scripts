import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ReligionServices from 'App/Services/ReligionServices';
import ReligionSchema from 'App/Validators/ReligionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ReligionsController extends BaseController {
    constructor(private religionService: ReligionServices) {
        super();
    }

    public async getReligions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const religionSchema =
                ReligionSchema.safeParse(requestParams);
            if (!religionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        religionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.religionService.getReligions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getReligion({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.religionService.getReligion,
        );
    }

    public async addReligion({ request }: HttpContextContract) {
        const religion = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ReligionValidate =
                ReligionSchema.safeParse(religion);
            if (!ReligionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ReligionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.religionService.addReligion(religion);
            return this.responseStatusService.showSuccess(
                'create',
                religion,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editReligion({ request }: HttpContextContract) {
        const religion = request.body();

        try {
            const ReligionValidate =
                ReligionSchema.safeParse(religion);
            if (!ReligionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ReligionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.religionService.editReligion(religion);
            return this.responseStatusService.showSuccess(
                'update',
                religion,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
