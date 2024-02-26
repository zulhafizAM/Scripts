import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import RaceServices from 'App/Services/RaceServices';
import RaceSchema from 'App/Validators/RaceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class RacesController extends BaseController {
    constructor(private raceService: RaceServices) {
        super();
    }

    public async getRaces({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const raceSchema =
                RaceSchema.safeParse(requestParams);
            if (!raceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        raceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.raceService.getRaces(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getRace({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.raceService.getRace,
        );
    }

    public async addRace({ request }: HttpContextContract) {
        const race = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const RaceValidate =
                RaceSchema.safeParse(race);
            if (!RaceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RaceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.raceService.addRace(race);
            return this.responseStatusService.showSuccess(
                'create',
                race,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editRace({ request }: HttpContextContract) {
        const race = request.body();

        try {
            const RaceValidate =
                RaceSchema.safeParse(race);
            if (!RaceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        RaceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.raceService.editRace(race);
            return this.responseStatusService.showSuccess(
                'update',
                race,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
