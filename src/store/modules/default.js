const state = () => ({
	companyName: 'Ecobazar',
	currency: {
		code: 'USD',
		symbol: '$',
	},
	toastMessagesList: [],
})

const mutations = {
	addToast(state, newToast) {
		state.toastMessagesList.push(newToast)
	},

	removeToast(state, index) {
		state.toastMessagesList.splice(index, 1)
	},

	changeCurrency(state, currency) {
		state.currency = currency
	},
}

export default {
	namespaced: true,
	state,
	getters: {},
	mutations,
}
