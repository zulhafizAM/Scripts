const MedicalsController = () => import('#controllers/employment/medicals_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function medicalRoutes() {
    router
        .group(() => {
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getPayments'])
                    router.post('get', [MedicalsController, 'getPayment'])
                    router.post('add', [MedicalsController, 'addPayment'])
                })
                .prefix('payment')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getAnnual_allocations'])
                })
                .prefix('annual_allocation')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getAnnual_employee_claims'])
                })
                .prefix('annual_employee_claim')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getClinic_allocations'])
                    router.post('get', [MedicalsController, 'getClinic_allocation'])
                    router.post('add', [MedicalsController, 'addClinic_allocation'])
                })
                .prefix('clinic_allocation')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getEmployee_allocations'])
                    router.post('add', [MedicalsController, 'addEmployee_allocation'])
                    router.put('edit', [MedicalsController, 'editEmployee_allocation'])
                })
                .prefix('employee_allocation')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getMedical_claims'])
                    router.post('get', [MedicalsController, 'getMedical_claim'])
                    router.post('add', [MedicalsController, 'addMedical_claim'])
                    router.put('edit', [MedicalsController, 'editMedical_claim'])
                })
                .prefix('medical_claim')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getPatients'])
                    router.post('get', [MedicalsController, 'getPatient'])
                    router.post('add', [MedicalsController, 'addPatient'])
                    router.put('edit', [MedicalsController, 'editPatient'])
                })
                .prefix('patient')
            router
                .group(() => {
                    router.post('list', [MedicalsController, 'getTreatments'])
                    router.post('get', [MedicalsController, 'getTreatment'])
                    router.post('add', [MedicalsController, 'addTreatment'])
                    router.put('edit', [MedicalsController, 'editTreatment'])
                })
                .prefix('treatment')
        })
        .prefix('medical')
        .use(middleware.auth({ guards: ['api'] }))
}
