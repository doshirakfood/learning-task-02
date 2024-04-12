<template>
	<layout-default class="develop">
		<develop-section title="Main">
			<develop-box title="Logotype">
				<logotype />
			</develop-box>

			<develop-box title="Price">
				<p>Small: <price value="14.99" old="20.99" size="small" /></p>
				<p>Default: <price value="14.99" old="20.99" /></p>
				<p>Big: <price value="14.99" old="20.99" size="xxl" /></p>
			</develop-box>
		</develop-section>

		<develop-section title="Products">
			<develop-box>
				<h2 class="title-6 subtitle">Small</h2>
				<product
					type="small"
					name="Chanise Cabbage"
					pic="chanise-cabbage.png"
					:price="{ value: '14.99' }"
					:rating="{ value: 4 }"
				/>

				<br />
				<br />

				<h2 class="title-6 subtitle">Default</h2>
				<v-row>
					<v-col cols="auto">
						<product
							name="Green Apple"
							stars="4.5"
							pic="apples.jpg"
							:tags="[{ type: 'sale', value: '50%' }]"
							:price="{ value: '14.99', old: '20.99' }"
							:rating="{ value: 4 }"
						/>
					</v-col>
				</v-row>

				<br />
				<br />

				<h2 class="title-6 subtitle">Big</h2>
				<product
					type="big"
					name="Chinese cabbage"
					stars="4.5"
					pic="chanise-cabbage.png"
					:tags="[
						{ type: 'sale', value: '50%' },
						{ type: 'best', value: 'Best Sale' },
					]"
					:price="{ value: '14.99', old: '20.99' }"
					:rating="{ value: 4, feedback: 524 }"
				/>
			</develop-box>
		</develop-section>
	</layout-default>
</template>

<script>
	import LayoutDefault from '@layouts/default.vue'
	import DevelopSection from '@components/develop/section/section.vue'
	import DevelopBox from '@components/develop/box/box.vue'

	export default {
		name: 'PageElements',
		components: {
			LayoutDefault,
			DevelopSection,
			DevelopBox,
		},
	}
</script>

<style scoped lang="scss">
	.subtitle {
		margin: 0 0 20px;
	}

	.block {
		min-height: 50px;
		padding: 20px;
	}
</style>
