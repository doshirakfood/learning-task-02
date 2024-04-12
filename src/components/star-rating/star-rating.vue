<template>
	<div
		class="star-rating"
		:style="`--rating-number: ${number}; --rating-color: ${color}`"
	>
		<div class="star-rating__content" :title="`Rating: ${number}`">
			<div class="star-rating__body"></div>
			<div class="star-rating__progress"></div>
		</div>

		<div v-if="feedback" class="star-rating__feedback">
			({{ feedback }} Feedback)
		</div>
	</div>
</template>

<script>
	export default {
		name: 'StarRating',
		props: {
			number: {
				type: [Number, String],
				default: 4.5,
			},

			color: {
				type: String,
				default: '#ff8a00',
			},

			feedback: {
				type: [Number, String],
				default: null,
			},
		},
	}
</script>

<style lang="scss">
	@import 'star-rating';
</style>
