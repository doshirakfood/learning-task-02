<template>
	<div class="product">
		<div class="product__wrapper">
			<div class="product__main">
				<img
					class="product__pic"
					loading="lazy"
					:src="pic"
					:title="`This is ${name}`"
					:alt="name"
				/>
			</div>
			<div class="product__footer">
				<div class="product__info">
					<div
						v-if="name"
						class="product__info-item product__name"
						:title="name"
					>
						{{ name }}
					</div>

					<price
						v-if="price"
						class="product__info-item product__price"
						:value="price['value']"
						:old="price['old']"
					/>
				</div>

				<star-rating
					v-if="rating['value']"
					:number="rating['value']"
					:feedback="rating['feedback']"
					class="product__rating"
				/>

				<div class="product__actions">
					<div class="product__actions-row">
						<v-button
							class="product__actions-item product__add"
							title="Add product to cart"
							aria-label="Add product to cart"
							color="gray-05"
							:icon="{ name: 'icon-bag' }"
							@click="$emit('addCart', $props)"
						/>

						<v-button
							class="product__actions-item"
							title="Add product to favorites"
							aria-label="Add product to favorites"
							:icon="{ name: 'icon-heart' }"
							@click="$emit('favorites', $props)"
						/>

						<v-button
							class="product__actions-item"
							title="Follow the product"
							aria-label="Follow the product"
							:icon="{ name: 'icon-eye' }"
							@click="$emit('follow', $props)"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProductSmall',
		props: {
			tags: {
				type: Array,
				default: () => {
					return []
				},
			},

			pic: {
				type: String,
				default: null,
			},

			name: {
				type: String,
				default: null,
			},

			price: {
				type: Object,
				default: () => {
					return {
						value: null,
						old: null,
					}
				},
			},

			rating: {
				type: Object,
				default: () => {
					return {
						value: null,
						feedbacks: null,
					}
				},
			},
		},
	}
</script>
