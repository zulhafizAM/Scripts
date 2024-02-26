import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import MainGradeActingPromotionServices from 'App/Services/MainGradeActingPromotionServices';
import MainGradeActingPromotionSchema from 'App/Validators/MainGradeActingPromotionValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class MainGradeActingPromotionsController extends BaseController {
    constructor(private mainGradeActingPromotionService: MainGradeActingPromotionServices) {
        super();
    }

    public async getMainGradeActingPromotions({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const mainGradeActingPromotionSchema =
                MainGradeActingPromotionSchema.safeParse(requestParams);
            if (!mainGradeActingPromotionSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        mainGradeActingPromotionSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.mainGradeActingPromotionService.getMainGradeActingPromotions(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getMainGradeActingPromotion({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.mainGradeActingPromotionService.getMainGradeActingPromotion,
        );
    }

    public async addMainGradeActingPromotion({ request }: HttpContextContract) {
        const mainGradeActingPromotion = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const MainGradeActingPromotionValidate =
                MainGradeActingPromotionSchema.safeParse(mainGradeActingPromotion);
            if (!MainGradeActingPromotionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MainGradeActingPromotionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.mainGradeActingPromotionService.addMainGradeActingPromotion(mainGradeActingPromotion);
            return this.responseStatusService.showSuccess(
                'create',
                mainGradeActingPromotion,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editMainGradeActingPromotion({ request }: HttpContextContract) {
        const mainGradeActingPromotion = request.body();

        try {
            const MainGradeActingPromotionValidate =
                MainGradeActingPromotionSchema.safeParse(mainGradeActingPromotion);
            if (!MainGradeActingPromotionValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        MainGradeActingPromotionValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.mainGradeActingPromotionService.editMainGradeActingPromotion(mainGradeActingPromotion);
            return this.responseStatusService.showSuccess(
                'update',
                mainGradeActingPromotion,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
