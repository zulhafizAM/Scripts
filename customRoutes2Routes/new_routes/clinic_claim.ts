const ClinicClaimsController = () => import('#controllers/employment/clinic_claims_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function clinic_claimRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [ClinicClaimsController, 'getClinicClaims'])
                    router.post('get', [ClinicClaimsController, 'getClinicClaim'])
                    router.post('add', [ClinicClaimsController, 'addClinicClaim'])
                })
                .prefix('clinic_claim')
            router
                .group(() => {
                    router.post('get', [ClinicClaimsController, 'getAllocation'])
                })
                .prefix('allocation')
            router
                .group(() => {
                    router.post('get', [ClinicClaimsController, 'getClinic_detail'])
                })
                .prefix('clinic_detail')
            router
                .group(() => {
                    router.post('add', [ClinicClaimsController, 'addApproval'])
                })
                .prefix('approval')
            router
                .group(() => {
                    router.post('get', [ClinicClaimsController, 'getCalculation'])
                })
                .prefix('calculation')
            router
                .group(() => {
                    router.post('get', [ClinicClaimsController, 'getClaim_detail'])
                    router.put('edit', [ClinicClaimsController, 'editClaim_detail'])
                })
                .prefix('claim_detail')
        })
        .prefix('clinic_claim')
        .use(middleware.auth({ guards: ['api'] }))
}
