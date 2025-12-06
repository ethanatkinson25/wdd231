import { fetchProducts } from './filer.mjs';
export { displayProducts };
const container = document.getElementById('products-container');

function displayProducts(products) {
    container.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image"/>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="open-modal">Learn More</button>
        `;
        container.appendChild(productCard);

        const modal = document.getElementById('product-modal');
        const openModalBtn = productCard.querySelector('.open-modal');
        openModalBtn.addEventListener('click', () => {
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" class="modal-image"/>
                    <p>${product.long_description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Performance: ${product.performance}</p>
                </div>
            `;
            modal.classList.add('product-modal');
            modal.showModal();

            const closeButton = modal.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                modal.classList.add('fade-out');
                setTimeout(() => {
                    modal.close();
                    modal.classList.remove('product-modal', 'fade-out');
                }, 2000);
            });
        });
    });
}

fetchProducts();