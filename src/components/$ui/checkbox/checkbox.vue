<template>
	<label
		:for="elId"
		:aria-label="placeholder"
		:class="['checkbox__label', `checkbox-${type}`]"
	>
		<input
			:id="elId"
			class="checkbox__field"
			type="checkbox"
			:name="name"
			:checked="fieldChecked"
			:required="isRequired"
			:placeholder="placeholder"
			:value="value"
			@change="$emit('update:modelValue', $event.target.value)"
		/>
		<i class="checkbox__replace" />

		<span v-if="$slots.default" class="checkbox__text">
			<slot />
		</span>
	</label>
</template>

<script>
	export default {
		name: 'VCheckbox',

		props: {
			type: {
				type: String,
				default: 'default',
			},

			placeholder: {
				type: String,
				default: 'Нажмите, чтобы отметить флажком.',
			},

			id: {
				type: String,
				default: '',
			},

			name: {
				type: String,
				default: '',
			},

			value: {
				type: [String, Number],
				default: null,
			},

			isRequired: {
				type: Boolean,
				default: false,
			},

			isChecked: {
				type: Boolean,
				default: false,
			},

			modelValue: {
				type: [String, Number],
				default: null,
			},
		},
		emits: ['update:modelValue'],

		data() {
			return {
				fieldChecked: this.isChecked,
				elId: this.id || `checkbox-${this.$.uid}-field`,
			}
		},
	}
</script>

<style lang="scss">
	@import 'checkbox';
</style>
