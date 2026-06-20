import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKGcUowpHexvRT1nvQS_bV0Qcie4AZaig",
  authDomain: "pawboo.firebaseapp.com",
  projectId: "pawboo",
  storageBucket: "pawboo.firebasestorage.app",
  messagingSenderId: "293393938296",
  appId: "1:293393938296:web:70e4c998594571bcc47a8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const STORE_PHONE = "919961382604";
const MAP_QUERY = "Pawboo Pets";
const OWNER_EMAILS = [
  "johanabraham345@gmail.com",
  "xxx@gmail.com"
];
const OWNER_EMAIL = OWNER_EMAILS[0];
const STORAGE_KEYS = {
  cart: "pawbooCartV2",
  theme: "pawbooTheme",
  ownerEmail: "pawbooOwnerEmail"
};

const packages = [
  { name: "Essential Bath", price: 799, text: "Bath, brush, blow dry, ear cleaning, and fragrance finish." },
  { name: "Full Groom", price: 1499, text: "Bath, haircut, nail clipping, paw trim, hygiene trim, and coat styling." },
  { name: "Puppy Intro", price: 699, text: "Gentle first grooming session for puppies with comfort handling." },
  { name: "Cat Care Session", price: 1299, text: "Comb-out, nail care, dry bath option, and mat control for cats." }
];

const defaultReviews = [
  {
    name: "Mohamed Ridhaf",
    rating: 5,
    text: "I had a fantastic experience at Pawboo Pet Grooming Studio! The staff are incredibly kind and clearly love what they do. They took such good care of my pet and made sure he was comfortable throughout the grooming session. He came out looking adorable, smelling fresh! The studio is clean, well-organized, and has a warm, welcoming vibe. I really appreciate their attention to detail and how gentle they were. Highly recommend Pawboo to any pet parent looking for top-notch grooming services!",
    photo: "assets/reviews/customer-1-pfp-mohamed-ridhaf.png"
  },
  {
    name: "Aleene",
    rating: 5,
    text: "It is safe to say my pet are extremely happy and satisfied after grooming section today at Pawboo. Thanks to the owner and groomers for an amazing experience. I always recommend this place to all the pet parents. I am waiting to come back soon with my pet for another grooming section.",
    photo: "assets/reviews/customer-2-aleena-xavier.png"
  },
  {
    name: "Sreekanth A",
    rating: 5,
    text: "I am buying dog food and pet accessories from Pawboo for the last 3 years. They provide me high quality pet foods and accessories. Their new store near Kaloor is very easy to access. I am a very happy customer of Pawboo.",
    photo: "assets/reviews/customer-6-sreekanth-a.png"
  },
  {
    name: "Treesa",
    rating: 5,
    text: "Took my Lhasa Apso for grooming and loved the experience! The staff were kind and friendly to my dog. They took great care and did a perfect job.",
    photo: "assets/reviews/customer-3-treasa-stimna-cleetus.png"
  },
  {
    name: "Gouri Nandana",
    rating: 5,
    text: "Excellent grooming service. My dog came back looking neat, refreshed, and cheerful. The staff were kind and treated my pet very gently.",
    photo: "assets/reviews/customer-5-gouri-nandana.png"
  },
  {
    name: "Saurabh Sunny",
    rating: 5,
    text: "We had a wonderful experience grooming our pet Lucky at Pawboo. The grooming got over in 1 hour and the service was commendable.",
    photo: "assets/reviews/customer-4-saurabh-sunny.png"
  }
];

const defaultProductsToSeed = [
  { id: "royal-canin-mini-adult", name: "Royal Canin Mini Adult", price: 2190, category: "food", stock: "In Stock", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", description: "Complete feed for dogs - For adult and mature small breed dogs (from 1 to 10 kg) - Over 10 months old." },
  { id: "whiskas-tuna-adult", name: "Whiskas Tuna Adult", price: 450, category: "food", stock: "In Stock", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80", description: "Dry cat food recipe with real tuna. Formulated for adult cats." },
  { id: "drools-absolute-calcium-bone", name: "Drools Absolute Calcium Bone", price: 290, category: "treats", stock: "In Stock", image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=800&q=80", description: "Premium calcium bones for strong teeth and bones." },
  { id: "merial-frontline-plus", name: "Merial Frontline Plus Dog", price: 750, category: "grooming", stock: "In Stock", image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80", description: "Flea and tick treatment for dogs." },
  { id: "adjustable-nylon-collar", name: "Adjustable Nylon Collar", price: 350, category: "accessory", stock: "In Stock", image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80", description: "Durable adjustable collar available in multiple colors." },
  { id: "kong-classic-toy", name: "Kong Classic Dog Toy", price: 850, category: "toy", stock: "In Stock", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80", description: "The classic durable chew toy for dogs." },
  { id: "vitapol-food-cockatiel", name: "Vitapol Food for Cockatiel", price: 450, category: "bird", stock: "In Stock", image: "https://images.unsplash.com/photo-1552728089-571ebd6a45ad?auto=format&fit=crop&w=800&q=80", description: "Premium seed mix for cockatiels and small birds." },
  { id: "hartz-groomers-shampoo", name: "Hartz Groomer's Best Shampoo", price: 650, category: "grooming", stock: "In Stock", image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80", description: "Conditioning shampoo for a shiny coat." },
  { id: "catnip-mouse-toy", name: "Catnip Mouse Toy", price: 150, category: "toy", stock: "In Stock", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80", description: "Interactive mouse toy infused with catnip." },
  { id: "stainless-steel-bowl", name: "Stainless Steel Bowl", price: 250, category: "accessory", stock: "In Stock", image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80", description: "Non-slip stainless steel feeding bowl." },
  { id: "pedigree-meat-jerky", name: "Pedigree Meat Jerky", price: 150, category: "treats", stock: "In Stock", image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=800&q=80", description: "Roasted lamb flavor treats for dogs." }
];

const defaultFaqsToSeed = [
  { id: "faq-1", question: "Do you offer home delivery?", answer: "Yes, we offer same-day delivery in selected areas for all orders." },
  { id: "faq-2", question: "How can I book a grooming appointment?", answer: "You can book an appointment directly through our website via WhatsApp." },
  { id: "faq-3", question: "Do you have Royal Canin in stock?", answer: "Yes, we stock all major brands including Royal Canin. Please ask on WhatsApp for specific variants." }
];

let products = [];
let cart = load(STORAGE_KEYS.cart, []);
let faqs = [];
let currentFilter = "all";
let loggedInEmail = localStorage.getItem(STORAGE_KEYS.ownerEmail) || "";
let activeProductId = "";
let productsLimit = 12;

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const rupee = (value) => value === null || Number.isNaN(Number(value))
  ? "Ask price"
  : `Rs ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(value))}`;

function escapeHtml(value) {
  if (!value) return "";
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function load(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createWhatsAppLink(message) {
  return `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(message)}`;
}

function createMailLink(subject, body) {
  return `mailto:${OWNER_EMAILS.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function sendOwnerEmail(payload) {
  return Promise.all(OWNER_EMAILS.map((email) => fetch("https://formsubmit.co/ajax/" + email, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload)
  })));
}

function createProductId(name) {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now()}`;
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function isOwner() {
  return OWNER_EMAILS.includes(loggedInEmail.trim().toLowerCase());
}

function isLoggedIn() {
  return loggedInEmail.trim() !== "";
}

function getProductAction(product) {
  return product.price === null ? "Ask Price" : "Add to Cart";
}

function getProductDescription(productItem) {
  if (productItem.description) return productItem.description;
  const descriptions = {
    food: "A carefully selected Pawboo food product for daily feeding and healthy routines. Please confirm age, breed, flavor, and pack size before purchase.",
    treats: "A tasty reward option for training, bonding, and snack time. Ask Pawboo for feeding guidance based on your pet's size and diet.",
    grooming: "A grooming and care essential for cleaner coats, better hygiene, and salon-style maintenance at home or in-store.",
    accessory: "A practical pet accessory chosen for comfort, style, and everyday use. Confirm size and color availability before checkout.",
    toy: "A fun enrichment product to keep pets active, playful, and engaged through the day.",
    bird: "A bird-care product stocked for daily nutrition and care. Confirm suitability for your bird type before purchase."
  };
  return descriptions[productItem.category] || "A Pawboo catalog product. Ask the team for current stock, variants, and recommendations.";
}

async function fetchProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Auto-seed if database is empty
    if (products.length === 0) {
      console.log("Database is empty. Seeding default products...");
      for (const p of defaultProductsToSeed) {
        await setDoc(doc(db, "products", p.id), p);
        products.push(p);
      }
    }
    
    renderProducts();
  } catch (err) {
    console.error("Failed to load products from Firebase", err);
  }
}

async function fetchFaqs() {
  try {
    const querySnapshot = await getDocs(collection(db, "faqs"));
    faqs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Auto-seed if database is empty
    if (faqs.length === 0) {
      console.log("Database is empty. Seeding default FAQs...");
      for (const f of defaultFaqsToSeed) {
        await setDoc(doc(db, "faqs", f.id), f);
        faqs.push(f);
      }
    }
    
    renderFaqs();
  } catch (err) {
    console.error("Failed to load FAQs from Firebase", err);
  }
}

function renderProducts() {
  const term = qs("#productSearch").value.trim().toLowerCase();
  const filtered = products.filter((productItem) => {
    const searchText = `${productItem.name} ${productItem.category} ${productItem.stock}`.toLowerCase();
    const matchesFilter = currentFilter === "all" || productItem.category === currentFilter;
    return matchesFilter && searchText.includes(term);
  });
  const visibleProducts = filtered.slice(0, productsLimit);

  qs("#adminCatalogActions").classList.toggle("hidden", !isOwner());

  qs("#productGrid").innerHTML = visibleProducts.map((productItem) => {
    const adminTools = isOwner() ? `
      <div class="product-admin-actions">
        <button class="icon-btn" type="button" aria-label="Edit ${escapeHtml(productItem.name)}" data-edit="${escapeHtml(productItem.id)}">✏️</button>
        <button class="icon-btn danger" type="button" aria-label="Remove ${escapeHtml(productItem.name)}" data-delete-product="${escapeHtml(productItem.id)}">🗑️</button>
      </div>
      <form class="edit-form hidden" data-form="${escapeHtml(productItem.id)}">
        <input name="name" value="${escapeHtml(productItem.name)}" aria-label="Product name">
        <input name="price" type="number" min="0" value="${productItem.price ?? ""}" placeholder="Leave empty for Ask price" aria-label="Product price">
        <input name="stock" value="${escapeHtml(productItem.stock)}" aria-label="Product stock label">
        <select name="category" aria-label="Product category">
          <option value="food" ${productItem.category === 'food' ? 'selected' : ''}>Food</option>
          <option value="treats" ${productItem.category === 'treats' ? 'selected' : ''}>Treats</option>
          <option value="grooming" ${productItem.category === 'grooming' ? 'selected' : ''}>Grooming</option>
          <option value="accessory" ${productItem.category === 'accessory' ? 'selected' : ''}>Accessories</option>
          <option value="toy" ${productItem.category === 'toy' ? 'selected' : ''}>Toys</option>
          <option value="bird" ${productItem.category === 'bird' ? 'selected' : ''}>Bird</option>
        </select>
        <input name="image" value="${escapeHtml(productItem.image)}" aria-label="Product image URL">
        <textarea name="description" rows="3" aria-label="Product description">${escapeHtml(getProductDescription(productItem))}</textarea>
        <button class="btn compact primary" type="submit">Save Product</button>
      </form>
    ` : "";

    return `
    <article class="product-card" data-id="${escapeHtml(productItem.id)}" tabindex="0" aria-label="View ${escapeHtml(productItem.name)} details">
      <figure><img src="${escapeHtml(productItem.image)}" alt="${escapeHtml(productItem.name)}" loading="lazy"></figure>
      <div class="product-body">
        <span class="badge">${escapeHtml(productItem.stock)}</span>
        <h3>${escapeHtml(productItem.name)}</h3>
        <div class="product-meta">
          <span>${escapeHtml(productItem.category)}</span>
          <span class="price">${rupee(productItem.price)}</span>
        </div>
        <div class="card-actions">
          <button class="btn primary" type="button" data-add="${escapeHtml(productItem.id)}">${getProductAction(productItem)}</button>
        </div>
        ${adminTools}
      </div>
    </article>
  `;
  }).join("") || `<p class="empty">No products found. Try another search.</p>`;

  const moreWrap = qs(".product-more");
  const moreButton = qs("#productMoreBtn");
  const countText = qs("#productCountText");
  const hasMore = productsLimit < filtered.length;
  moreWrap.classList.toggle("hidden", !hasMore);
  moreButton.textContent = "See more";
  countText.textContent = hasMore
    ? `Showing ${visibleProducts.length} of ${filtered.length} products`
    : `${filtered.length} products shown`;
}

function renderPackages() {
  qs("#packageList").innerHTML = packages.map((item) => `
    <article class="package-card">
      <div>
        <h3>${item.name}</h3>
        <p>${item.text}</p>
      </div>
      <div>
        <strong>${rupee(item.price)}</strong>
        <button class="btn compact primary" type="button" data-appointment="${item.name}">Book Appointment</button>
      </div>
    </article>
  `).join("");
}

function renderReviews() {
  qs("#reviewGrid").innerHTML = defaultReviews.map((review) => `
    <article class="review-card">
      <div class="review-head">
        <img src="${review.photo}" alt="${review.name}" loading="lazy">
        <div>
          <strong>${review.name}</strong>
          <span class="rating-stars">${"★".repeat(review.rating)}</span>
        </div>
      </div>
      <p>"${review.text}"</p>
    </article>
  `).join("");
}

function renderFaqs() {
  qs("#faqList").innerHTML = faqs.map((item) => `
    <article class="faq-item">
      <strong>${escapeHtml(item.question)}</strong>
      <p>${escapeHtml(item.answer)}</p>
      <form class="faq-answer-form ${isOwner() ? "" : "hidden"}" data-faq-id="${item.id}">
        <textarea name="answer" rows="3" aria-label="Reply to ${escapeHtml(item.question)}">${escapeHtml(item.answer)}</textarea>
        <div class="faq-owner-actions">
          <button class="btn compact primary" type="submit">Save Answer</button>
          <button class="btn compact danger" type="button" data-delete-faq="${item.id}">Delete</button>
        </div>
      </form>
    </article>
  `).join("");
}

function renderOwnerState() {
  const status = qs("#loginStatus");
  const ownerButton = qs("#ownerLoginOpen");
  const logoutButton = qs("#ownerLogout");
  if (!status || !ownerButton) return;

  if (isOwner()) {
    status.innerHTML = `
      <span>Logged in as Admin. Catalog and FAQ tools are unlocked.</span>
      <button class="btn compact" id="faqOwnerLogout" type="button">Logout</button>
    `;
    ownerButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Admin`;
    ownerButton.classList.add("active");
    if (logoutButton) logoutButton.classList.remove("hidden");
  } else if (isLoggedIn()) {
    status.innerHTML = `
      <span>Logged in as ${escapeHtml(loggedInEmail)}.</span>
      <button class="btn compact" id="faqOwnerLogout" type="button">Logout</button>
    `;
    ownerButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Account`;
    ownerButton.classList.add("active");
    if (logoutButton) logoutButton.classList.remove("hidden");
  } else {
    status.innerHTML = `
      <span>You can browse, ask questions, and send inquiries without logging in.</span>
      <button class="btn compact" id="faqOwnerLogin" type="button">Login</button>
    `;
    ownerButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Login`;
    ownerButton.classList.remove("active");
    if (logoutButton) logoutButton.classList.add("hidden");
  }
}

function renderCart() {
  qs("#cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  qs("#cartItems").innerHTML = cart.length ? cart.map((item) => `
    <div class="cart-row">
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <small>${rupee(item.price)} x ${item.qty}</small>
      </div>
      <button class="icon-btn" type="button" aria-label="Remove ${escapeHtml(item.name)}" data-remove="${escapeHtml(item.id)}">x</button>
    </div>
  `).join("") : `<p style="text-align: center; color: var(--muted); padding: 24px;">Your cart is empty.</p>`;
  qs("#cartTotal").textContent = rupee(cart.reduce((sum, item) => sum + item.price * item.qty, 0));
  save(STORAGE_KEYS.cart, cart);
}

function addToCart(id) {
  const productItem = products.find((item) => item.id === id);
  if (!productItem) return;
  if (productItem.price === null) {
    window.open(createWhatsAppLink(`Hi Pawboo, please share the price and availability for ${productItem.name}.`), "_blank");
    return;
  }
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id: productItem.id, name: productItem.name, price: productItem.price, qty: 1 });
  renderCart();
  
  // Show cart drawer
  qs("#cartDrawer").classList.add("open");
  qs("#cartDrawer").setAttribute("aria-hidden", "false");
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

function showModal(title, message) {
  qs("#modalTitle").textContent = title;
  qs("#modalMessage").textContent = message;
  qs("#successModal").classList.add("open");
  qs("#successModal").setAttribute("aria-hidden", "false");
}

function closeModal() {
  qs("#successModal").classList.remove("open");
  qs("#successModal").setAttribute("aria-hidden", "true");
}

function openProductModal(id) {
  const productItem = products.find((item) => item.id === id);
  if (!productItem) return;
  activeProductId = id;
  qs("#detailImage").src = productItem.image;
  qs("#detailImage").alt = productItem.name;
  qs("#detailBadge").textContent = productItem.stock;
  qs("#detailName").textContent = productItem.name;
  qs("#detailPrice").textContent = rupee(productItem.price);
  qs("#detailDescription").textContent = getProductDescription(productItem);
  qs("#detailCategory").textContent = productItem.category;
  qs("#detailStock").textContent = productItem.stock;
  qs("#detailAddCart").textContent = getProductAction(productItem);
  qs("#productModal").classList.add("open");
  qs("#productModal").setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  qs("#productModal").classList.remove("open");
  qs("#productModal").setAttribute("aria-hidden", "true");
}

function openOwnerModal() {
  qs("#ownerEmailInput").value = loggedInEmail;
  qs("#ownerPasswordInput").value = "";
  qs("#ownerModal").classList.add("open");
  qs("#ownerModal").setAttribute("aria-hidden", "false");
}

function closeOwnerModal() {
  qs("#ownerModal").classList.remove("open");
  qs("#ownerModal").setAttribute("aria-hidden", "true");
}

function openAddProductModal() {
  if (!isOwner()) return;
  qs("#addProductForm").reset();
  qs("#imagePreview").src = "";
  qs("#imagePreview").classList.add("hidden");
  qs(".upload-placeholder").classList.remove("hidden");
  qs("#addProductModal").classList.add("open");
  qs("#addProductModal").setAttribute("aria-hidden", "false");
}

function closeAddProductModal() {
  qs("#addProductModal").classList.remove("open");
  qs("#addProductModal").setAttribute("aria-hidden", "true");
}

function syncRoute() {
  const hash = location.hash || "#home";
  qsa(".site-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === hash));
  if (hash === "#appointment") location.hash = "#grooming";
  if (hash === "#maps") location.hash = "#location";
}

function initEvents() {
  qs(".nav-toggle").addEventListener("click", (event) => {
    const open = qs(".site-nav").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });

  qsa("[data-route]").forEach((link) => {
    link.addEventListener("click", () => qs(".site-nav").classList.remove("open"));
  });

  qs("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(STORAGE_KEYS.theme, document.body.classList.contains("light") ? "light" : "dark");
  });

  qs("#productSearch").addEventListener("input", () => {
    productsLimit = 12;
    renderProducts();
  });
  qs("#productMoreBtn").addEventListener("click", () => {
    productsLimit += 12;
    renderProducts();
  });

  qsa("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      productsLimit = 12;
      qsa("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts();
    });
  });

  qs("#productGrid").addEventListener("click", async (event) => {
    const addButton = event.target.closest("[data-add]");
    const editButton = event.target.closest("[data-edit]");
    const deleteButton = event.target.closest("[data-delete-product]");
    const card = event.target.closest(".product-card");
    if (addButton) {
      addToCart(addButton.dataset.add);
      return;
    }
    if (editButton) {
      if (!isOwner()) return;
      qs(`[data-form="${editButton.dataset.edit}"]`).classList.toggle("hidden");
      return;
    }
    if (deleteButton) {
      if (!isOwner()) return;
      if (!confirm("Are you sure you want to delete this product?")) return;
      const id = deleteButton.dataset.deleteProduct;
      try {
        await deleteDoc(doc(db, "products", id));
        products = products.filter((productItem) => productItem.id !== id);
        cart = cart.filter((item) => item.id !== id);
        save(STORAGE_KEYS.cart, cart);
        renderProducts();
        renderCart();
        showModal("Product Removed", "The product has been deleted from Firebase.");
      } catch (err) {
        showModal("Error", "Could not delete product.");
      }
      return;
    }
    if (card && !event.target.closest("form, input, textarea, select")) openProductModal(card.dataset.id);
  });

  qs("#productGrid").addEventListener("keydown", (event) => {
    const card = event.target.closest(".product-card");
    if (!card || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    openProductModal(card.dataset.id);
  });

  qs("#productGrid").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    const form = event.target;
    const id = form.dataset.form;
    const formData = new FormData(form);
    const priceValue = formData.get("price").trim();
    
    const updatedProduct = {
      name: formData.get("name").trim(),
      price: priceValue === "" ? null : Number(priceValue),
      stock: formData.get("stock").trim(),
      category: formData.get("category").trim().toLowerCase(),
      image: formData.get("image").trim(),
      description: formData.get("description").trim()
    };

    try {
      await updateDoc(doc(db, "products", id), updatedProduct);
      products = products.map((productItem) => productItem.id === id ? { id, ...updatedProduct } : productItem);
      renderProducts();
      showModal("Product Updated", "Your catalog change has been saved to Firebase.");
    } catch (err) {
      showModal("Error", "Could not update product.");
    }
  });

  qs("#resetCatalog")?.addEventListener("click", () => {
    if (!isOwner()) return;
    showModal("Notice", "Resetting the catalog is disabled in the Firebase version. You must delete and recreate items manually.");
  });

  qs("#addProductOpen")?.addEventListener("click", openAddProductModal);
  qs("#addProductClose").addEventListener("click", closeAddProductModal);
  qs("#addProductModal").addEventListener("click", (event) => {
    if (event.target.id === "addProductModal") closeAddProductModal();
  });
  
  qs("#newProductImage").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (file) {
      const dataUrl = await readImageFile(file);
      qs("#imagePreview").src = dataUrl;
      qs("#imagePreview").classList.remove("hidden");
      qs(".upload-placeholder").classList.add("hidden");
    }
  });

  qs("#addProductForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const priceValue = formData.get("price").trim();
    const uploadedImage = await readImageFile(qs("#newProductImage").files[0]);
    const imageUrl = uploadedImage || formData.get("imageUrl").trim() || "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=900&q=80";
    
    const newId = createProductId(name);
    const newProduct = {
      name,
      category: formData.get("category"),
      price: priceValue === "" ? null : Number(priceValue),
      stock: formData.get("stock").trim(),
      image: imageUrl,
      description: formData.get("description").trim()
    };

    try {
      await setDoc(doc(db, "products", newId), newProduct);
      products.unshift({ id: newId, ...newProduct });
      productsLimit = Math.max(productsLimit, 12);
      renderProducts();
      closeAddProductModal();
      showModal("Product Added", "The new product has been saved to Firebase.");
    } catch (err) {
      showModal("Error", "Could not add product.");
    }
  });

  qs("#packageList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-appointment]");
    if (!button) return;
    window.open(createWhatsAppLink(`Hi Pawboo, I want an appointment for the ${button.dataset.appointment} grooming package.`), "_blank");
  });

  qs("#faqForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = qs("#faqInput");
    const question = input.value.trim();
    
    try {
      const docRef = await addDoc(collection(db, "faqs"), { question, answer: "Thanks for asking. Pawboo team will answer this shortly." });
      faqs.unshift({ id: docRef.id, question: question, answer: "Thanks for asking. Pawboo team will answer this shortly." });
      input.value = "";
      renderFaqs();
      
      // Silently email all owner emails.
      sendOwnerEmail({
        question: question,
        _subject: "New Pawboo FAQ Question"
      }).catch(e => console.log("Mail notification failed", e));

      showModal("Question Sent", "Your question has been saved and the team has been notified.");
    } catch (err) {
      showModal("Error", "Could not save question.");
    }
  });

  qs("#faqList").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    const form = event.target;
    const id = form.dataset.faqId;
    const answer = new FormData(form).get("answer").trim();
    
    try {
      await updateDoc(doc(db, "faqs", id), { answer });
      const faq = faqs.find(f => f.id == id);
      if (faq) faq.answer = answer;
      renderFaqs();
      showModal("Answer Saved", "The FAQ answer has been updated in Firebase.");
    } catch(err) {
      showModal("Error", "Could not update FAQ answer.");
    }
  });

  qs("#faqList").addEventListener("click", async (event) => {
    const deleteButton = event.target.closest("[data-delete-faq]");
    if (!deleteButton || !isOwner()) return;
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    const id = deleteButton.dataset.deleteFaq;
    
    try {
      await deleteDoc(doc(db, "faqs", id));
      faqs = faqs.filter(f => f.id != id);
      renderFaqs();
      showModal("Question Deleted", "The FAQ question has been removed from Firebase.");
    } catch(err) {
      showModal("Error", "Could not delete FAQ.");
    }
  });

  qs("#inquiryForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    const message = `Pawboo inquiry\n\nName: ${data.name}\nPhone: ${data.phone}\nPet: ${data.pet}\nNeed: ${data.need}\nMessage: ${data.message}`;
    qs("#whatsappQuick").href = createWhatsAppLink(message);
    
    try {
      const responses = await sendOwnerEmail({
        name: data.name,
        phone: data.phone,
        pet: data.pet,
        need: data.need,
        message: data.message,
        _subject: `Pawboo Inquiry - ${data.need}`
      });
      
      if (responses.every((response) => response.ok)) {
        showModal("Inquiry Sent", "Your inquiry has been successfully sent to the Pawboo team! We will contact you soon.");
        form.reset();
      } else {
        showModal("Error", "There was a problem sending your inquiry. Please contact us on WhatsApp instead.");
      }
    } catch (err) {
      showModal("Error", "Could not connect to the mail server. Please use WhatsApp instead.");
    }
  });

  qs("#cartOpen").addEventListener("click", () => {
    qs("#cartDrawer").classList.add("open");
    qs("#cartDrawer").setAttribute("aria-hidden", "false");
  });

  qs("#cartClose").addEventListener("click", () => {
    qs("#cartDrawer").classList.remove("open");
    qs("#cartDrawer").setAttribute("aria-hidden", "true");
  });

  qs("#cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (button) removeFromCart(button.dataset.remove);
  });

  qs("#checkoutBtn").addEventListener("click", () => {
    if (!cart.length) {
      showModal("Cart Empty", "Add products before checkout.");
      return;
    }
    const lines = cart.map((item) => `${item.name} x ${item.qty} - ${rupee(item.price * item.qty)}`).join("\n");
    window.open(createWhatsAppLink(`Hi Pawboo, I want to order:\n${lines}\nTotal: ${qs("#cartTotal").textContent}`), "_blank");
  });

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;
  const mapLink = qs("#mapLink");
  if (mapLink) mapLink.href = mapUrl;
  qs("#whatsappQuick").href = createWhatsAppLink("Hi Pawboo, I need help with products or grooming.");
  
  qs("#ownerLoginOpen").addEventListener("click", openOwnerModal);
  qs("#ownerModalClose").addEventListener("click", closeOwnerModal);
  
  qs("#googleLoginBtn").addEventListener("click", async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      loggedInEmail = userCredential.user.email;
      localStorage.setItem(STORAGE_KEYS.ownerEmail, loggedInEmail);
      renderOwnerState();
      renderProducts();
      renderFaqs();
      closeOwnerModal();
      if (isOwner()) {
        showModal("Admin Access", "Admin catalog and FAQ tools are now available.");
      } else {
        showModal("Logged In", `Welcome back! You are logged in as ${loggedInEmail}.`);
      }
    } catch (err) {
      console.error(err);
      closeOwnerModal();
      showModal("Google Sign-In Failed", "Please ensure Google Sign-In is enabled in your Firebase Console and this domain is added to Authorized Domains.");
    }
  });

  qs("#ownerLoginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = qs("#ownerEmailInput").value.trim().toLowerCase();
    const password = qs("#ownerPasswordInput").value.trim();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      loggedInEmail = userCredential.user.email;
      localStorage.setItem(STORAGE_KEYS.ownerEmail, loggedInEmail);
      renderOwnerState();
      renderProducts();
      renderFaqs();
      closeOwnerModal();
      if (isOwner()) {
        showModal("Admin Access", "Admin catalog and FAQ tools are now available.");
      } else {
        showModal("Logged In", `Welcome back! You are logged in as ${loggedInEmail}.`);
      }
    } catch (err) {
      console.error(err);
      closeOwnerModal();
      showModal("Login Failed", "Invalid email or password. Please try again.");
    }
  });

  qs("#ownerLogout").addEventListener("click", async () => {
    try {
      await signOut(auth);
      loggedInEmail = "";
      localStorage.removeItem(STORAGE_KEYS.ownerEmail);
      renderOwnerState();
      renderProducts();
      renderFaqs();
      closeOwnerModal();
    } catch (err) {
      console.error(err);
    }
  });
  
  qs("#loginStatus").addEventListener("click", (event) => {
    if (event.target.id === "faqOwnerLogin") openOwnerModal();
    if (event.target.id === "faqOwnerLogout") qs("#ownerLogout").click();
  });
  
  qs("#modalClose").addEventListener("click", closeModal);
  qs("#modalOk").addEventListener("click", closeModal);
  qs("#successModal").addEventListener("click", (event) => {
    if (event.target.id === "successModal") closeModal();
  });
  qs("#ownerModal").addEventListener("click", (event) => {
    if (event.target.id === "ownerModal") closeOwnerModal();
  });
  qs("#productModalClose").addEventListener("click", closeProductModal);
  qs("#productModal").addEventListener("click", (event) => {
    if (event.target.id === "productModal") closeProductModal();
  });
  qs("#detailAddCart").addEventListener("click", () => {
    addToCart(activeProductId);
    closeProductModal();
  });
  qs("#detailWhatsapp").addEventListener("click", () => {
    const productItem = products.find((item) => item.id === activeProductId);
    if (!productItem) return;
    window.open(createWhatsAppLink(`Hi Pawboo, I want details for ${productItem.name}. Price: ${rupee(productItem.price)}.`), "_blank");
  });
  window.addEventListener("hashchange", syncRoute);
  window.addEventListener("resize", renderProducts);
}

function init() {
  if (localStorage.getItem(STORAGE_KEYS.theme) === "light") document.body.classList.add("light");
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedInEmail = user.email;
      localStorage.setItem(STORAGE_KEYS.ownerEmail, loggedInEmail);
    } else {
      loggedInEmail = "";
      localStorage.removeItem(STORAGE_KEYS.ownerEmail);
    }
    renderOwnerState();
    renderProducts();
    renderFaqs();
  });

  fetchProducts();
  fetchFaqs();
  renderPackages();
  renderReviews();
  renderCart();
  initEvents();
  syncRoute();
}

init();
