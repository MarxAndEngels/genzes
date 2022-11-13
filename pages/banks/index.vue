<template>
	<div>
		<h1 class="h1__title">{{pageTitle || 'Банки партнеры'}}</h1>
		<banks is-all/>
	</div>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags]
}
</script>