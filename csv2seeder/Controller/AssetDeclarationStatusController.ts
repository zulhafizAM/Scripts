import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { inject } from '@adonisjs/core/build/standalone';
import BaseController from './BaseController';
import AssetDeclarationStatusServices from 'App/Services/Lookup/AssetDeclarationStatusServices';
import AssetDeclarationStatusListFilterSchema from 'App/Validators/Lookup/AssetDeclarationStatus/AssetDeclarationStatusListFilterSchema';
import AssetDeclarationStatusAddSchema from 'App/Validators/Lookup/AssetDeclarationStatus/AssetDeclarationStatusAddSchema';
import AssetDeclarationStatusEditSchema from 'App/Validators/Lookup/AssetDeclarationStatus/AssetDeclarationStatusEditSchema';

@inject()
export default class AssetDeclarationStatusController extends BaseController {
    constructor(private assetDeclarationStatusService: AssetDeclarationStatusServices) {
        super();
    }

    public async getAssetDeclarationStatus({ request }: HttpContextContract) {
        return this.handleRequestWithId(
            request,
            this.assetDeclarationStatusService.getAssetDeclarationStatus,
        );
    }
}
