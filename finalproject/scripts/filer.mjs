export { fetchProducts, priceToNumber };
import { displayProducts } from './displayproducts.js';
const dataUrl = 'data/products.json';
let allProducts = [];
const filterBtn = document.getElementById('filter-price-btn');
let filterActive = false;

function priceToNumber(priceStr) {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^0-9.-]+/g, ''));
}

async function fetchProducts() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        allProducts = data;
        displayProducts(allProducts);
        return allProducts;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        filterActive = !filterActive;
        if (filterActive) {
            const filtered = allProducts.filter(p => priceToNumber(p.price) >= 1000);
            displayProducts(filtered);
            filterBtn.textContent = 'Show: $1000+ (ON)';
            filterBtn.setAttribute('aria-pressed', 'true');
        } else {
            displayProducts(allProducts);
            filterBtn.textContent = 'Show: $1000+';
            filterBtn.setAttribute('aria-pressed', 'false');
        }
    });
}