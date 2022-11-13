<template>
	<li class="crumbs__item">
		<span v-if="disabled">
			{{ crumb.title }}
		</span>
		<nuxt-link :to="crumb.link"
		           v-else
		           class="crumbs__link">
			{{ crumb.title }}
		</nuxt-link>
	</li>
</template>
<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		crumb: {
			type: Object,
			default: () => {
			}
		}
	}
}
</script>