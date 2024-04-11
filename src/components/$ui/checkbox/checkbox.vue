<template>
	<label
		:for="elId"
		:aria-label="$attrs.placeholder"
		:class="['checkbox__label', `checkbox-${type}`]"
	>
		<input
			v-bind="$attrs"
			class="checkbox__field"
			type="checkbox"
			:id="elId"
			:checked="modelValue"
			@change="onChange"
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
		inheritAttrs: false,
		props: {
			type: {
				type: String,
				default: 'default',
			},

			modelValue: {
				type: Boolean,
				default: false,
			},
		},
		emits: ['update:modelValue'],

		data() {
			return {
				elId: this.$attrs.id || `checkbox-${this.$.uid}-field`,
			}
		},

		methods: {
			onChange(event) {
				this.$emit('update:modelValue', event.target.checked)
			},
		},
	}
</script>

<style lang="scss">
	@import 'checkbox';
</style>
