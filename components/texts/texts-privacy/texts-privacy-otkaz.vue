<template>
	<div>
		<h2 class="h2__title h2__title--no-margin-top">Отказ от заверений и гарантий</h2>
		<p class="text__p">
			Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационно-ознакомительный характер
			и ни при каких условиях не является публичной офертой, определяемой положениями Гражданского кодекса Российской
			Федерации. Для получения подробной информации о стоимости, комплектации, приобретении в кредит, страховании,
			техническом обслуживании и ремонте, запасных частях, дополнительном оборудовании, аксессуарах и т.п. обращайтесь к
			менеджерам по продажам, либо по форме обратной связи на сайте
		</p>
		<p class="text__p">
			Некоторые представленные на фото автомобили могут содержать оборудование не российского производства. Некоторые
			модели могут быть показаны с факультативным оборудованием. Реальный вид автомобилей, узлов, агрегатов, запчастей и
			иных товаров может отличаться от представленного на сайте изображения. Более подробные сведения можно получить,
			обратившись по телефону, либо по форме обратной связи
		</p>
		<p class="text__p">
			{{domain}} может в любой момент изменить информацию, содержащуюся на этих веб-страницах, обновив сайт.
			{{domain}} принимает все разумные меры для предоставления на этом сайте точной информации, однако никаких
			гарантий или заверений по поводу точности не дает.
		</p>
		<h2 class="h2__title">Точность сведений</h2>
		<p class="text__p">
			Все цены, спецификации и описания оборудования основаны на информации, доступной на момент публикации, и могут
			быть изменены без уведомления. {{domain}} не дает никаких гарантий, явных или подразумеваемых, в отношении
			точности приведенных сведений.
		</p>
		<p class="text__p">
			Сведения о ценах на продукцию, содержащиеся на сайте, носят исключительно информационный характер. Указанные цены
			могут отличаться от действительных цен. Для получения подробной информации об актуальных ценах на продукцию
			обращайтесь к менеджерам по продажам по телефону, либо по форме обратной связи на сайте. Приобретение любой
			продукции, представленной на сайте {{domain}}, осуществляется в соответствии с условиями индивидуального договора
			купли-продажи. Представленное изображение автомобиля может отличаться от реализуемого.
		</p>
		<h2 class="h2__title">Опции и спецификации</h2>
		<p class="text__p">
			{{domain}} оставляет за собой право в любой момент без уведомления и, не принимая на себя никаких обязательств,
			вносить изменения, касающиеся окраски, материалов, спецификаций, технических характеристик, опций, принадлежностей
			и комплектации. Некоторые демонстрируемые здесь автомобили могут содержать факультативное оборудование.
			Публикацией и распространением настоящего веб-сайта {{domain}} не дает никаких гарантий, явных или
			подразумеваемых, ни на какие изделия и не принимает на себя никаких обязательств. За деталями обращайтесь к
			менеджерам по продажам по телефону, или по форме обратной связи на сайте.
		</p>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			domain: 'settings/domain'
		})
	},
}
</script>