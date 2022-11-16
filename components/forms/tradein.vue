<template>
	<div class="form form--credit">
		<div class="form__chose-car"
		     v-if="!modal">
			<h3 class="h3__title_form">
				Выберите автомобиль
			</h3>
			<div class="selects">
				<div class="input__wrapper input__wrapper--form">
					<inputs-select :items="marks"
					               :current-data="chosenMark"
					               title="Марка"
					               @selected="markSelect"
					               class="select" />
				</div>
				<div class="input__wrapper input__wrapper--form">
					<inputs-select :items="folders"
					               :current-data="chosenFolder"
					               title="Модель"
					               :disabled="folders.length === 0"
					               @selected="folderSelect"
					               class="select" />
				</div>
				<div class="offers__list"
				     v-if="offers.length && !this.chosenOffer">
					<offer-small @chose="choseOffer(offer)"
					             chose
					             :offer="offer"
					             v-for="offer in offers"
					             :key="offer.id" />
				</div>
				<div v-if="chosenOffer"
				     class="offer__chosen">
					<div class="chose__another" @click="chosenOffer = null">
						Выбрать другой автомобиль -
					</div>
					<offer-small :offer="chosenOffer" />
				</div>
			</div>
		</div>
		<div class="credit__conditions"
		     v-if="!modal">
			<h3 class="h3__title_form">
				Кредитные условия
			</h3>
			<forms-credit-calculator :offer="modalOffer || chosenOffer"/>
		</div>
		<div class="modal__chosen" v-if="modal">
			<offer-small :offer="modalOffer" />
		</div>
		<h3 class="h3__title_form">
			Укажите данные вашего автомобиля
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
			<buttons-form @click="submitForm('trade-in')" text="Оставить заявку на Trade-in"/>
		</div>
	</div>
</template>

<script>
import formValidation from '~/mixins/formValidation'
import requests from '~/mixins/requests'
import {mapGetters} from "vuex";

export default {
	data() {
		return {
			chosenMark: null,
			chosenFolder: null,
			chosenOffer: null,
			folders: [],
			offers: []
		}
	},
	computed: {
		...mapGetters({
			modalOffer: 'modal/modalOffer'
		})
	},
	mixins: [formValidation, requests],
	props: {
		modal: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		async markSelect(option) {
			this.chosenMark = option
			this.folders = await this.getFolders(this.chosenMark.slug, false)
		},
		async folderSelect(option) {
			this.chosenFolder = option
			this.offers = await this.getOffers({
				mark_slug_array: [this.chosenMark.slug],
				folder_slug_array: [this.chosenFolder.slug],
				page: 1,
				limit: 20
			}, false)
		},
		async choseOffer(offer) {
			this.chosenOffer = offer
		},
		locationSelect(option) {
			this.form.location.value = option
		},
	},
}
</script>