export class InMemoryDataService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        const products = [
            {
                id: 1,
                title: 'Sendwich',
                description: 'Descript line',
                image: 'https://theambrosia.com/476/veg-sandwich.jpg',
                price: 20,
                displayPrice: 30
            },
            {
                id: 2,
                title: 'Pizza',
                description: 'Descript line',
                image: 'http://www.dellapizza.com.br/imagens/dellacalabresa.jpg',
                price: 90,
                displayPrice: 130
            },
            {
                id: 3,
                title: 'Burger',
                description: '',
                image: 'https://theambrosia.com/451/classic-veg-burger.jpg',
                price: 33,
                displayPrice: 33
            },
            {
                Id: 4,
                title: 'French fries',
                description: '',
                image: 'http://www.johnnyrocketsnigeria.com/Starters/American-Fries.png',
                price: 66,
                displayPrice: 66
            }
        ];

        return { heroes, products };
    }
}
