<!--<template>-->

<!--тестовая реализация формы-->

<!--	<form class="form"-->
<!--	      @submit.prevent="submit">-->
<!--		<h2 class="h2__title">Форма обратной связи</h2>-->
<!--		<div v-for="(input, index) in form.inputs"-->
<!--		     :class="{'input__wrapper' : input.component === 'input'}"-->
<!--		     :key="index">-->
<!--			<inputs-input v-if="input.component === 'input'"-->
<!--			              v-model="input.value"-->
<!--			              :mask="input.mask"-->
<!--			              :type="input.type"-->
<!--			              @input="handlerInput(input.name)"-->
<!--			              :placeholder="input.placeholder" />-->
<!--		</div>-->
<!--		<buttons-form :disabled="form.button.disabled"-->
<!--		              @click="submit"-->
<!--		              :text="form.button.text" />-->
<!--	</form>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--	data() {-->
<!--		return {-->
<!--			form: {-->
<!--				inputs: [-->
<!--					{-->
<!--						name: 'name',-->
<!--						component: 'input',-->
<!--						type: 'text',-->
<!--						required: true,-->
<!--						placeholder: 'ФИО',-->
<!--						width: 100,-->
<!--						value: '',-->
<!--						mask: '',-->
<!--						error: null-->
<!--					},-->
<!--					{-->
<!--						name: 'phone',-->
<!--						component: 'input',-->
<!--						type: 'tel',-->
<!--						required: true,-->
<!--						placeholder: 'Телефон',-->
<!--						width: 100,-->
<!--						value: '',-->
<!--						mask: 'phone',-->
<!--						error: null-->
<!--					},-->
<!--				],-->
<!--				button: {-->
<!--					text: "Перезвоните мне",-->
<!--					disabled: false-->
<!--				}-->
<!--			}-->
<!--		}-->
<!--	},-->
<!--	methods: {-->
<!--		submit() {-->
<!--			this.form.button.disabled = true-->
<!--			this.form.inputs.map(input => {-->
<!--				console.log(input.name)-->
<!--				console.log(input.value)-->
<!--			})-->
<!--			this.form.button.disabled = false-->
<!--		},-->
<!--		handlerInput(name) {-->
<!--			//очищает поле с ошибкой-->
<!--			this.form.inputs.filter(obj => obj.name === name)[0].error = null-->
<!--		}-->
<!--	}-->
<!--}-->
<!--</script>-->