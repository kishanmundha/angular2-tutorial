export class InMemoryDataService {
    createDb() {
        const products = [
            {
                id: 1,
                name: 'Sandwich',
                description: 'Descript line',
                image: 'assets/img/products/sandwich.jpg',
                price: 20,
                displayPrice: 30
            },
            {
                id: 2,
                name: 'Pizza',
                description: 'Descript line',
                image: 'assets/img/products/pizza.jpg',
                price: 90,
                displayPrice: 130
            },
            {
                id: 3,
                name: 'Burger',
                description: '',
                image: 'assets/img/products/burger.jpg',
                price: 33,
                displayPrice: 33
            },
            {
                Id: 4,
                name: 'French fries',
                description: '',
                image: 'assets/img/products/french-fries.jpg',
                price: 66,
                displayPrice: 66
            },
            {
                id: 5,
                name: 'Dahi Vada',
                description: '',
                image: 'assets/img/products/dahi-vada.jpg',
                price: 40,
                displayPrice: 40
            }
        ];

        return { products };
    }
}
