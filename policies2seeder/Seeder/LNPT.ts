import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Employee from 'App/Models/Employee';
import Permission from 'App/Models/Permission';
import Role from 'App/Models/Role';

export default class extends BaseSeeder {

	public async run () {
		const employees = await Employee.all();
		const roles = await Role.all();
		await Permission.createMany([
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "filter",
				resource: "Senarai Kakitangan",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Senarai Kakitangan",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Butiran Kakitangan",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Pengiraan Puara Mengikut Tahun Yang Dipilih",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "download",
				resource: "laporan LNPT",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "filter",
				resource: "Senarai Kakitangan",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Senarai Kakitangan",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Butiran Kakitangan",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Pengiraan Puara 2 Tahun (36.4%,63.6%)",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "download",
				resource: "laporan LNPT 2 Tahun",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "filter",
				resource: "Senarai Penerima APC",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "view",
				resource: "Butiran Penerima APC",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "update",
				resource: "Maklumat Tahun APC",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
			{
				employeeId: employees![Math.floor(Math.random() *10)].id,
				roleId: roles[7]!.id,
				action: "download",
				resource: "Laporan APC",
				module: "LNPT",
				active: true,
				createdBy: "Admin",
			},
		])
	}
}
