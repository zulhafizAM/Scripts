const ClinicsController = () => import('#controllers/employment/clinics_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function clinicRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [ClinicsController, 'getClinics'])
                    router.post('get', [ClinicsController, 'getClinic'])
                    router.post('add', [ClinicsController, 'addClinic'])
                    router.put('edit', [ClinicsController, 'editClinic'])
                })
                .prefix('clinic')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getDate'])
                })
                .prefix('date')
            router
                .group(() => {
                    router.post('add', [ClinicsController, 'addClinic_account'])
                })
                .prefix('clinic_account')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getProfile'])
                })
                .prefix('profile')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getClaim'])
                })
                .prefix('claim')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getTreatment'])
                })
                .prefix('treatment')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getSecretary_approval'])
                    router.post('add', [ClinicsController, 'addSecretary_approval'])
                })
                .prefix('secretary_approval')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getSupporter_approver'])
                    router.post('add', [ClinicsController, 'addSupporter_approver'])
                })
                .prefix('supporter_approver')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getApprover_approval'])
                    router.post('add', [ClinicsController, 'addApprover_approval'])
                })
                .prefix('approver_approval')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getSupporter_approval'])
                    router.post('add', [ClinicsController, 'addSupporter_approval'])
                })
                .prefix('supporter_approval')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getPatient'])
                    router.post('add', [ClinicsController, 'addPatient'])
                })
                .prefix('patient')
            router
                .group(() => {
                    router.post('get', [ClinicsController, 'getTreatment'])
                    router.post('add', [ClinicsController, 'addTreatment'])
                })
                .prefix('treatment')
        })
        .prefix('clinic')
        .use(middleware.auth({ guards: ['api'] }))
}
