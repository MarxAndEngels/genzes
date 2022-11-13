export const state = () => ({
    benefitModal: false,
    benefit: {},
    benefitsCredit: ['dosrochnoe', 'srok', 'vznos', 'sum'],
    benefits: [
        {
            text: 'Досрочное погашение',
            text_strong: 'кредита без штрафа',
            icon: 'check1',
            slug: 'dosrochnoe',
        },
        {
            text: 'Срок кредитования',
            text_strong: 'от 6 месяцев до 7 лет',
            icon: 'check1',
            slug: 'srok',
        },
        {
            text: 'Первоначальный взнос',
            text_strong: 'от 0 рублей',
            icon: 'check1',
            slug: 'vznos',
        },
        {
            text: 'Сумма кредитования',
            text_strong: 'до 3 500 000 рублей',
            icon: 'check1',
            slug: 'sum',
        },
    ]
})
export const getters = {
    benefits(state) {
        return state.benefits
    },
    benefit: (state) => {
        return state.benefit
    },
    benefitsCredit: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsCredit.indexOf(item.slug) !== -1;
        })
    },
    benefitsTradeIn: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsTradeIn.indexOf(item.slug) !== -1;
        })
    },
    benefitsBuyout: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsBuyout.indexOf(item.slug) !== -1;
        })
    },
    benefitsCar: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsCar.indexOf(item.slug) !== -1;
        })
    },
    benefitsCreditMobile: (state) => {
        return state.benefits.filter((item) => {
            return state.benefitsCreditMobile.indexOf(item.slug) !== -1;
        })
    },
    benefitModal: (state) => {
        return state.benefitModal
    },
}