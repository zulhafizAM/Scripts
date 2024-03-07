const ClinicPanelsController = () => import('#controllers/employment/clinic_panels_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function clinic_panelRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [ClinicPanelsController, 'getClinicPanels'])
                    router.post('get', [ClinicPanelsController, 'getClinicPanel'])
                    router.post('add', [ClinicPanelsController, 'addClinicPanel'])
                })
                .prefix('clinic_panel')
            router
                .group(() => {
                    router.post('get', [ClinicPanelsController, 'getPersonal_detail'])
                })
                .prefix('personal_detail')
        })
        .prefix('clinic_panel')
        .use(middleware.auth({ guards: ['api'] }))
}
