<template>
	<div class="quantity-selector">
		<v-button
			class="quantity-selector__trigger quantity-selector__trigger--dec"
			:icon="{
				name: 'icon-dec',
			}"
			@click="onChangeValue('dec')"
		/>

		<input
			class="quantity-selector__field"
			type="number"
			:name="name"
			:autocomplete="autocomplete"
			:max="max"
			:min="min"
			:required="isRequired"
			:disabled="isDisabled"
			:autofocus="isAutofocus"
			:placeholder="placeholder"
			:value="fieldValue"
			@input="onInputValue"
		/>

		<v-button
			class="quantity-selector__trigger quantity-selector__trigger--inc"
			:icon="{
				name: 'icon-inc',
			}"
			@click="onChangeValue('inc')"
		/>
	</div>
</template>

<script>
	export default {
		name: 'VQuantitySelector',

		props: {
			name: {
				type: String,
				default: null,
			},

			min: {
				type: [String, Number],
				default: 0,
			},

			max: {
				type: [String, Number],
				default: 999999,
			},

			step: {
				type: Number,
				default: 1,
			},

			autocomplete: {
				type: String,
				default: null,
			},

			placeholder: {
				type: String,
				default: null,
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

			modelValue: {
				type: [String, Number],
				default: 0,
			},
		},

		emits: ['update:modelValue'],

		data() {
			return {
				fieldMin: parseInt(this.$props.min),
				fieldMax: parseInt(this.$props.max),
				fieldValue: parseInt(this.$props.modelValue),
			}
		},

		methods: {
			onChangeValue(type) {
				let number = parseInt(
					JSON.parse(JSON.stringify(this.fieldValue)),
				)

				if (type === 'dec') number -= this.step
				if (type === 'inc') number += this.step

				if (number >= this.fieldMin && number <= this.fieldMax) {
					this.fieldValue = number
				} else {
					if (number < this.fieldMin) this.fieldValue = this.fieldMin
					if (number > this.fieldMax) this.fieldValue = this.fieldMax
				}

				this.$emit('update:modelValue', this.fieldValue)
			},

			onInputValue(event) {
				const target = event.target
				const value = target.value

				if (value >= this.fieldMin && value <= this.fieldMax) {
					this.fieldValue = value
				} else {
					if (value < this.fieldMin) this.fieldValue = this.fieldMin
					if (value > this.fieldMax) this.fieldValue = this.fieldMax

					target.value = this.fieldValue
				}

				this.$emit('update:modelValue', this.fieldValue)
			},
		},
	}
</script>

<style lang="scss">
	@import 'quantity-selector';
</style>
