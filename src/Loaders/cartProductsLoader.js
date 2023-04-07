import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const loadedproducts = await fetch('products.json');
    const products = await loadedproducts.json();

    const storedCart = getShoppingCart();
    const savedCart = []
    console.log(storedCart);
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    // console.log(products)
    // if we needed to return two things at a time we should do following things
    // return [products, savedCart]
    // return {products, savedCart}
    return savedCart;
}

export default cartProductsLoader;