<template>
	<div class="form form--credit">
		<h3 class="h3__title_form">
				Укажите данные автомобиля
		</h3>
		<div class="inputs">
			<div class="input__wrapper input__wrapper--form"
			     :class="{'input__wrapper--error': form.mark.valid === false}">
				<inputs-input placeholder="Марка"
				              @input="handlerInput('mark')"
				              v-model="form.mark.value"
				              type="text" />
			</div>
			<div class="input__wrapper input__wrapper--form"
			     :class="{'input__wrapper--error': form.model.valid === false}">
				<inputs-input placeholder="Модель"
				              @input="handlerInput('model')"
				              v-model="form.model.value"
				              type="text" />
			</div>
		</div>
		<div class="inputs">
			<div class="input__wrapper input__wrapper--form">
				<inputs-select :items="years_range"
				               :current-data="form.year"
				               @selected="changeSelect($event,'year')"
				               class="select" />
			</div>
			<div class="input__wrapper input__wrapper--form">
				<inputs-select :items="gearboxes"
				               :current-data="form.gearbox"
				               @selected="changeSelect($event,'gearbox')"
				               class="select" />
			</div>
		</div>
		<div class="inputs">
			<div class="input__wrapper input__wrapper--form"
			     :class="{'input__wrapper--error': form.owners.valid === false}">
				<inputs-input placeholder="Кол-во владельцев"
				              @input="handlerInput('owners')"
				              v-model="form.owners.value"
				              type="text" />
			</div>
			<div class="input__wrapper input__wrapper--form"
			     :class="{'input__wrapper--error': form.run.valid === false}">
				<inputs-input placeholder="Пробег"
				              @input="handlerInput('run')"
				              v-model="form.run.value"
				              type="text" />
			</div>
		</div>
		
		<div class="personal__data">
			<h3 class="h3__title_form">
				Укажите свои данные
			</h3>
			<div class="input__wrapper"
			     :class="{'input__wrapper--error': form.name.valid === false}">
				<inputs-input placeholder="ФИО"
				              @input="handlerInput('name')"
				              v-model="form.name.value"
				              type="text" />
			</div>
			<div class="inputs">
				<div class="input__wrapper"
				     :class="{'input__wrapper--error': form.phone.valid === false}">
					<inputs-input placeholder="Телефон"
					              @input="handlerInput('phone')"
					              v-model="form.phone.value"
					              mask="phone"
					              @phoneMaskComplete="form.phone.valid = true"
					              @onincomplete="form.phone.valid = null"
					              type="tel" />
				</div>
				<!--<div class="input__wrapper input__wrapper&#45;&#45;form"-->
				<!--     :class="{'input__wrapper&#45;&#45;error': form.date.valid === false}">-->
				<!--	<inputs-input placeholder="Дата рождения"-->
				<!--	              @input="handlerInput('date')"-->
				<!--	              v-model="form.date.value"-->
				<!--	              mask="date"-->
				<!--	              @dateMaskComplete="form.date.valid = true"-->
				<!--	              @onincomplete="form.date.valid = null"-->
				<!--	              type="tel" />-->
				<!--</div>-->
			
			</div>
			<inputs-checkbox :error="error==='agreeRf'"
			                 @change="changeCheckbox($event,'agreeRf')"
			                 title="Подтверждаю, что являюсь гражданином РФ" />
			<inputs-checkbox :error="error==='agree'"
			                 @change="changeCheckbox($event,'agree')"
			                 privacy
			                 :title="`Согласен на обработку <a href='/privacy' target='_blank'>персональных данных</a>`" />
			<buttons-form @click="submitForm('buyout')" text="Оставить заявку"/>
		</div>
	</div>
</template>

<script>
import formValidation from "@/mixins/formValidation";
import requests from "@/mixins/requests";


export default {
	mixins: [formValidation],
	props: {
		modal: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		locationSelect(option) {
			this.form.location.value = option
		},
	},
}
</script>