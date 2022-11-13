<template>
	<div class="header"
	     :class="{'header--fixed': fixed}">
		<div class="container">
			<div class="header__main">
				<header-burger :active="openMenu" @click="openMenu = !openMenu" />
				<header-city/>
				<header-nav :active="openMenu" @click="openMenu = false"/>
				<header-logo @click="openMenu = false"/>
				<header-phone />
				<header-favorites />
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions} from "vuex";

export default {
	components: {},
	
	data() {
		return {
			openMenu: false,
			menuOpen: false,
		}
	},
	props: {
		fixed: Boolean
	},
	methods: {
		...mapActions({
			getLikes: 'favorite/getLikes'
		})
	},
	mounted() {
		this.getLikes()
	}
}
</script>