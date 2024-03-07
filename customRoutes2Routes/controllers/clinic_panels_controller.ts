import { roleUser } from '#abilities/main'
import ClinicPanelClinicPanelServices from 'App/Services/ClinicPanel/ClinicPanelClinicPanelServices';
import ClinicPanelPersonal_detailServices from 'App/Services/ClinicPanel/ClinicPanelPersonal_detailServices';
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import jsend from 'jsend'

@inject()
export default class ClinicPanelsController {
    constructor(
        protected clinicPanelClinicPanelService: ClinicPanelClinicPanelServices,
        protected clinicPanelPersonal_detailService: ClinicPanelPersonal_detailServices,
        ) {
    }

    async getClinicPanels({ request, bouncer, response }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(listFilterSchema)
        return response.status(200).send(jsend.success(await this.clinicPanelClinicPanelService.getClinicPanels(payload)))
    }
    async getClinicPanel({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicPanelClinicPanelService.getClinicPanel(payload.id)))
    }
    async addClinicPanel({ request, bouncer, response, auth }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(AddClinicPanelClinicPanelValidator)
        return response
            .status(200)
            .send(jsend.success(await this.clinicPanelClinicPanelService.addClinicPanel(payload, auth.user!)))
    }

    async getPersonal_detail({ request, response, bouncer }: HttpContext) {
        await bouncer.authorize(roleUser, [''])
        const payload = await request.validateUsing(getSchema)
        return response
            .status(200)
            .send(jsend.success(await this.clinicPanelPersonal_detailService.getPersonal_detail(payload.id)))
    }
}
