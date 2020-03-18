export const changeIngredientsCount = (allIngredients, ingredient) => {
    return allIngredients.map((ing) => {
        if (ing.id === ingredient.id) {
            return { ...ing, quantity: ing.quantity + 1 };
        } else {
            return ing;
        }
    });
};

export const selectBaseSize = (pizzaBases, selectedBase) => {
    return pizzaBases.map((elm) => {
        if (elm.id === selectedBase.id) {
            return { ...elm, selected: true };
        } else {
            return { ...elm, selected: false };
        }
    });
};
