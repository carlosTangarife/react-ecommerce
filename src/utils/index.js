export const totalPrice = (products = []) => {
    return products.reduce((total, product) => total + product.price , 0)
}
