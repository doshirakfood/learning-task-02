<template>
	<div class="tag-group">
		<div class="tag-group__row">
			<div
				v-for="tag in tagsList"
				:key="`${tag.type}-${$.uid}`"
				:title="tag.type === 'sale' ? `Sale ${tag.value}` : tag.value"
				:style="`--tag-color: ${colorsGroup[tag.type] || colorDefault}`"
				class="tag-group__col"
			>
				<span v-if="tag.type === 'sale'">
					Sale
					<b>{{ tag.value }}</b>
				</span>

				<span v-else>
					{{ tag.value }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TagGroup',
		props: {
			tagsList: {
				type: Array,
				default: () => {
					return []
				},
			},
		},

		data() {
			return {
				colorDefault: '#1a1a1a',
				colorsGroup: {
					sale: '#ea4b48',
					new: '#ff8a00',
					best: '#2388ff',
					'out-stock': '#1a1a1a',
				},
			}
		},
	}
</script>

<style lang="scss">
	@import 'tag-group';
</style>
