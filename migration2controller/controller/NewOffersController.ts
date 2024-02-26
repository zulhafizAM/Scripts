import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import NewOfferServices from 'App/Services/NewOfferServices';
import NewOfferSchema from 'App/Validators/NewOfferValidator';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';

@inject()
export default class NewOffersController extends BaseController {
    constructor(private newOfferService: NewOfferServices) {
        super();
    }

    public async getNewOffers({ request }: HttpContextContract) {
        const requestParams = request.body();
        try {
            const newOfferSchema =
                NewOfferSchema.safeParse(requestParams);
            if (!newOfferSchema.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        newOfferSchema.error.errors,
                    );
                return errorMessage;
            }
            return this.responseStatusService.showSuccess(
                'read',
                await this.newOfferService.getNewOffers(
                    requestParams,
                ),
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async getNewOffer({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.newOfferService.getNewOffer,
        );
    }

    public async addNewOffer({ request }: HttpContextContract) {
        const newOffer = request.body();
        const data = request.all();
        data['currentRole'] = 'urus setia';
        // data['currentRole'] = 'calon';
        try {
            const NewOfferValidate =
                NewOfferSchema.safeParse(newOffer);
            if (!NewOfferValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewOfferValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newOfferService.addNewOffer(newOffer);
            return this.responseStatusService.showSuccess(
                'create',
                newOffer,
            );
        } catch (error) {
            console.log(error);
            return this.responseStatusService.showCaughtException(error);
        }
    }

    public async editNewOffer({ request }: HttpContextContract) {
        const newOffer = request.body();

        try {
            const NewOfferValidate =
                NewOfferSchema.safeParse(newOffer);
            if (!NewOfferValidate.success) {
                const errorMessage =
                    this.responseStatusService.showValidationError(
                        NewOfferValidate.error.errors,
                    );

                return errorMessage;
            }
            await this.newOfferService.editNewOffer(newOffer);
            return this.responseStatusService.showSuccess(
                'update',
                newOffer,
            );
        } catch (error) {
            return this.responseStatusService.showCaughtException(error);
        }
    }
}
