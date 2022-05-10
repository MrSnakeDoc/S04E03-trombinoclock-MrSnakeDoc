import client from "./database"

export const dataMapper = {
	async getArray(...args) {
		try {
			return (await client.query(...args)).rows
		} catch (err) {
			console.log(err.message)
			throw err
		}
	},

	async getRow(...args) {
		try {
			return (await this.getArray(...args))[0]
		} catch (err) {
			console.log(err.message)
			throw err
		}
	},

	async promoList() {
		return await dataMapper.getArray("SELECT * FROM promo")
	},

	async promoPage(param) {
		return await dataMapper.getRow(`SELECT * FROM promo WHERE id = $1`, [param])
	},

	async studentsPage(param) {
		return await dataMapper.getArray(
			`SELECT * FROM student WHERE promo_id = $1`,
			[param]
		)
	},

	async studentPage(param) {
		return await dataMapper.getRow(`SELECT * FROM student WHERE id = $1`, [
			param,
		])
	},
}
