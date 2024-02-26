import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ClothingAssistanceServices from 'App/Services/ClothingAssistanceServices';
import ClothingAssistanceSchema from 'App/Validators/ClothingAssistanceValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class ClothingAssistancesController extends BaseController {
    constructor(private clothingAssistanceService: ClothingAssistanceServices) {
        super();
    }

    public async getClothingAssistances({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const clothingAssistanceSchema =
                ClothingAssistanceSchema.safeParse(requestParams);
            if (!clothingAssistanceSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        clothingAssistanceSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.clothingAssistanceService.getClothingAssistances(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getClothingAssistance({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.clothingAssistanceService.getClothingAssistance,
        );
    }

    public async addClothingAssistance({ request }: HttpContextContract) {
        const clothingAssistance = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const ClothingAssistanceValidate =
                ClothingAssistanceSchema.safeParse(clothingAssistance);
            if (!ClothingAssistanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClothingAssistanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clothingAssistanceService.addClothingAssistance(clothingAssistance);
            return this.responseStatusService.showSuccess(
                'create',
                clothingAssistance,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editClothingAssistance({ request }: HttpContextContract) {
        const clothingAssistance = request.body();

        try {
            const ClothingAssistanceValidate =
                ClothingAssistanceSchema.safeParse(clothingAssistance);
            if (!ClothingAssistanceValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        ClothingAssistanceValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.clothingAssistanceService.editClothingAssistance(clothingAssistance);
            return this.responseStatusService.showSuccess(
                'update',
                clothingAssistance,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
