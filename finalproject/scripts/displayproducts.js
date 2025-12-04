const dataUrl = 'data/products.json';
const container = document.getElementById('products-container');

async function fetchProducts() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        displayProducts(data);
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function displayProducts(products) {
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
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Performance:</strong> ${product.performance}</p>
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