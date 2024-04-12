<template>
	<product-small
		v-if="type === 'small'"
		:name="name"
		:pic="pic || picDefault"
		:tags="tags"
		:price="price"
		:rating="rating"
		class="product--small"
	/>

	<product-medium
		v-if="type === 'medium'"
		:name="name"
		:pic="pic || picDefault"
		:tags="tags"
		:price="price"
		:rating="rating"
		class="product--medium"
	/>

	<product-big
		v-else-if="type === 'big'"
		:name="name"
		:pic="pic || picDefault"
		:tags="tags"
		:price="price"
		:rating="rating"
		class="product--big"
	/>
</template>

<script>
	import ProductSmall from './types/small.vue'
	import ProductMedium from './types/medium.vue'
	import ProductBig from './types/big.vue'

	export default {
		name: 'Product',
		components: {
			ProductSmall,
			ProductMedium,
			ProductBig,
		},
		props: {
			type: {
				type: String,
				default: 'medium',
			},

			tags: {
				type: Array,
				default: () => {
					return []
				},
			},

			pic: {
				type: String,
				default: null,
			},

			name: {
				type: String,
				default: null,
			},

			price: {
				type: Object,
				default: () => {
					return {
						value: null,
						old: null,
					}
				},
			},

			rating: {
				type: Object,
				default: () => {
					return {
						value: null,
						feedback: null,
					}
				},
			},
		},

		data() {
			return {
				picDefault: '',
			}
		},
	}
</script>

<style lang="scss">
	@import 'product';
</style>
