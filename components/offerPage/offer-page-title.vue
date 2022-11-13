<template>
	<div class="offer__page-title">
		<div class="offer__page-title__mark">
			{{offer.mark.title}}
		</div>
		<div class="offer__page-title__folder">
			{{offer.folder.title}}
		</div>
		<div class="offer__page-title__generation">
			{{offer.generation.name}}
		</div>
		<div class="offer__page-title__year">
			{{offer.year}} г.
		</div>
	</div>
</template>

<script>

export default {
	props: {
		offer: Object
	},
}
</script>