<template>
	<div class="textarea">
		<textarea
			v-bind="$attrs"
			class="textarea__field"
			:id="elId"
			:value="modelValue"
			:rows="$attrs.rows || 5"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script>
	export default {
		name: 'VTextarea',
		inheritAttrs: false,
		props: {
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
				elId: this.$attrs.id
					? this.$attrs.id
					: `label-${this.$.uid}-field`,
			}
		},
	}
</script>

<style lang="scss">
	@import 'textarea';
</style>
