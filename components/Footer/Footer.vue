<template>
	<div class="footer">
		<div class="container">
			<div class="footer__inner">
				<div class="footer__nav">
					<div class="footer__nav-item footer__nav-item--logo">
						<nuxt-link to="/"
						           class="footer__nav-item-link">
							<img v-if="isMirror" src="~/assets/img/logo-mirror.svg"
							     alt="">
							<img v-else src="~/assets/img/logo.svg"
							     alt="">
						</nuxt-link>
					</div>
					<div class="footer__nav-item">
						<div class="footer__nav-item-title">
							АВТОМОБИЛИ
						</div>
						<nuxt-link :to="`/${catalogRoute}`"
						           class="footer__nav-item-link">C пробегом
						</nuxt-link>
					</div>
					<div class="footer__nav-item">
						<div class="footer__nav-item-title">
							УСЛУГИ
						</div>
						<nuxt-link :to="'/credit'"
						           class="footer__nav-item-link">Автокредитование
						</nuxt-link>
						<nuxt-link :to="'/exchange'"
						           class="footer__nav-item-link">Trade-in
						</nuxt-link>
						<nuxt-link :to="'/buyout'"
						           class="footer__nav-item-link">Выкуп
						</nuxt-link>
					</div>
					<div class="footer__nav-item">
						<div class="footer__nav-item-title">
							О КОМПАНИИ
						</div>
						<nuxt-link :to="'/about'"
						           class="footer__nav-item-link">Об автосалоне
						</nuxt-link>
						<nuxt-link :to="'/contacts'"
						           class="footer__nav-item-link">Контакты
						</nuxt-link>
						<nuxt-link :to="'/banks'"
						           class="footer__nav-item-link">Банки партнеры
						</nuxt-link>
					</div>
					<div class="footer__nav-item">
						<div class="footer__nav-item-title">
							ПОПУЛЯРНЫЕ МАРКИ
						</div>
						<nuxt-link :to="'/'+catalogRoute+'/ford'"
						           class="footer__nav-item-link">Ford
						</nuxt-link>
						<nuxt-link :to="'/'+catalogRoute+'/volkswagen'"
						           class="footer__nav-item-link">Volkswagen
						</nuxt-link>
						<nuxt-link :to="'/'+catalogRoute+'/hyundai'"
						           class="footer__nav-item-link">Hyundai
						</nuxt-link>
					</div>
				</div>
				<div class="footer__legal">
					{{ settings.legal }}
				</div>
				<div class="footer__links">
					<nuxt-link to="/licenses">Лицензии банков</nuxt-link>
					<nuxt-link to="/privacy">Правовая информация</nuxt-link>
				</div>
				<div class="footer__desc">
					<texts-footer />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute',
			settings: 'settings/settings',
			isMirror: 'settings/isMirror'
		})
	}
}
</script>