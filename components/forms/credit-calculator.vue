<template>
	<div class="calculator">
		<inputs-range class="calculator__controls"
		              @rangeInput="rangeInputTime()"
		              :max="creditRange.length - 1"
		              :value="8"
		              :min="0"
		              :step="1"
		              :dimension="creditRange"
		              title="Срок кредитования:" />
		<inputs-range class="calculator__controls"
		              @rangeInput="rangeInputContribution()"
		              :max="contributionRange.length - 1"
		              :min="0"
		              :value="0"
		              :step="1"
		              :dimension="contributionRange"
		              title="Первоначальный взнос:" />
		<div class="conditions_info">
			<div class="conditions_info_line">
				<div class="conditions_info_line_item">
					Ваша ставка
				</div>
				<div class="conditions_info_line_dots"></div>
				<div class="conditions_info_line_item">
					{{ settings.credit_percent }}
				</div>
			</div>
			<div class="conditions_info_line">
				<div class="conditions_info_line_item">
					Платеж в месяц
				</div>
				<div class="conditions_info_line_dots"></div>
				<div class="conditions_info_line_item price">
					{{ total }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import formValidation from '~/mixins/formValidation'
import {mapGetters} from "vuex";

export default {
	mixins: [formValidation],
	data() {
		return {
			creditRange: [
				'61 дн',
				'6 мес',
				'12 мес',
				'24 мес',
				'36 мес',
				'48 мес',
				'60 мес',
				'72 мес',
				'84 мес'
			],
			contributionRange: [
				'0 %',
				'10 %',
				'20 %',
				'30 %',
				'40 %',
				'50 %',
				'60 %',
				'70 %',
				'80 %',
			],
			total: null
		}
	},
	props: {
		installment: {
			type: Boolean,
			default: false
		},
		offer: Object
	},
	watch: {
		offer() {
			this.calculate()
		},
	},
	computed: {
		...mapGetters({
			settings: 'settings/settings'
		})
	},
	methods: {
		calculate() {
			if (!!this.offer) {
				let creditProc = this.installment ? 0.001 : Number(this.settings.credit_percent.split('%')[0]);
				let car_price = this.offer.price;
				let creditTime = Number(this.form.periodValue.replace(/[^+\d]/g, ''))
				let firstPay = Number(this.form.paymentValue.replace(/[^+\d]/g, ''))
				
				
				let A = 0;
				let i = creditProc / 12 / 100;
				let n = creditTime;
				let S
				if (firstPay !== 0) {
					S = car_price - (car_price * firstPay) / 100;
				} else {
					S = car_price;
				}
				this.paymentPriceValue = ((car_price * firstPay) / 100).toString() + ` руб. (${firstPay}%)`
				let K = 0;
				if (car_price) {
					K = (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
					A = Math.round(K * S);
					this.total = String(A).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + " ₽"
					//для отображения в блоке рядом с выбранным банком
					// this.setPeriodValue(this.periodValue)
					// this.setMonthPaymentValue(A)
					//
				}
			}
		},
		rangeInputTime() {
			this.form.periodValue = this.creditRange[event.target.value]
			this.calculate()
		},
		rangeInputContribution() {
			this.form.paymentValue = this.contributionRange[event.target.value]
			this.calculate()
		}
	},
	mounted() {
		// console.log(this.offer)
		// this.annuityCalc()
	},
}
</script>

<style scoped>

</style>