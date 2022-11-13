<template>
	<div>
		<h1 class="h1__title h1__title--no-mb">{{pageTitle}}</h1>
		<!--<lists-catalog/>-->
		<catalog/>
	</div>
</template>
<script>
import seoTags from "@/mixins/seoTags";
import validateCategory from "@/mixins/validateCategory";

export default {
	mixins: [seoTags, validateCategory],
}
</script>