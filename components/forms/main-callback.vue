<template>
	<div class="form">
		<h2 class="h2__title h2__title--no-margin-top">
			Форма обратного звонка
		</h2>
		<div class="contacts__form-controls">
			<div class="input__wrapper"
			     :class="{'input__wrapper--error': form.name.valid === false}">
				<inputs-input placeholder="ФИО"
				              @input="handlerInput('name')"
				              v-model="form.name.value"
				              type="text" />
			</div>
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
			<!--<div class="input__wrapper"-->
			<!--     :class="{'input__wrapper&#45;&#45;error': form.date.valid === false}">-->
			<!--	<inputs-input placeholder="Дата рождения"-->
			<!--	              @input="handlerInput('date')"-->
			<!--	              v-model="form.date.value"-->
			<!--	              mask="date"-->
			<!--	              @dateMaskComplete="form.date.valid = true"-->
			<!--	              @onincomplete="form.date.valid = null"-->
			<!--	              type="tel" />-->
			<!--</div>-->
			<inputs-checkbox :error="error==='agreeRf'"
			                 @change="changeCheckbox($event,'agreeRf')"
			                 title="Подтверждаю, что являюсь гражданином РФ" />
			<inputs-checkbox :error="error==='agree'"
			                 @change="changeCheckbox($event,'agree')"
			                 privacy
			                 :title="`Согласен на обработку <a href='/privacy' target='_blank'>персональных данных</a>`" />
			<buttons-form @click="submitForm('callback')" text="Перезвоните мне"/>
		</div>
	</div>
</template>

<script>
import formValidation from "@/mixins/formValidation";

export default {
	mixins: [formValidation]
}
</script>
