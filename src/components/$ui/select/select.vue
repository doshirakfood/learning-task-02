<template>
	<div
		:class="['select', `select--${type}`, isMainShow ? 'select--open' : '']"
	>
		<div
			:id="`select-${elId}-header`"
			ref="header"
			class="select-header"
			tabindex="0"
			role="combobox"
			aria-haspopup="listbox"
			:aria-label="placeholder"
			:aria-expanded="isMainShow"
			:aria-controls="`select-${elId}-dropdown`"
			@[event]="onMainShow"
			@keydown.space="onMainShow"
		>
			<div class="select-output">
				{{ selected }}

				<div v-if="!selected" class="select-placeholder">
					{{ placeholder }}
				</div>
			</div>

			<v-button
				v-if="selected"
				class="select-clear"
				aria-label="Select Clear"
				title="Select Clear"
				color="danger"
				:icon="{
					name: 'icon-close',
				}"
				@click="onClear"
			/>
		</div>

		<Teleport to="body">
			<div
				v-show="isMainShow"
				ref="main"
				class="select-main"
				:style="floatingStyles"
			>
				<div class="select-overlay"></div>
				<div
					:id="`select-${elId}-dropdown`"
					ref="dropdown"
					tabindex="0"
					class="select-dropdown"
				>
					<div v-if="search" class="select-search">
						<input
							v-model="optionSearch"
							class="select-search__field"
							type="search"
							:placeholder="search['placeholder']"
							@input="$emit('search', optionSearch)"
						/>
					</div>

					<div
						ref="listbox"
						class="select-listbox"
						@click="onSelected"
					>
						<div
							v-for="(option, index) in optionsList"
							:key="index"
							class="select-option"
							role="option"
							aria-selected="false"
							:aria-label="option.value || option"
							:data-option-value="option.value || option"
							:title="option.value || option"
						>
							{{ option.label || option }}
						</div>
					</div>

					<div
						v-if="optionsList.length === 0"
						class="select-note select-note--notfound"
					>
						{{ search.notfoundText }}
					</div>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import { size, offset, flip, shift } from '@floating-ui/dom'
	import { useFloating, autoUpdate } from '@floating-ui/vue'

	export default {
		name: 'VSelect',
		props: {
			type: {
				type: String,
				default: 'default',
			},

			event: {
				type: String,
				default: 'click',
			},

			placeholder: {
				type: String,
				default: 'Select',
			},

			options: {
				type: Array,
				default: () => [],
			},

			search: {
				type: Object,
				default: () => {
					return {
						placeholder: 'Search',
						notfoundText: 'Nothing found',
					}
				},
			},

			position: {
				type: String,
				default: 'bottom',
			},
		},

		setup(props) {
			const header = ref(null)
			const main = ref(null)
			const { floatingStyles } = useFloating(header, main, {
				whileElementsMounted: autoUpdate,
				placement: props.position,
				middleware: [
					size({
						apply({ rects, elements }) {
							Object.assign(elements.floating.style, {
								maxWidth: `${rects.reference.width}px`,
							})
						},
					}),
					offset(10),
					flip(),
					shift({
						padding: 20,
					}),
				],
			})

			return { header, main, floatingStyles }
		},

		data() {
			return {
				elId: this.$.uid,
				isMainShow: false,
				selected: null,
				optionSearch: '',
			}
		},

		computed: {
			optionsList() {
				return this.options.filter((option) => {
					const value = option.value || option

					return value
						.toLowerCase()
						.includes(this.optionSearch.toLowerCase())
				})
			},
		},

		methods: {
			onMainShow() {
				this.optionSearch = ''
				this.isMainShow = !this.isMainShow

				if (this.isMainShow) {
					this.$nextTick(() => {
						this.$refs.dropdown.focus()
					})

					document.body.addEventListener(
						'click',
						this.onClickOutside,
						false,
					)
				} else {
					document.body.removeEventListener(
						'click',
						this.onClickOutside,
						false,
					)
				}
			},

			onSelected(event) {
				const target = event.target
				const option = target.closest('.select-option') || false
				const selected =
					this.$refs.listbox.querySelector(
						'.select-option--selected',
					) || false

				if (option) {
					if (selected !== option) {
						option.classList.add('select-option--selected')

						if (selected) {
							selected.classList.remove('select-option--selected')
						}
					}

					this.isMainShow = false
					this.selected = option.getAttribute('data-option-value')
					this.$emit('selected', this.selected)
				}
			},

			onClickOutside(event) {
				const target = event.target
				const headerId = this.$refs.header.getAttribute('id')
				const dropdownId = this.$refs.dropdown.getAttribute('id')

				if (
					!target.closest(`#${headerId}`) &&
					!target.closest(`#${dropdownId}`)
				) {
					this.optionSearch = ''
					this.isMainShow = false
					document.body.removeEventListener(
						'click',
						this.onClickOutside,
						false,
					)
				}
			},

			onClear() {
				this.selected = null
				this.$refs.listbox
					.querySelector('.select-option--selected')
					.classList.remove('select-option--selected')

				this.$emit('clear', true)
			},
		},
	}
</script>

<style lang="scss">
	@import 'select.scss';
</style>
