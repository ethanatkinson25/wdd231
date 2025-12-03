const dataUrl = 'data/products.json';

async function fetchProducts() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        console.log(data);
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

fetchProducts();