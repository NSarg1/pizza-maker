const pizzaIngredients = [
    {
        id: 'ingredient-1',
        name: 'olive',
        weight: 0.1,
        price: 0.3,
        type: 'ingredient',
        quantity: 0,
    },
    {
        id: 'ingredient-2',
        name: 'tomato',
        weight: 0.3,
        price: 0.2,
        type: 'ingredient',
        quantity: 0,
    },
    {
        id: 'ingredient-3',
        name: 'greens',
        weight: 0.05,
        price: 0.1,
        type: 'ingredient',
        quantity: 1,
    },
    {
        id: 'ingredient-4',
        name: 'mashrooms',
        weight: 0.1,
        price: 0.5,
        type: 'ingredient',
        quantity: 0,
    },
    {
        id: 'ingredient-5',
        name: 'sausage',
        weight: 0.3,
        price: 0.5,
        type: 'ingredient',
        quantity: 0,
    },
];

const pizzaBaseSizes = [
    { id: 'base-1', name: 'SMALL', size: 0.9, weight: 0.2, price: 1, type: 'base', selected: false },
    { id: 'base-2', name: 'MEDIUM', size: 1, weight: 0.4, price: 2, type: 'base', selected: true },
    { id: 'base-3', name: 'BIG', size: 1.1, weight: 0.6, price: 3, type: 'base', selected: false },
];

console.log(
    pizzaIngredients.reduce((acc, curr) => {
        return acc + curr.quantity * ;
    }, 0)
);
