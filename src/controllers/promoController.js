import { dataMapper } from "../dataMapper"

export const promoController = {
	async promosList(req, res) {
		const promos = await dataMapper.promoList()
		res.render("promos", { promos })
	},

	async promoPage(req, res) {
		const promoId = await dataMapper.promoPage(+req.params.id)
		res.render("promo", {
			promoId: promoId,
		})
	},

	async studentsPage(req, res) {
		const promoId = await dataMapper.promoPage(+req.params.id)
		const promo = await dataMapper.studentsPage(+req.params.id)
		res.render("students", {
			promoId: promoId,
			promo: promo,
		})
	},

	async studentPage(req, res) {
		const promoId = await dataMapper.promoPage(+req.params.id)
		const student = await dataMapper.studentsPage(+req.params.student)
		res.render("student", {
			promoId: promoId,
			student: student,
		})
	},
}
