<template>
	<label
		:aria-label="placeholder"
		:class="['radio__label', `radio-${type}`]"
		:for="field_id"
	>
		<input
			class="radio__field"
			type="radio"
			:id="field_id"
			:checked="checked"
			:name="name"
			:placeholder="placeholder"
			:required="required"
			:value="modelValue"
			@change="changeRadio"
		/>
		<i class="radio__replace"></i>

		<span v-if="$slots.default" class="radio__text">
			<slot />
		</span>
	</label>
</template>

<script>
	export default {
		name: 'VRadio',

		props: {
			id: {
				type: String,
				default: '',
			},

			name: {
				type: String,
				default: '',
			},

			checked: {
				type: Boolean,
				default: false,
			},

			required: {
				type: Boolean,
				default: false,
			},

			modelValue: {
				type: [String, Number],
				default: '',
			},

			placeholder: {
				type: String,
				default: 'Заповніть поле',
			},

			type: {
				type: String,
				default: 'default',
			},
		},

		data() {
			return {
				field_id:
					this.$props.id !== ''
						? this.$props.id
						: `label-${this.$.uid}-field`,
			}
		},

		methods: {
			changeRadio(event) {
				this.$emit('update:modelValue', event.target.value)
			},
		},
	}
</script>

<style lang="scss">
	@import 'radio';
</style>
