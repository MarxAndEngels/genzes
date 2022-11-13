<template>
	<div class="advantages" :class="{'advantages--modal':modal}">
		<div class="advantages__item"
		     v-for="item in advantages">
			<div class="advantages__item-name">{{ item.name }}</div>
			<div class="advantages__item-info">
				<span>
					{{ item.prefix }}
				</span>
				{{ settings[item.slug] }}
			</div>
			<!--<svg-icon class="advantages__item-icon" :name="item.icon"/>-->
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			advantages: [
				{
					name: 'Ставка',
					slug: 'credit_percent',
					prefix: 'От',
					icon: 'percent'
				},
				{
					name: 'Первый взнос',
					slug: 'credit_first',
					prefix: 'От',
					icon: 'percent'
				},
				// {
				// 	name:'Досрочное погашение',
				// 	slug:'credit_repayment',
				// 	icon:'rub'
				// },
				// {
				// 	name:'Оформление',
				// 	slug:'credit_registration',
				// 	icon:'time'
				// },
				{
					name: 'Сумма кредита',
					slug: 'max_sum_credit',
					prefix: 'До',
					icon: 'rub'
				},
				{
					name: 'Срок кредита',
					slug: 'max_period_credit',
					prefix: 'До',
					icon: 'calendar'
				},
				// {
				// 	name:'Скидка по автокредиту',
				// 	slug:'sale_credit',
				// 	prefix:'До',
				// 	icon:'rub'
				// },
				// {
				// 	name:'Одобрение банков',
				// 	slug:'credit_approve',
				// 	icon:'doc'
				// },
			
			]
		}
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		})
	},
	props: {
		modal: Boolean
	}
}
</script>