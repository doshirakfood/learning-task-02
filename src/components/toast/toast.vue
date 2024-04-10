<template>
	<Teleport to="body">
		<div :class="['toast-wrapper', `toast-wrapper--${toastPosition}`]">
			<div
				v-for="toastItem in toastMessages"
				:id="`toast-${$.uid}-${toastItem.id}`"
				:key="`toast-${$.uid}-${toastItem.id}`"
				:class="['toast-message', `toast-message--${toastItem.type}`]"
				role="note"
			>
				<v-button
					aria-label="Close toast"
					title="Закрыть сообщение"
					class="toast-message__close"
					:icon="{ name: 'icon-close' }"
					@click="onHide(toastItem)"
				/>

				<div class="toast-message__row">
					<div class="toast-message__col toast-message__col--left">
						<span class="toast-message__icon" />
					</div>

					<div class="toast-message__col toast-message__col--right">
						<!-- eslint-disable vue/no-v-html -->
						<span
							class="toast-message__text"
							v-html="toastItem.text"
						/>
						<!--eslint-enable-->
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'

	export default {
		name: 'VToast',

		props: {
			toastGroup: {
				type: String,
				default: '',
			},

			toastPosition: {
				type: String,
				default: 'left-bottom',
			},

			toastTimeHide: {
				type: Number,
				default: 2100,
			},
		},
		emits: ['hide'],

		data() {
			return {
				timeoutMessage: '',
			}
		},

		computed: {
			...mapState('main', ['toastMessagesList']),

			toastMessages() {
				return this.toastMessagesList.map((toastItem, index) => {
					toastItem.id = index

					if (toastItem.group) {
						if (toastItem.group === this.toastGroup) {
							return toastItem
						}
					} else {
						return toastItem
					}
				})
			},
		},

		watch: {
			toastMessages: {
				immediate: true,
				deep: true,
				handler(newValue) {
					if (newValue.length > 0) {
						newValue.forEach((variable) => {
							window.clearTimeout(this.timeoutMessage)

							this.timeoutMessage = setTimeout(() => {
								this.onHide(variable)
							}, this.toastTimeHide)
						})
					}
				},
			},
		},

		methods: {
			...mapMutations('main', ['removeToast']),

			onHide(toastItem) {
				this.$emit('hide', toastItem)
				this.removeToast(toastItem.id)
			},
		},
	}
</script>

<style lang="scss">
	@import 'animations.scss';
	@import 'toast.scss';
</style>
