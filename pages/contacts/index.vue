<template>
  <div>
	  <h1 class="h1__title">{{pageTitle || 'Контакты'}}</h1>
    <application-contacts/>
  </div>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
	mixins: [seoTags]
}
</script>
