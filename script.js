const STORE_PHONE = "919000000000";
const MAP_QUERY = "Pawboo Pets";
const OWNER_EMAIL = "johanabraham345@gmail.com";
const STORAGE_KEYS = {
  products: "pawbooProductsV2",
  cart: "pawbooCartV2",
  faqs: "pawbooFaqsV2",
  theme: "pawbooTheme",
  ownerEmail: "pawbooOwnerEmail"
};

const defaultProducts = [
  product("bio-froom-fluffy-puppu-tear-free-1500", "Bio Froom Fluffy Puppu Tear Free", "grooming", 1500, "assets/products/bio-froom-fluffy-puppu-tear-free-1500.webp", "Shampoo"),
  product("bio-groom-facial-cleanser-1500", "Bio Groom Facial Cleanser", "grooming", 1500, "assets/products/bio-groom-facial-cleanser-1500.webp", "Face Care"),
  product("bio-groom-gentle-hypo-1400", "Bio Groom Gentle Hypo", "grooming", 1400, "assets/products/bio-groom-gentle-hypo-1400.webp", "Sensitive Skin"),
  product("bio-groom-natural-oatmeal-1300", "Bio Groom Natural Oatmeal", "grooming", 1300, "assets/products/bio-groom-natural-oatmeal-1300.webp", "Coat Care"),
  product("bio-groom-waterless-bath-1200", "Bio Groom Waterless Bath", "grooming", 1200, "assets/products/bio-groom-waterless-bath-1200.webp", "No-Rinse"),
  product("black-tuxedo-bandana-320", "Black Tuxedo Bandana", "accessory", 320, "assets/products/black-tuxedo-bandana-320.webp", "Style"),
  product("chicken-in-jelly-599", "Chicken in Jelly", "food", 599, "assets/products/chicken-in-jelly-599.webp", "Cat Food"),
  product("chicken-in-tuna-799", "Chicken in Tuna", "food", 799, "assets/products/chicken-in-tuna-799.webp", "Cat Food"),
  product("chip-chops-chicken-strips-660", "Chip Chops Chicken Strips", "treats", 660, "assets/products/chip-chops-chicken-strips-660.webp", "Dog Treat"),
  product("chip-chops-chicken-tenders-660", "Chip Chops Chicken Tenders", "treats", 660, "assets/products/chip-chops-chicken-tenders-660.webp", "Dog Treat"),
  product("chip-chops-dried-chicken-jerky-660", "Chip Chops Dried Chicken Jerky", "treats", 660, "assets/products/chip-chops-dried-chicken-jerky-660.webp", "Dog Treat"),
  product("chip-chops-fish-on-stick", "Chip Chops Fish on Stick", "treats", null, "assets/products/chip-chops-fish-on-stick.jpg", "Ask Price"),
  product("dog-bow-tuxedo-290", "Dog Bow Tuxedo", "accessory", 290, "assets/products/dog-bow-tuxedo-290.jpg", "Style"),
  product("dog-o-bow-floral-dog-shirt-1199", "Dog-O-Bow Floral Dog Shirt", "accessory", 1199, "assets/products/dog-o-bow-floral-dog-shirt-1199.jpg", "Apparel"),
  product("flexi-new-neon-retractable-leash", "Flexi New Neon Retractable Leash", "accessory", null, "assets/products/flexi-new-neon-retractable-leash.jpg", "Ask Price"),
  product("fofo-plush-toys-350", "Fofo Plush Toys", "toy", 350, "assets/products/fofo-plush-toys-350.webp", "Toy"),
  product("gravy-chunks-roasted-duck-chicken-liver-90", "Gravy Chunks Roasted Duck, Chicken and Liver", "food", 90, "assets/products/gravy-chunks-roasted-duck-chicken-liver-90.webp", "Wet Food"),
  product("jibss-kennel-hygiene-floor-cleaner-440", "Jibss Kennel Hygiene Floor Cleaner", "grooming", 440, "assets/products/jibss-kennel-hygiene-floor-cleaner-440-different-colour-variants.webp", "Variants"),
  product("lamb-with-chicken-799", "Lamb with Chicken", "food", 799, "assets/products/lamb-with-chicken-799.webp", "Cat Food"),
  product("lozalo-privilege-shampoo", "Lozalo Privilege Shampoo", "grooming", null, "assets/products/lozalo-privilege-shampoo.jpg", "Ask Price"),
  product("me-o-cat-food-dry-ocean-fish-880", "Me-O Cat Food Dry Ocean Fish", "food", 880, "assets/products/me-o-cat-food-dry-ocean-fish-880.webp", "Cat Food"),
  product("me-o-cat-food-dry-persian-cat-550", "Me-O Cat Food Dry Persian Cat", "food", 550, "assets/products/me-o-cat-food-dry-persian-cat-550.webp", "Cat Food"),
  product("me-o-ocean-fish-cat-dry-1100", "Me-O Ocean Fish Cat Dry", "food", 1100, "assets/products/me-o-ocean-fish-cat-dry-1100.webp", "Cat Food"),
  product("nylon-chey-bones-250", "Nylon Chew Bones", "toy", 250, "assets/products/nylon-chey-bones-250.webp", "Chew Toy"),
  product("parrot-vital-pellet-herbal-99", "Parrot Vital Pellet Herbal", "bird", 99, "assets/products/parrot-vital-pellet-herbal-99.webp", "Bird Food"),
  product("persian-adult-599", "Persian Adult", "food", 599, "assets/products/persian-adult-599.webp", "Cat Food"),
  product("persian-kitten-399", "Persian Kitten", "food", 399, "assets/products/persian-kitten-399.jpg", "Kitten Food"),
  product("purina-felix-friskies-dry-350", "Purina Felix Friskies Dry", "food", 350, "assets/products/purina-felix-friskies-dry-350.webp", "Cat Food"),
  product("purina-felix-matisse-salmon-chicken-990", "Purina Felix Matisse Salmon and Chicken", "food", 990, "assets/products/purina-felix-matisse-salmon-chicken-990.webp", "Cat Food"),
  product("purina-felix-pouch-felix-kitten-pouches", "Purina Felix Kitten Pouches", "food", null, "assets/products/purina-felix-pouch-felix-kitten-pouches.webp", "Ask Price"),
  product("roested-ducks-3499", "Roasted Ducks", "food", 3499, "assets/products/roested-ducks-3499.webp", "Premium Food"),
  product("royal-blue-red-tartan-plaid-bandana-699", "Royal Blue and Red Tartan Plaid Bandana", "accessory", 699, "assets/products/royal-blue-red-tartan-plaid-bandana-699.webp", "Style"),
  product("trixie-premium-nylon-rope-leashes-995", "Trixie Premium Nylon and Rope Leashes", "accessory", 995, "assets/products/trixie-premium-nylon-rope-leashes-995.jpg", "Leash"),
  product("tropiclean-pet-shampoo-2-in-1", "TropiClean Pet Shampoo 2-in-1", "grooming", null, "assets/products/tropiclean-pet-shampoo-2-in-1.jpg", "Ask Price")
];

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
    name: "Treesa",
    rating: 5,
    text: "Took my Lhasa Apso for grooming and loved the experience! The staff were kind and friendly to my dog. They took great care and did a perfect job.",
    photo: "assets/reviews/customer-3-treasa-stimna-cleetus.png"
  },
  {
    name: "Saurabh Sunny",
    rating: 5,
    text: "We had a wonderful experience grooming our pet Lucky at Pawboo. The grooming got over in 1 hour and the service was commendable.",
    photo: "assets/reviews/customer-4-saurabh-sunny.png"
  }
];

const defaultFaqs = [
  { q: "Do you offer home delivery?", a: "Yes. Share your location and product list through WhatsApp for confirmation." },
  { q: "Can I request a grooming appointment online?", a: "Yes. Use the grooming buttons or inquiry form and the team will confirm a slot." },
  { q: "Can you suggest food for allergies?", a: "Yes. Mention breed, age, current food, and allergy signs in the inquiry form." }
];

let products = load(STORAGE_KEYS.products, defaultProducts);
let cart = load(STORAGE_KEYS.cart, []);
let faqs = load(STORAGE_KEYS.faqs, defaultFaqs);
let currentFilter = "all";
let loggedInEmail = localStorage.getItem(STORAGE_KEYS.ownerEmail) || "";
let activeProductId = "";
let productsExpanded = false;

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const rupee = (value) => value === null || Number.isNaN(Number(value))
  ? "Ask price"
  : `Rs ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(value))}`;

function product(id, name, category, price, image, stock) {
  return { id, name, category, price, image, stock };
}

function escapeHtml(value) {
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
  return `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
  return loggedInEmail.trim().toLowerCase() === OWNER_EMAIL;
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

function renderProducts() {
  const term = qs("#productSearch").value.trim().toLowerCase();
  const filtered = products.filter((productItem) => {
    const searchText = `${productItem.name} ${productItem.category} ${productItem.stock}`.toLowerCase();
    const matchesFilter = currentFilter === "all" || productItem.category === currentFilter;
    return matchesFilter && searchText.includes(term);
  });
  const isCompactView = window.matchMedia("(max-width: 620px)").matches;
  const previewLimit = isCompactView ? 6 : 12;
  const visibleProducts = productsExpanded ? filtered : filtered.slice(0, previewLimit);

  qs("#adminCatalogActions").classList.toggle("hidden", !isOwner());

  qs("#productGrid").innerHTML = visibleProducts.map((productItem) => {
    const adminTools = isOwner() ? `
      <div class="product-admin-actions">
        <button class="icon-btn" type="button" aria-label="Edit ${escapeHtml(productItem.name)}" data-edit="${escapeHtml(productItem.id)}">Edit</button>
        <button class="icon-btn danger" type="button" aria-label="Remove ${escapeHtml(productItem.name)}" data-delete-product="${escapeHtml(productItem.id)}">Remove</button>
      </div>
      <form class="edit-form hidden" data-form="${escapeHtml(productItem.id)}">
        <input name="name" value="${escapeHtml(productItem.name)}" aria-label="Product name">
        <input name="price" type="number" min="0" value="${productItem.price ?? ""}" placeholder="Leave empty for Ask price" aria-label="Product price">
        <input name="stock" value="${escapeHtml(productItem.stock)}" aria-label="Product stock label">
        <input name="category" value="${escapeHtml(productItem.category)}" aria-label="Product category">
        <input name="image" value="${escapeHtml(productItem.image)}" aria-label="Product image URL">
        <textarea name="description" rows="3" aria-label="Product description">${escapeHtml(getProductDescription(productItem))}</textarea>
        <button class="btn compact" type="submit">Save Product</button>
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
  const hasMore = filtered.length > previewLimit;
  moreWrap.classList.toggle("hidden", !hasMore);
  moreButton.textContent = productsExpanded ? "Show fewer products" : "See more products";
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
        <button class="btn compact" type="button" data-appointment="${item.name}">Appointment</button>
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
          <span>${"&#9733;".repeat(review.rating)}</span>
        </div>
      </div>
      <p>${review.text}</p>
    </article>
  `).join("");
}

function renderFaqs() {
  qs("#faqList").innerHTML = faqs.map((item, index) => `
    <article class="faq-item">
      <strong>${index + 1}. ${escapeHtml(item.q)}</strong>
      <p>${escapeHtml(item.a)}</p>
      <form class="faq-answer-form ${isOwner() ? "" : "hidden"}" data-faq-index="${index}">
        <textarea name="answer" rows="3" aria-label="Reply to ${escapeHtml(item.q)}">${escapeHtml(item.a)}</textarea>
        <div class="faq-owner-actions">
          <button class="btn compact" type="submit">Save Answer</button>
          <button class="btn compact danger" type="button" data-delete-faq="${index}">Delete Question</button>
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
      <span>Logged in as ${escapeHtml(loggedInEmail)}. Admin catalog and FAQ tools are available.</span>
      <button class="btn compact" id="faqOwnerLogout" type="button">Logout</button>
    `;
    ownerButton.textContent = "Account";
    ownerButton.classList.add("active");
    if (logoutButton) logoutButton.classList.remove("hidden");
  } else if (isLoggedIn()) {
    status.innerHTML = `
      <span>Logged in as ${escapeHtml(loggedInEmail)}.</span>
      <button class="btn compact" id="faqOwnerLogout" type="button">Logout</button>
    `;
    ownerButton.textContent = "Account";
    ownerButton.classList.add("active");
    if (logoutButton) logoutButton.classList.remove("hidden");
  } else {
    status.innerHTML = `
      <span>You can browse, ask questions, and send inquiries without logging in.</span>
      <button class="btn compact" id="faqOwnerLogin" type="button">Login</button>
    `;
    ownerButton.textContent = "Login";
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
  `).join("") : `<p>Your cart is empty.</p>`;
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
  qs("#addProductModal").classList.add("open");
  qs("#addProductModal").setAttribute("aria-hidden", "false");
}

function closeAddProductModal() {
  qs("#addProductModal").classList.remove("open");
  qs("#addProductModal").setAttribute("aria-hidden", "true");
}

function ownerLogout() {
  loggedInEmail = "";
  localStorage.removeItem(STORAGE_KEYS.ownerEmail);
  renderOwnerState();
  renderProducts();
  renderFaqs();
  closeOwnerModal();
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
    productsExpanded = false;
    renderProducts();
  });
  qs("#productMoreBtn").addEventListener("click", () => {
    productsExpanded = !productsExpanded;
    renderProducts();
    if (!productsExpanded) qs("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  qsa("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      productsExpanded = false;
      qsa("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts();
    });
  });

  qs("#productGrid").addEventListener("click", (event) => {
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
      products = products.filter((productItem) => productItem.id !== deleteButton.dataset.deleteProduct);
      cart = cart.filter((item) => item.id !== deleteButton.dataset.deleteProduct);
      save(STORAGE_KEYS.products, products);
      renderProducts();
      renderCart();
      showModal("Product Removed", "The product has been removed from this browser catalog.");
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

  qs("#productGrid").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    const form = event.target;
    const id = form.dataset.form;
    const formData = new FormData(form);
    const priceValue = formData.get("price").trim();
    products = products.map((productItem) => productItem.id === id ? {
      ...productItem,
      name: formData.get("name").trim(),
      price: priceValue === "" ? null : Number(priceValue),
      stock: formData.get("stock").trim(),
      category: formData.get("category").trim().toLowerCase(),
      image: formData.get("image").trim(),
      description: formData.get("description").trim()
    } : productItem);
    save(STORAGE_KEYS.products, products);
    renderProducts();
    showModal("Product Updated", "Your catalog change has been saved in this browser.");
  });

  qs("#resetCatalog").addEventListener("click", () => {
    if (!isOwner()) return;
    products = structuredClone(defaultProducts);
    save(STORAGE_KEYS.products, products);
    renderProducts();
  });

  qs("#addProductOpen").addEventListener("click", openAddProductModal);
  qs("#addProductClose").addEventListener("click", closeAddProductModal);
  qs("#addProductModal").addEventListener("click", (event) => {
    if (event.target.id === "addProductModal") closeAddProductModal();
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
    const newProduct = {
      id: createProductId(name),
      name,
      category: formData.get("category"),
      price: priceValue === "" ? null : Number(priceValue),
      stock: formData.get("stock").trim(),
      image: imageUrl,
      description: formData.get("description").trim()
    };
    products.unshift(newProduct);
    productsExpanded = true;
    save(STORAGE_KEYS.products, products);
    renderProducts();
    closeAddProductModal();
    showModal("Product Added", "The new product has been added to this browser catalog.");
  });

  qs("#packageList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-appointment]");
    if (!button) return;
    window.open(createWhatsAppLink(`Hi Pawboo, I want an appointment for the ${button.dataset.appointment} grooming package.`), "_blank");
  });

  qs("#faqForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = qs("#faqInput");
    const question = input.value.trim();
    faqs.unshift({ q: question, a: "Thanks for asking. Pawboo team will answer this shortly." });
    save(STORAGE_KEYS.faqs, faqs);
    input.value = "";
    renderFaqs();
    window.location.href = createMailLink("New Pawboo FAQ Question", `A customer asked:\n\n${question}\n\nThe team can reply from the Pawboo website.`);
    showModal("Question Sent", `Your question has been prepared as an email to ${OWNER_EMAIL}.`);
  });

  qs("#faqList").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    const form = event.target;
    const index = Number(form.dataset.faqIndex);
    const answer = new FormData(form).get("answer").trim();
    if (!faqs[index]) return;
    faqs[index].a = answer;
    save(STORAGE_KEYS.faqs, faqs);
    renderFaqs();
    showModal("Answer Saved", "The FAQ answer has been updated on this browser.");
  });

  qs("#faqList").addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-faq]");
    if (!deleteButton || !isOwner()) return;
    const index = Number(deleteButton.dataset.deleteFaq);
    if (!faqs[index]) return;
    faqs.splice(index, 1);
    save(STORAGE_KEYS.faqs, faqs);
    renderFaqs();
    showModal("Question Deleted", "The FAQ question has been removed on this browser.");
  });

  qs("#inquiryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    const message = `Pawboo inquiry\n\nName: ${data.name}\nPhone: ${data.phone}\nPet: ${data.pet}\nNeed: ${data.need}\nMessage: ${data.message}`;
    qs("#whatsappQuick").href = createWhatsAppLink(message);
    window.location.href = createMailLink(`Pawboo Inquiry - ${data.need}`, message);
    showModal("Inquiry Email Opened", `Your inquiry has been addressed to ${OWNER_EMAIL}. You can also continue on WhatsApp.`);
    event.target.reset();
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
  qs("#ownerLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const submittedEmail = qs("#ownerEmailInput").value.trim().toLowerCase();
    loggedInEmail = submittedEmail;
    localStorage.setItem(STORAGE_KEYS.ownerEmail, loggedInEmail);
    renderOwnerState();
    renderProducts();
    renderFaqs();
    closeOwnerModal();
    showModal("Logged In", isOwner() ? "Admin catalog and FAQ tools are now available." : "You are now logged in for this browsing session.");
  });
  qs("#ownerLogout").addEventListener("click", ownerLogout);
  qs("#loginStatus").addEventListener("click", (event) => {
    if (event.target.id === "faqOwnerLogin") openOwnerModal();
    if (event.target.id === "faqOwnerLogout") ownerLogout();
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
  renderProducts();
  renderPackages();
  renderReviews();
  renderOwnerState();
  renderFaqs();
  renderCart();
  initEvents();
  syncRoute();
}

init();
