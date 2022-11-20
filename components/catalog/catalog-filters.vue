<template>
	<div class="catalog__filters-wrapper">
		<div class="catalog__filters"
		     v-if="true">
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
				<!-- <div class="select__wrapper select__wrapper--filter">
					<buttons-filter @click="filter" />
				</div> -->
			</div>

			 <!-- фильтр с ценой -->
		<div class="wrapper__filter_cost">
     <div class="wrapper__filter_cost_up">
       <div class="filter_cost_title">Цена ₽</div>
       
       <div class="wrapper__filter_cost_up_inputs">
         <span class="input_pretext">От</span>
     <input class="input_cost" type="text" @keypress="onlyNumber" v-model="presentationPriseFrom" @change="changePresentation" @keyup.enter="changePresentation">
     <span class="separator">-</span>
    <span class="input_pretext">До</span>
     <input class="input_cost" type="text" @keypress="onlyNumber" v-model="presentationPriseTo" @change="changePresentation" @keyup.enter="changePresentation">
       </div>
 
     </div>
     
     <span v-if="getPriceOptions">
   <client-only>
       <inputs-filter-range range-class="range-period" :options="getPriceOptions" :key="Math.random(11111111111111)*Math.random()"/>
   </client-only>
 </span>
 <span v-else>
   загрузка...
 </span>
   </div>
   <!-- <catalog-sort /> -->
 <!-- фильтр с ценой -->
		
		</div>
		<div class="catalog__filters-controllers">
			<!-- <div class="catalog__filters-button"
			     @click="setShowFilters(!showFilters)">
				<span v-if="showFilters">Скрыть фильтры -</span>
				<span v-else> Показать фильтры +</span>
			</div>
			<catalog-sort /> -->
			<!--<catalog-view/>-->
		</div>



	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import filters from "~/apollo/queries/offer/filters";
 import filtersMixin from "~/mixins/filters";

export default {
	   mixins: [filtersMixin],
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
			priceToValueServer: 0,
            currentPriceFrom: 0,
            currentPriceTo: 0,
            presentationPriseFrom: 0,
            presentationPriseTo: 0,
		}
	},
	watch: {
		// отправляю запрос когда поменялся route (пагинация и query параметры)
		// async '$route'() {
		// 	await this.getFilters(this.filterParams)
		// }
	},
	computed: {
		...mapGetters({
			catalogRoute: 'settings/catalogRoute',
			filters: 'filters/filters',
			showFilters: 'filters/showFilters'
		}),
		getPriceOptions() {
       return {
         type: 'double',
         grid: true,
         realTime: true,
         from: this.currentPriceFrom,
         to: this.currentPriceTo,
         min: 0,
         max: this.priceToValueServer,
         onFinish: (event) => this.priceSelect(event),
       }
     },
		
		// параметры для запроса фильтров
		filterParams() {
			return {
				mark_slug_array: this.setParam('mark'),
				folder_slug_array: this.setParam('folder'),
				year_from: Number(this.$route.query.yearFrom),
				
				generation_slug_array: this.$route.query.generation ? this.$route.query.generation : this.generation ? [this.generation.slug] : null,
				engine_type_id_array: this.engineType ? [this.engineType.id] : this.$route.query.engineType ? [Number(this.$route.query.engineType)] : null,
				body_type_id_array: this.bodyType ? [this.bodyType.id] : this.$route.query.bodyType ? [Number(this.$route.query.bodyType)] : null,
				gearbox_id_array: this.gearbox ? [this.gearbox.id] : this.$route.query.gearbox ? [Number(this.$route.query.gearbox)] : null,
			}
		},
		// selectFilterParams() {
		// 	return {
		// 		mark_slug_array: this.setParam('mark'),
		// 		folder_slug_array: this.setParam('folder'),
		// 		year_from: Number(this.$route.query.yearFrom),
		// 		generation_slug_array:  this.$route.query.generation ? [this.$route.query.generation] : null,
		// 		engine_type_id_array: this.$route.query.engineType ? [Number(this.$route.query.engineType)] : null,
		// 		body_type_id_array: this.$route.query.bodyType ? [Number(this.$route.query.bodyType)] : null,
		// 		gearbox_id_array: this.$route.query.gearbox ? [Number(this.$route.query.gearbox)] : null
		// 	}
		// }
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
			console.log(type)
			console.log(value)
			if (value === 'mark' || value === 'folder'|| value === 'generation') {
					this.resets()
				}
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
			this.filter()
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



   this.priceToValueServer = response.data.offerFilters.price[1];
 
           this.currentPriceFrom = response.data.offerFilters.price[0];
           this.currentPriceTo = response.data.offerFilters.price[1];
 
 
           //если есть запрос с ценой изменяю все инпуты с ценой
           if(this.$route.query.price_from){
             this.currentPriceFrom = Number(this.$route.query.price_from)
             this.changePresentationInputManipulation();
           }
           if(this.$route.query.price_to){
             this.currentPriceTo = Number(this.$route.query.price_to)
             this.changePresentation();
           }
           //если есть запрос с ценой изменяю все инпуты с ценой


this.changePresentationInputManipulation();

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
				price_from: this.currentPriceFrom,
                price_to: this.currentPriceTo,
                page: 1,
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
			if(params.price_from){
                queries.price_from = +params.price_from
            }
            if(params.price_to){
                queries.price_to = +params.price_to
            }
            if(params.page){
                queries.page = +params.page
            }
			return queries
		},

   resets(){
       this.currentYearFrom = null
       this.currentGearbox = null
       this.currentBodyType = null
       this.currentOwners = null
       this.currentEngineType = null
       this.currentDriveType = null
       this.currentPriceFrom = null
       this.currentPriceTo = null
     },

		 //выбор цены с двойного input range
     async priceSelect(event) {
       this.currentPriceFrom = event.from
       this.currentPriceTo = event.to
       this.changePresentationInputManipulation();
       await this.filter();
     },
 
         //изменение инпутов для презентации под удобный для пользователя формат 
     changePresentationInputManipulation(){
       let formatter = new Intl.NumberFormat("ru-RU", {
         style: "currency",
         currency: "RUB",
         minimumFractionDigits: 0,
       });
       this.presentationPriseFrom = formatter.format(this.currentPriceFrom);
       this.presentationPriseTo = formatter.format(this.currentPriceTo);
     },
 
          //изменение из инпутов для презентации в данные для отправки на сервер 
     async changePresentation(){
       this.presentationPriseFrom = String(this.presentationPriseFrom).replace(/\s/g, '').replace('₽', '')
       this.presentationPriseTo = String(this.presentationPriseTo).replace(/\s/g, '').replace('₽', '')
       let formatter = new Intl.NumberFormat("ru-RU", {
         style: "currency",
         currency: "RUB",
         minimumFractionDigits: 0,
       });
       this.presentationPriseFrom = formatter.format(this.presentationPriseFrom);
       this.presentationPriseTo = formatter.format(this.presentationPriseTo);
 
       this.currentPriceFrom = String(this.presentationPriseFrom).replace(/\s/g, '').replace('₽', '')
       this.currentPriceTo = String(this.presentationPriseTo).replace(/\s/g, '').replace('₽', '')
 
       await this.filter();
     },
 
     //проверка что вводится число
     onlyNumber ($event) {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
       $event.preventDefault();
    }
   },
	},


	mounted() {
		if (this.$device.isMobile) {
		this.setShowFilters(false)
		}
		this.changePresentationInputManipulation();
	},
	async fetch() {
		await this.getFilters(this.filterParams)
	}
	
}
</script>