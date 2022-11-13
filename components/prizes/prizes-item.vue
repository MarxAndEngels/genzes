<template>
	<div class="prizes__item">
		<img class="prizes__item-image" :src="require(`~/assets/img/prizes/${prize.image}`)"
		     :alt="prize.text">
		<div class="prizes__item-text">
			{{prize.text}}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		prize: Object
	}
}
</script>