<template>
	<Form
		@submit="onSubmit"
		:id="$attrs.id"
		:validation-schema="schema['validate']"
		class="form"
	>
		<v-row>
			<v-col
				v-for="(field, index) in schema['fields']"
				:key="field.name"
				:cols="field.cols || 'full'"
			>
				<Field
					:name="field.name"
					:type="field.as"
					v-slot="{ handleChange, value, meta, errorMessage }"
				>
					<div :class="[isValid(meta)]">
						<label
							v-if="
								field.as !== 'checkbox' &&
								field.as !== 'radio' &&
								field.label
							"
							:for="idField(field, index)"
							class="form__label"
						>
							{{ field.label }}
						</label>

						<v-field
							v-if="field.as === 'input'"
							:type="field.type"
							:name="field.name"
							:disabled="field.disabled"
							:required="field.required"
							:placeholder="field.placeholder"
							:id="idField(field, index)"
							:model-value="value"
							@update:modelValue="handleChange"
						/>

						<v-textarea
							v-else-if="field.as === 'textarea'"
							:rows="field.rows"
							:cols="field.cols"
							:maxlength="field.maxlength"
							:minlength="field.minlength"
							:autocomplete="field.autocomplete"
							:readonly="field.readonly"
							:required="field.required"
							:disabled="field.disabled"
							:autofocus="field.autofocus"
							:placeholder="field.placeholder"
							:id="idField(field, index)"
							:model-value="value"
							@update:modelValue="handleChange"
						/>

						<v-select
							v-else-if="field.as === 'select'"
							:name="field.name"
							:options="field.options"
							:required="field.required"
							:disabled="field.disabled"
							:placeholder="field.placeholder"
							:id="idField(field, index)"
							:value="value"
							@selected="handleChange"
							@clear="handleChange"
						/>

						<v-checkbox
							v-if="field.as === 'checkbox'"
							:name="field.name"
							:disabled="field.disabled"
							:required="field.required"
							:placeholder="field.placeholder"
							:model-value="value"
							@update:modelValue="handleChange"
						>
							<span v-html="field.label"></span>
						</v-checkbox>

						<v-radio
							v-else-if="field.as === 'radio'"
							:name="field.name"
							:disabled="field.disabled"
							:required="field.required"
							:placeholder="field.placeholder"
							:model-value="value"
							@update:modelValue="handleChange"
						>
							<span v-html="field.label"></span>
						</v-radio>
					</div>

					<span
						v-show="errorMessage"
						class="form__alert form__alert--error"
					>
						{{ errorMessage }}
					</span>
				</Field>
			</v-col>

			<v-col v-if="submit" cols="full">
				<v-button
					type="submit"
					:color="submit['color']"
					:label="submit['label']"
				/>
			</v-col>
		</v-row>
	</Form>
</template>

<script>
	import { Form, Field } from 'vee-validate'

	export default {
		name: 'VDynamicForm',
		inheritAttrs: false,

		components: {
			Form,
			Field,
		},

		props: {
			schema: {
				type: Object,
				required: true,
				default: () => {
					return {
						fields: [],
					}
				},
			},

			submit: {
				type: Object,
				default: () => {
					return {
						color: 'brand',
						label: 'Submit',
					}
				},
			},
		},

		computed: {
			isValid() {
				return (meta) => {
					if (meta.validated === true) {
						return meta.valid ? 'is-valid' : 'is-invalid'
					}
				}
			},

			idField() {
				return (field, index) => {
					return field.id
						? field.id
						: `form-field-${index}-${field.name}`
				}
			},
		},

		methods: {
			onSubmit(values) {
				this.$emit('submit', values)
			},
		},
	}
</script>

<style lang="scss">
	@import 'dynamic-form';
</style>
