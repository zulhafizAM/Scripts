import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';
import ServiceClassServices from 'App/Services/Lookup/ServiceClassServices';
import ServiceClassListFilterSchema from 'App/Validators/Lookup/ServiceClass/ServiceClassListFilterSchema';
import ServiceClassAddSchema from 'App/Validators/Lookup/ServiceClass/ServiceClassAddSchema';
import ServiceClassEditSchema from 'App/Validators/Lookup/ServiceClass/ServiceClassEditSchema';

@inject()
export default class ServiceClassController extends BaseController {
    constructor(private serviceClassService: ServiceClassServices) {
        super();
    }

    public async getServiceClass({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.serviceClassService.getServiceClass,
        );
    }
}
