<template>
	<label :for="elId" :aria-label="placeholder" :class="['label', labelClass]">
		<span v-if="labelText || $slots.name" class="label__name">
			<slot name="labelText" />
			{{ labelText }}
		</span>

		<input
			:id="elId"
			:type="type"
			:name="name"
			:autocomplete="autocomplete"
			:max="max"
			:min="min"
			:required="isRequired"
			:disabled="isDisabled"
			:autofocus="isAutofocus"
			:placeholder="placeholder"
			:value="modelValue"
			:class="['label__field', 'field', fieldClass]"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</label>
</template>

<script>
	export default {
		name: 'VField',
		inheritAttrs: false,
		props: {
			type: {
				type: String,
				default: 'text',
			},

			placeholder: {
				type: String,
				default: 'ЗFill in the field',
			},

			isRequired: {
				type: Boolean,
				default: false,
			},

			isDisabled: {
				type: Boolean,
				default: false,
			},

			isAutofocus: {
				type: Boolean,
				default: false,
			},

			id: {
				type: [String, Number],
				default: null,
			},

			min: {
				type: [String, Number],
				default: null,
			},

			max: {
				type: [String, Number],
				default: null,
			},

			name: {
				type: String,
				default: null,
			},

			icon: {
				type: String,
				default: null,
			},

			autocomplete: {
				type: String,
				default: null,
			},

			fieldClass: {
				type: String,
				default: null,
			},

			labelClass: {
				type: String,
				default: null,
			},

			labelText: {
				type: String,
				default: null,
			},

			modelValue: {
				type: [String, Number],
				default: '',
			},
		},

		emits: ['update:modelValue'],

		data() {
			return {
				elId: this.$props.id
					? this.$props.id
					: `label-${this.$.uid}-field`,
			}
		},
	}
</script>

<style lang="scss">
	@import 'field';
</style>
