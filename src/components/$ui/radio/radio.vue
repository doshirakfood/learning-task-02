<template>
	<label
		:for="elId"
		:aria-label="$attrs.placeholder"
		:class="['radio__label', `radio-${type}`]"
	>
		<input
			v-bind="$attrs"
			class="radio__field"
			type="radio"
			:id="elId"
			:value="modelValue"
			@change="$emit('update:modelValue', $event.target.value)"
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
			type: {
				type: String,
				default: 'default',
			},

			modelValue: {
				type: [String, Number],
				default: '',
			},
		},

		data() {
			return {
				elId:
					this.$attrs.id !== ''
						? this.$attrs.id
						: `radio-${this.$.uid}-field`,
			}
		},
	}
</script>

<style lang="scss">
	@import 'radio';
</style>
