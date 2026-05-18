/**
 * Pawboo Enterprise Core Interaction Handler
 * Orchestrates dynamic local storage injection, rendering, and public queues.
 */

// Core Seed State Context
const defaultProducts = [
    {
        id: "prod-a",
        name: "Product A",
        price: "₹XXX",
        image: ""
    },
    {
        id: "prod-b",
        name: "Product B",
        price: "₹XXX",
        image: ""
    },
    {
        id: "prod-c",
        name: "Product C",
        price: "₹XXX",
        image: ""
    }
];

const defaultReviews = [
    {
        stars: 5,
        text: "The best pet hypermarket in Kochi. Took my cat for professional grooming here; the staff was incredibly gentle, patient, and professional. They used premium quality shampoos. High-density stock of international pet brands!",
        author: "Anjali R."
    },
    {
        stars: 5,
        text: "Finding parking near Kaloor/Kathrikadavu is usually a nightmare, but Pawboo has dedicated free parking right upfront. The inventory scale is unmatched—found the exact specialized prescription diet food I was looking for instantly.",
        author: "Rahul K."
    },
    {
        stars: 5,
        text: "Very transparent and economical pricing structure compared to other grooming studios in Ernakulam. The facility is pristine and odorless. Highly recommend their professional dog styling services.",
        author: "Aaron M."
    }
];

const defaultFAQs = [
    {
        question: "Are grooming sessions requiring prior scheduling configurations?",
        answer: "Yes, to retain strict pristine environment protocols, booking execution through the portal or service queue is highly recommended."
    },
    {
        question: "What variants of clinical nutrition lines are available?",
        answer: "We carry specialized global prescription diets including therapeutic gastrointestinal and high-density growth formulas."
    }
];

// App Initial State Instantiation
let currentProducts = JSON.parse(localStorage.getItem('pawboo_products')) || defaultProducts;
let currentFAQs = JSON.parse(localStorage.getItem('pawboo_faq_queue')) || defaultFAQs;
let adminModeActive = false;

// DOM Selectors Registry
const productGrid = document.getElementById('productGrid');
const reviewsContainer = document.getElementById('reviewsContainer');
const faqList = document.getElementById('faqList');
const adminToggleBtn = document.getElementById('adminToggleBtn');
const faqForm = document.getElementById('faqForm');
const faqInput = document.getElementById('faqInput');
const enterpriseInquiryForm = document.getElementById('enterpriseInquiryForm');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');

/**
 * Renders the E-Commerce Catalog grid dynamically.
 * Switches visual context based on active inline array configurations.
 */
function renderCatalog() {
    productGrid.innerHTML = '';
    
    currentProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = `product-card ${product.isEditing ? 'editing-mode-active' : ''}`;
        card.setAttribute('data-id', product.id);

        if (product.isEditing) {
            // Inline Administration Control Layout
            card.innerHTML = `
                <div class="edit-fields-container">
                    <label style="font-size:0.7rem; color:var(--text-secondary)">Product Identifier Name</label>
                    <input type="text" class="edit-input edit-name" value="${product.name}">
                    
                    <label style="font-size:0.7rem; color:var(--text-secondary)">Pricing Metric Structure</label>
                    <input type="text" class="edit-input edit-price" value="${product.price}">
                    
                    <label style="font-size:0.7rem; color:var(--text-secondary)">Image Absolute URL Path</label>
                    <input type="text" class="edit-input edit-image" value="${product.image}" placeholder="https://unsplash.com/...">
                    
                    <button class="btn btn-gold save-card-btn" style="margin-top:0.5rem; padding:0.4rem;">
                        <i data-lucide="save" style="width:14px;"></i> Save Values
                    </button>
                </div>
            `;
        } else {
            // Default Premium Client Surface Display
            const imgContent = product.image 
                ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
                : `<div class="product-img-placeholder"><i data-lucide="package" style="width:32px; height:32px;"></i><span>No Resource Linked</span></div>`;

            card.innerHTML = `
                <div class="card-admin-action">
                    <button class="btn-icon-only edit-card-btn" title="Modify Card Metrics">
                        <i data-lucide="settings-2" style="width:16px; height:16px;"></i>
                    </button>
                </div>
                <div>
                    <div class="product-img-wrapper">
                        ${imgContent}
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">${product.price}</div>
                    </div>
                </div>
                <button class="btn btn-secondary order-cta" onclick="triggerInquiryRedirect('${product.name}')">
                    Initiate Procurement <i data-lucide="shopping-bag" style="width:14px;"></i>
                </button>
            `;
        }
        productGrid.appendChild(card);
    });
    
    // Re-instantiate icons for newly injected structural fragments
    lucide.createIcons();
}

/**
 * Evaluates target component routing inputs and triggers contextual scrolling behavior.
 */
function triggerInquiryRedirect(productName) {
    document.getElementById('inquiries').scrollIntoView({ behavior: 'smooth' });
    const detailsField = document.getElementById('inquiryDetails');
    if (detailsField) {
        detailsField.value = `Procurement Request Matrix: Initializing immediate logistics verification route for product defined as "${productName}". Please verify current regional stock volumes.`;
        detailsField.focus();
    }
}

/**
 * Iterates through array objects and outputs structured components into the masonry parent block.
 */
function renderReviews() {
    reviewsContainer.innerHTML = '';
    defaultReviews.forEach(rev => {
        const card = document.createElement('div');
        card.className = 'review-card';
        
        let starsHTML = '';
        for(let i=0; i<rev.stars; i++) {
            starsHTML += `<i data-lucide="star" style="width:14px; height:14px; fill:var(--accent-gold)"></i>`;
        }

        card.innerHTML = `
            <div class="stars-row">${starsHTML}</div>
            <p class="review-text">"${rev.text}"</p>
            <div class="review-author">${rev.author}</div>
        `;
        reviewsContainer.appendChild(card);
    });
}

/**
 * Loops and builds dynamic component queue list fragments for the FAQ board.
 */
function renderFAQs() {
    faqList.innerHTML = '';
    currentFAQs.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `
            <div class="faq-q">${item.question}</div>
            <div class="faq-a">${item.answer}</div>
        `;
        faqList.prepend(div); // Keep newest entries anchored top
    });
}

// Global System Event Listener Implementations

// Toggle Global Administrator State Overlays
adminToggleBtn.addEventListener('click', () => {
    adminModeActive = !adminModeActive;
    document.body.classList.toggle('admin-active', adminModeActive);
    adminToggleBtn.classList.toggle('btn-gold', adminModeActive);
    
    if(!adminModeActive) {
        // Force complete commit of active transformations on close
        currentProducts.forEach(p => p.isEditing = false);
        renderCatalog();
    }
});

// Structural Intercept Grid Event Framework (Handles dynamic inner fields dynamically)
productGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const prodId = card.getAttribute('data-id');
    const targetProduct = currentProducts.find(p => p.id === prodId);

    // Clicked Settings Gear
    if (e.target.closest('.edit-card-btn')) {
        targetProduct.isEditing = true;
        renderCatalog();
        return;
    }

    // Clicked Save Operations Frame
    if (e.target.closest('.save-card-btn')) {
        targetProduct.name = card.querySelector('.edit-name').value.trim() || targetProduct.name;
        targetProduct.price = card.querySelector('.edit-price').value.trim() || targetProduct.price;
        targetProduct.image = card.querySelector('.edit-image').value.trim();
        targetProduct.isEditing = false;
        
        // Persist local context array parameters
        localStorage.setItem('pawboo_products', JSON.stringify(currentProducts));
        renderCatalog();
    }
});

// Component A Form Processing Router
faqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const queryStr = faqInput.value.trim();
    if(!queryStr) return;

    const queryInstance = {
        question: queryStr,
        answer: "Automated Protocol Response: System routing verified. A Pawboo processing representative will explicitly append a verified validation parameter within 120 minutes."
    };

    currentFAQs.push(queryInstance);
    localStorage.setItem('pawboo_faq_queue', JSON.stringify(currentFAQs));
    
    renderFAQs();
    lucide.createIcons();
    faqForm.reset();
});

// Component B Structured Client Submission
enterpriseInquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a production server layout, target API parameters parse and execute transport operations here.
    // Display System Response Modal Target Overlay
    successModal.classList.add('active');
    enterpriseInquiryForm.reset();
});

// Modal Close Intercept Form Control
closeModalBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
});

// Close modal if user interacts outside bounding dimensions
successModal.addEventListener('click', (e) => {
    if(e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// Core Application Component Mount Sequence Initialization
renderCatalog();
renderReviews();
renderFAQs();
