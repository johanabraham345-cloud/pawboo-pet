/**
 * Pawboo supply Inventory State Controller
 * Orchestrates local state parameters, real-time filters, and interactive interfaces.
 */

const defaultProducts = [
    {
        id: "supply-1",
        name: "Premium Salmon Kibble Formula",
        category: "foods",
        price: "₹XXX",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc109?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "supply-2",
        name: "Ergonomic Control Tactical Harness",
        category: "care",
        price: "₹XXX",
        image: "https://images.unsplash.com/photo-1544567708-827a79119a78?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "supply-3",
        name: "Enzymatic Odor & Stain Eliminator",
        category: "cleaning",
        price: "₹XXX",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
    }
];

const defaultReviews = [
    { stars: 5, text: "Switched from generic local shops to Pawboo's tactical harness supplies. The hardware construction is elite. Unmatched UI tracking flow on their store dashboard.", author: "Devanand K." },
    { stars: 5, text: "Their enzymatic cleaning solutions cleared out heavy cage odors instantly. Safe formulation components, clear labels, and immediate booking validation responses.", author: "Meera Nair" },
    { stars: 5, text: "Cleanest supply acquisition experience. Excellent high-density selection of veterinary supplements and clinical diets.", author: "Gautham S." }
];

const defaultFAQs = [
    { question: "Are the sanitation formulas safe around high-sensitivity felines?", answer: "Yes, all sanitation solutions are certified free of toxic phenols and ammonia variants." },
    { question: "Can we request custom bulk imports of specific clinical food sizes?", answer: "Certainly. Open an infrastructure query at the direct desk with details to initialize tracking." }
];

// App Core Local Storage Initialization
let currentProducts = JSON.parse(localStorage.getItem('pawboo_supply_data')) || defaultProducts;
let currentFAQs = JSON.parse(localStorage.getItem('pawboo_supply_faqs')) || defaultFAQs;
let activeCategoryFilter = "all";
let adminModeActive = false;

// DOM Selectors
const productGrid = document.getElementById('productGrid');
const reviewsContainer = document.getElementById('reviewsContainer');
const faqList = document.getElementById('faqList');
const adminToggleBtn = document.getElementById('adminToggleBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const faqForm = document.getElementById('faqForm');
const faqInput = document.getElementById('faqInput');
const enterpriseInquiryForm = document.getElementById('enterpriseInquiryForm');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');

/**
 * Parses current state context array properties and builds elements inside the product catalog grid.
 */
function renderCatalog() {
    productGrid.innerHTML = '';
    
    // Filter logic pipeline
    const itemsToRender = activeCategoryFilter === 'all' 
        ? currentProducts 
        : currentProducts.filter(p => p.category === activeCategoryFilter);

    if(itemsToRender.length === 0) {
        productGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 4rem 0;">No active stock items listed under this structural profile. Toggle Control Panel to inject values.</div>`;
        return;
    }

    itemsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);

        if (product.isEditing) {
            card.innerHTML = `
                <div class="edit-fields-container">
                    <label>Supply Name</label>
                    <input type="text" class="edit-input edit-name" value="${product.name}">
                    
                    <label>Supply Category</label>
                    <select class="edit-input edit-category">
                        <option value="foods" ${product.category === 'foods' ? 'selected' : ''}>Premium Foods</option>
                        <option value="care" ${product.category === 'care' ? 'selected' : ''}>Animal Care & Tools</option>
                        <option value="cleaning" ${product.category === 'cleaning' ? 'selected' : ''}>Cleaning Products</option>
                    </select>

                    <label>Price Value Metric</label>
                    <input type="text" class="edit-input edit-price" value="${product.price}">
                    
                    <label>Image Resource Path URL</label>
                    <input type="text" class="edit-input edit-image" value="${product.image}">
                    
                    <button class="btn btn-gold save-card-btn" style="margin-top:0.5rem; padding:0.5rem; justify-content:center;">
                        <i data-lucide="check" style="width:16px;"></i> Commit Changes
                    </button>
                </div>
            `;
        } else {
            const readableCategory = product.category === 'foods' ? 'Premium Foods' : product.category === 'care' ? 'Care & Tools' : 'Cleaning Product';
            card.innerHTML = `
                <div class="card-admin-action">
                    <button class="btn-icon-only edit-card-btn" title="Modify State Data">
                        <i data-lucide="edit-3" style="width:16px; height:16px;"></i>
                    </button>
                </div>
                <div>
                    <div class="product-img-wrapper">
                        <img src="${product.image || 'https://images.unsplash.com/photo-1535268647977-a403b69fc756?auto=format&fit=crop&w=600&q=80'}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <span class="product-category-tag">${readableCategory}</span>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">${product.price}</div>
                    </div>
                </div>
                <button class="btn btn-secondary" onclick="routeProcurementQuery('${product.name}')" style="justify-content:center; width:100%;">
                    Procure Resource <i data-lucide="arrow-up-right" style="width:14px;"></i>
                </button>
            `;
        }
        productGrid.appendChild(card);
    });
    lucide.createIcons();
}

/**
 * Routes context details to fields down inside the central engagement desk.
 */
function routeProcurementQuery(itemName) {
    document.getElementById('inquiries').scrollIntoView({ behavior: 'smooth' });
    const detailsField = document.getElementById('inquiryDetails');
    if (detailsField) {
        detailsField.value = `Procurement Request Routing Matrix:\nInitializing tracking validation protocol parameters for specified item identity: "${itemName}".\nVerify availability timelines immediately.`;
        detailsField.focus();
    }
}

function renderReviews() {
    reviewsContainer.innerHTML = '';
    defaultReviews.forEach(rev => {
        const card = document.createElement('div');
        card.className = 'review-card';
        let starsHTML = Array(rev.stars).fill('<i data-lucide="star" style="width:14px; height:14px; fill:var(--accent-gold)"></i>').join('');
        card.innerHTML = `<div class="stars-row">${starsHTML}</div><p class="review-text">"${rev.text}"</p><div class="review-author">${rev.author}</div>`;
        reviewsContainer.appendChild(card);
    });
}

function renderFAQs() {
    faqList.innerHTML = '';
    currentFAQs.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `<div class="faq-q">${item.question}</div><div class="faq-a">${item.answer}</div>`;
        faqList.prepend(div);
    });
}

// Category Navigation Intercept Handler
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategoryFilter = btn.getAttribute('data-category');
        renderCatalog();
    });
});

// Admin System Controls Toggles
adminToggleBtn.addEventListener('click', () => {
    adminModeActive = !adminModeActive;
    document.body.classList.toggle('admin-active', adminModeActive);
    adminToggleBtn.classList.toggle('btn-gold', adminModeActive);
    if(!adminModeActive) {
        currentProducts.forEach(p => p.isEditing = false);
        renderCatalog();
    }
});

// Grid Inner Element Intercept Handling
productGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const prodId = card.getAttribute('data-id');
    const targetProduct = currentProducts.find(p => p.id === prodId);

    if (e.target.closest('.edit-card-btn')) {
        targetProduct.isEditing = true;
        renderCatalog();
        return;
    }

    if (e.target.closest('.save-card-btn')) {
        targetProduct.name = card.querySelector('.edit-name').value.trim() || targetProduct.name;
        targetProduct.category = card.querySelector('.edit-category').value;
        targetProduct.price = card.querySelector('.edit-price').value.trim() || targetProduct.price;
        targetProduct.image = card.querySelector('.edit-image').value.trim();
        targetProduct.isEditing = false;
        
        localStorage.setItem('pawboo_supply_data', JSON.stringify(currentProducts));
        renderCatalog();
    }
});

// Form Submissions Controls pipelines
faqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = faqInput.value.trim();
    if(!val) return;
    currentFAQs.push({ question: val, answer: "Automated Desk Protocol: Security tracking link attached. System routing will finalize verification and provide answers within 2 hours." });
    localStorage.setItem('pawboo_supply_faqs', JSON.stringify(currentFAQs));
    renderFAQs();
    lucide.createIcons();
    faqForm.reset();
});

enterpriseInquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    successModal.classList.add('active');
    enterpriseInquiryForm.reset();
});

closeModalBtn.addEventListener('click', () => { successModal.classList.remove('active'); });
successModal.addEventListener('click', (e) => { if(e.target === successModal) successModal.classList.remove('active'); });

// Core Initialization Entry
renderCatalog();
renderReviews();
renderFAQs();
