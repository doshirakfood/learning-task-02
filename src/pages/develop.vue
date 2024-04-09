<template>
	<layout-default class="develop">
		<develop-section title="Typography">
			<develop-box title="Heading">
				<h2 class="title-display">.title-display</h2>
				<h2 v-for="index in 5" :key="index" :class="`title-${index}`">
					{{ `.title-${index}` }}
				</h2>
			</develop-box>

			<develop-box title="Text">
				<p
					v-for="(name, index) in [
						'tiny',
						'small',
						'medium',
						'large',
						'xl',
						'xxl',
					]"
					:key="index"
					:class="`text-${name}`"
				>
					{{ `.text-${name}` }}
				</p>
			</develop-box>

			<develop-box title="Font weight">
				<p
					v-for="(name, index) in [
						'light',
						'normal',
						'medium',
						'semibold',
						'bold',
						'extrabold',
						'black',
					]"
					:key="index"
					:class="`font-${name}`"
				>
					{{ `.font-${name}` }}
				</p>
			</develop-box>
		</develop-section>
	</layout-default>
</template>

<script>
	import LayoutDefault from '@layouts/default.vue'
	import DevelopSection from '@components/develop/section/section.vue'
	import DevelopBox from '@components/develop/box/box.vue'

	export default {
		name: 'PageDevelop',
		components: { LayoutDefault, DevelopSection, DevelopBox },
	}
</script>

<style scoped lang="scss"></style>
