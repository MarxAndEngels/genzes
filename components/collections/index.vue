<template>
	<div class="collections">
		<collections-item v-for="item in collections"
		                  :key="item.title"
		                  :item="item" />
		<!-- <collections-item black :item="black"/> -->
		<!-- <collections-item slide
		                  :item="slides[currentSlide]" /> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			black:{
				title: 'Чёрная пятница',
				slug: 'sale',
			},
			collections: [
				{
					title: 'Седаны',
					slug: 'sedan'
				},
				{
					title: 'Внедорожники',
					slug: 'allroad'
				},
				{
					title: 'Хэтчбеки',
					slug: 'hatchback'
				},
				{
					title: 'Лифтбеки',
					slug: 'liftback'
				},
				{
					title: 'Универсалы',
					slug: 'wagon'
				},
			],
			currentSlide: 0,
			slides: [
				{
					title: 'Купить со скидкой',
					text: 'Воплоти мечту уже сегодня с выгодным предложением. Заполните заявку, чтобы получить уникальное предложение.',
					slug: 'credit',
					id: 1,
				},
				{
					title: 'Выгодный трейдин',
					text: 'lorem loremlorem lorem lorem loremlorem loremloremlorem loremloremlorem loremlorem lorem loremloremlorem loremlorem',
					slug: 'credit',
					id: 1,
				},
				{
					title: 'Выгодный трейдин',
					text: 'lorem loremlorem lorem lorem loremlorem loremloremlorem loremloremlorem loremlorem lorem loremloremlorem loremlorem',
					slug: 'credit',
					id: 3,
				},
			]
		}
	}
}
</script>