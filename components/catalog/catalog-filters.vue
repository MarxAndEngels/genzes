<template>
	<div class="catalog__filters-wrapper">
		<div class="catalog__filters"
		     v-if="showFilters">
			<h2 class="h2__title">Подобрать автомобиль</h2>
			<div class="filters__list">
				<div class="select__wrapper select__wrapper--filter"
				     v-for="filter in filtersArray"
				     :key="filter.slug">
					<inputs-select
							:items="filters[filter.slug]"
							:title="filter.title"
							:disabled="isDisabled(filter.slug)"
							:range="filter.range"
							:current-data="$data[filter.slug] ? $data[filter.slug] : null"
							@selected="selected(filter.slug, $event)" />
				</div>
				<div class="select__wrapper select__wrapper--filter">
					<buttons-filter @click="filter" />
				</div>
			</div>
		
		</div>
		<div class="catalog__filters-controllers">
			<div class="catalog__filters-button"
			     @click="setShowFilters(!showFilters)">
				<span v-if="showFilters">Скрыть фильтры -</span>
				<span v-else> Показать фильтры +</span>
			</div>
			<catalog-sort />
			<!--<catalog-view/>-->
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import filters from "~/apollo/queries/offer/filters";

export default {
	data() {
		return {
			//тут прописываю нужные фильтры с параметрами
			filtersArray: [
				{
					title: 'Марка',
					slug: 'mark',
					dependence: ['queries', 'folder', 'generation']
				},
				{
					title: 'Модель',
					slug: 'folder',
					dependence: ['queries', 'generation']
				},
				{
					title: 'Поколение',
					slug: 'generation',
					dependence: ['queries']
				},
				{
					title: 'Год от',
					slug: 'year',
					type: 'yearFrom',
					isId: true,
					range: true,
					dependence: []
				},
				{
					title: 'Двигатель',
					slug: 'engineType',
					dependence: []
				},
				{
					title: 'Тип кузова',
					slug: 'bodyType',
					dependence: []
				}, {
					title: 'Коробка',
					slug: 'gearbox',
					dependence: []
				},
			],
			chosen: {},
			mark: null,
			folder: null,
			generation: null,
			year: null,
			engineType: null,
			bodyType: null,
			gearbox: null,
		}
	},
	watch: {
		// отправляю запрос когда поменялся route (пагинация и query параметры)
		async '$route'() {
			await this.getFilters(this.filterParams)
		}
	},
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute',
			filters: 'filters/filters',
			showFilters: 'filters/showFilters'
		}),
		
		// параметры для запроса фильтров
		filterParams() {
			return {
				mark_slug_array: this.setParam('mark'),
				folder_slug_array: this.setParam('folder'),
				year_from: Number(this.$route.query.yearFrom),
				
				generation_slug_array: this.generation ? [this.generation.slug] : this.$route.query.generation ? this.$route.query.generation : null,
				engine_type_id_array: this.engineType ? [this.engineType.id] : this.$route.query.engineType ? [Number(this.$route.query.engineType)] : null,
				body_type_id_array: this.bodyType ? [this.bodyType.id] : this.$route.query.bodyType ? [Number(this.$route.query.bodyType)] : null,
				gearbox_id_array: this.gearbox ? [this.gearbox.id] : this.$route.query.gearbox ? [Number(this.$route.query.gearbox)] : null,
			}
		},
		selectFilterParams() {
			return {
				mark_slug_array: this.setParam('mark'),
				folder_slug_array: this.setParam('folder'),
				year_from: Number(this.$route.query.yearFrom),
				generation_slug_array:  this.$route.query.generation ? [this.$route.query.generation] : null,
				engine_type_id_array: this.$route.query.engineType ? [Number(this.$route.query.engineType)] : null,
				body_type_id_array: this.$route.query.bodyType ? [Number(this.$route.query.bodyType)] : null,
				gearbox_id_array: this.$route.query.gearbox ? [Number(this.$route.query.gearbox)] : null
			}
		}
	},
	methods: {
		...mapActions({
			request: 'request/request'
		}),
		...mapMutations({
			setShowFilters: 'filters/SET_SHOW_FILTERS',
			setFilters: 'filters/SET_FILTERS'
		}),
		isDisabled(slug){
			return this.filters[slug] === null
		},
		//функция помощник
		setParam(param) {
			if (param) {
				return this[param] ? [this[param].slug] : this.$route.params[param] ? [this.$route.params[param]] : null
			} else return null
		},
		//выбираю что-либо
		async selected(type, value) {
			this[type] = value
			//очищаю select-ы в зависимости от зависимостей
			let dependence = this.filtersArray.filter(item => item.slug === type)[0].dependence
			dependence.map(value => {
				if (value === 'folder') {
					this.folder = null
				}
				if (value === 'generation') {
					this.generation = null
				}
				if (value === 'queries') {
					this.year = null
					this.engineType = null
					this.bodyType = null
					this.gearbox = null
				}
			})
			// запрос на фильтры с актуальными параметрами
			console.log(this.filterParams)
			await this.getFilters(this.filterParams)
		},
		async getFilters(params) {
			try {
				let response = await this.request({
					query: filters,
					variables: params
				})
				this.setFilters(response.data.offerFilters)
				this.chosen = response.data.offerFilters.chosen
				// записываю в поля ответ с сервера, чтобы при перезагрузке стр все отображалось
				this._.forEach(response.data.offerFilters.chosen, (value, key) => {
					if (value) {
						this[key] = value[0]
					}
				})
			} catch (error) {
				console.log(error)
			}
		},
		
		filter() {
			let pathParams = {
				mark: this.mark,
				folder: this.folder,
			}
			let queryParams = {
				yearFrom: this.year,
				engineType: this.engineType,
				bodyType: this.bodyType,
				gearbox: this.gearbox,
				sort: this.sort || null,
				generation: this.generation,
				// owners: this.currentOwners,
				// driveType: this.currentDriveType,
				
			}
			this.$router.push({path: this.currentPath(pathParams), query: this.currentQueries(queryParams)})
		},
		currentPath(params) {
			let path = '/' + this.catalogRoute
			
			if (params.mark) {
				path += '/' + params.mark.slug
			}
			if (params.folder) {
				path += '/' + params.folder.slug
			}
			return path
		},
		currentQueries(params) {
			let queries = {}
			if (params.bodyType) {
				queries.bodyType = params.bodyType.id
			}
			if (params.yearFrom) {
				queries.yearFrom = params.yearFrom
			}
			if (params.owners) {
				queries.owners = params.owners.id
			}
			if (params.gearbox) {
				queries.gearbox = params.gearbox.id
			}
			if (params.driveType) {
				queries.driveType = params.driveType.id
			}
			if (params.engineType) {
				queries.engineType = params.engineType.id
			}
			if (params.sort) {
				queries.sort = params.sort
			}
			if (params.generation) {
				queries.generation = params.generation.slug
			}
			return queries
		},
	},
	async fetch() {
		await this.getFilters(this.filterParams)
	}
	
}
</script>