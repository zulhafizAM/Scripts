import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';
import MaritalStatusServices from 'App/Services/Lookup/MaritalStatusServices';
import MaritalStatusListFilterSchema from 'App/Validators/Lookup/MaritalStatus/MaritalStatusListFilterSchema';
import MaritalStatusAddSchema from 'App/Validators/Lookup/MaritalStatus/MaritalStatusAddSchema';
import MaritalStatusEditSchema from 'App/Validators/Lookup/MaritalStatus/MaritalStatusEditSchema';

@inject()
export default class MaritalStatusController extends BaseController {
    constructor(private maritalStatusService: MaritalStatusServices) {
        super();
    }

    public async getMaritalStatus({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.maritalStatusService.getMaritalStatus,
        );
    }
}
