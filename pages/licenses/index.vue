<template>
	<div>
		<h1 class="h1__title">{{ pageTitle }}</h1>
		<div class="banks__licenses">
			<div class="bank__table-head">
				<div>
					Наименование банка
				</div>
				<div>
					Действующая лицензия
				</div>
			</div>
			<div class="banks__license" v-for="bank in banks" :key="bank.id">
				<div class="banks__license-bank">
					{{bank.name}}
				</div>
				<a target="_blank" :href="bank.license_file" class="banks__license-link">
					открыть
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import seoTags from "@/mixins/seoTags";
import {mapGetters} from "vuex";

export default {
	mixins: [seoTags],
	computed: {
		...mapGetters({
			banks: 'banks/banks'
		})
	}
}
</script>