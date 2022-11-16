<template>
	<div class="wrapper__emblems">
		<div v-for="item of popular" :key="item.slug">
            <svg-icon class="wrapper__emblems_icon" :name="`emblems/${item.slug}-logo`"/>
            <span class="wrapper__emblems_item">{{ item.title }}</span>
        </div>
	</div>

</template>

<script>

export default {
	data() {
		return {
			popular: [
				{
					title: 'Kia',
					slug: 'kia'
				},
				{
					title: 'Mazda',
					slug: 'mazda'
				},
				{
					title: 'Skoda',
					slug: 'skoda'
				},
				{
					title: 'Ford',
					slug: 'ford'
				},
				{
					title: 'Volkswagen',
					slug: 'volkswagen'
				},
				{
					title: 'Hyundai',
					slug: 'hyundai'
				}
			]
		}
	},
}
</script>