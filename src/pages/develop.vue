<template>
	<layout-default class="develop">
		<develop-section title="Typography">
			<develop-box title="Heading">
				<h2 class="title-display">.title-display</h2>
				<h2 v-for="index in 5" :key="index" :class="`title-${index}`">
					{{ `.title-${index}` }}
				</h2>
			</develop-box>

			<develop-box title="Text">
				<p
					v-for="(name, index) in [
						'tiny',
						'small',
						'medium',
						'large',
						'xl',
						'xxl',
					]"
					:key="index"
					:class="`text-${name}`"
				>
					{{ `.text-${name}` }}
				</p>
			</develop-box>

			<develop-box title="Font weight">
				<p
					v-for="(name, index) in sizeListArray"
					:key="index"
					:class="`font-${name}`"
				>
					{{ `.font-${name}` }}
				</p>
			</develop-box>
		</develop-section>

		<develop-section title="Color">
			<develop-box title="Text color">
				<h2 class="title-6 subtitle">Gray</h2>
				<p class="text-gray-05">.text-gray-05</p>
				<p
					v-for="index in 9"
					:key="index"
					:class="[`text-gray-${index}`]"
				>
					{{ `.text-gray-${index}` }}
				</p>

				<br />

				<h2 class="title-6 subtitle">Green</h2>
				<p class="text-green-05">.text-green-05</p>
				<p
					v-for="index in 9"
					:key="index"
					:class="[`text-green-${index}`]"
				>
					{{ `.text-green-${index}` }}
				</p>
			</develop-box>

			<develop-box title="Background color">
				<h2 class="title-6 subtitle">Gray</h2>
				<div class="block bg-gray-05">.bg-gray-05</div>
				<div
					v-for="index in 9"
					:key="index"
					:class="[
						'block',
						`bg-gray-${index}`,
						index >= 5 ? 'text-white' : '',
					]"
				>
					{{ `.bg-gray-${index}` }}
				</div>

				<br />
				<br />

				<h2 class="title-6 subtitle">Green</h2>
				<div class="block bg-green-05">.bg-green-05</div>
				<div
					v-for="index in 9"
					:key="index"
					:class="[
						'block',
						`bg-green-${index}`,
						index >= 5 ? 'text-white' : '',
					]"
				>
					{{ `.bg-green-${index}` }}
				</div>
			</develop-box>
		</develop-section>

		<develop-section title="Button">
			<develop-box title="Sizes">
				<h2 class="title-6 subtitle">Large</h2>
				<v-row>
					<v-col cols="auto">
						<v-button
							size="large"
							color="ghost"
							label="Large Ghost"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="large"
							species="border"
							label="Large Border"
							class="text-brand"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="large"
							color="brand"
							label="Large Fill"
						/>
					</v-col>
				</v-row>

				<br />
				<br />

				<h2 class="title-6 subtitle">Medium</h2>
				<v-row>
					<v-col cols="auto">
						<v-button
							size="medium"
							color="ghost"
							label="Medium Ghost"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="medium"
							species="border"
							label="Medium Border"
							class="text-brand"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="medium"
							color="brand"
							label="Medium Fill"
						/>
					</v-col>
				</v-row>

				<br />
				<br />

				<h2 class="title-6 subtitle">Small</h2>
				<v-row>
					<v-col cols="auto">
						<v-button
							size="small"
							color="ghost"
							label="Small Ghost"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="small"
							species="border"
							label="Small Border"
							class="text-brand"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="small"
							color="brand"
							label="Small Fill"
						/>
					</v-col>
				</v-row>
			</develop-box>

			<develop-box title="Icons">
				<h2 class="title-6 subtitle">Icon and Text Buttons</h2>
				<v-row items="center">
					<v-col cols="auto">
						<v-button
							size="small"
							color="brand"
							:icon="{
								name: 'icon-arrow',
								position: 'right',
							}"
							label="Small Fill"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="medium"
							color="brand"
							:icon="{
								name: 'icon-arrow',
								position: 'right',
							}"
							label="Medium Fill"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button
							size="large"
							color="brand"
							:icon="{
								name: 'icon-arrow',
								position: 'right',
							}"
							label="Large Fill"
						/>
					</v-col>
				</v-row>

				<br />
				<br />

				<h2 class="title-6 subtitle">Icon Buttons</h2>
				<v-row>
					<v-col cols="auto">
						<v-button color="ghost" :icon="{ name: 'icon-eye' }" />
					</v-col>

					<v-col cols="auto">
						<v-button
							species="border"
							:icon="{ name: 'icon-heart' }"
							class="text-brand"
						/>
					</v-col>

					<v-col cols="auto">
						<v-button color="brand" :icon="{ name: 'icon-bag' }" />
					</v-col>
				</v-row>
			</develop-box>
		</develop-section>

		<develop-section title="Forms">
			<develop-box title="Fields">
				<v-field type="Email" placeholder="Email" />
				<br />
				<v-field
					label-text="First name"
					placeholder="Your first name"
				/>
			</develop-box>

			<develop-box title="Select">
				<v-select :options="selectList" />
			</develop-box>

			<develop-box title="Quantity selector">
				<v-quantity-selector />
			</develop-box>

			<develop-box title="Checkbox and Radio button">
				<h2 class="title-6 subtitle">Checkbox</h2>
				<v-row>
					<v-col cols="auto">
						<v-checkbox>
							<p>default</p>
						</v-checkbox>
					</v-col>

					<v-col cols="auto">
						<v-checkbox type="minus">
							<p>minus</p>
						</v-checkbox>
					</v-col>
				</v-row>

				<br />
				<br />

				<h2 class="title-6 subtitle">Radio button</h2>
				<v-radio name="radiobutton">One</v-radio>
				<br />
				<br />
				<v-radio name="radiobutton">Two</v-radio>
				<br />
				<br />
				<v-radio name="radiobutton">Three</v-radio>
			</develop-box>
		</develop-section>
	</layout-default>
</template>

<script>
	import LayoutDefault from '@layouts/default.vue'
	import DevelopSection from '@components/develop/section/section.vue'
	import DevelopBox from '@components/develop/box/box.vue'
	import VButton from '@ui/button/button.vue'
	import VRow from '@components/grid-system/row.vue'
	import VCol from '@components/grid-system/col.vue'
	import VCheckbox from '@ui/checkbox/checkbox.vue'
	import VRadio from '@ui/radio/radio.vue'

	export default {
		name: 'PageDevelop',
		components: {
			VRadio,
			VCheckbox,
			VCol,
			VRow,
			VButton,
			LayoutDefault,
			DevelopSection,
			DevelopBox,
		},
		data() {
			return {
				selectList: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
				sizeListArray: [
					'light',
					'normal',
					'medium',
					'semibold',
					'bold',
					'extrabold',
					'black',
				],
			}
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
