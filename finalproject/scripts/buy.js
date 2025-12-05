const dataUrl = 'data/products.json';
const productSelect = document.getElementById('product-select');
const form = document.querySelector('form');

async function fetchProducts() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        populateProductSelect(data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function populateProductSelect(products) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = `${product.name} - ${product.price}`;
        productSelect.appendChild(option);
    });
}

function saveFormData(event) {
    event.preventDefault();

    const formData = {
        product: document.getElementById('product-select').value,
        quantity: document.getElementById('quantity').value,
        name: document.getElementById('buyer-name').value,
        email: document.getElementById('buyer-email').value,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('purchaseForm', JSON.stringify(formData));
    console.log('Form data saved to local storage:', formData);
}

form.addEventListener('submit', saveFormData);

fetchProducts();

//const savedData = JSON.parse(localStorage.getItem('purchaseForm'));
// console.log(savedData);