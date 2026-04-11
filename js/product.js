const PRODUCTS = {
  'brass-cable-glands': {
    name: 'Brass Cable Glands',
    image: 'https://www.shubhamindustries.com/images/products/brass-cable-glands.jpg',
    desc: 'Range of brass nickel plated cable glands for standard clamping to earthing of braid. Available in various sizes and configurations to suit all cable types and installation environments.'
  },
  'ampere-pins': {
    name: 'Ampere Pins',
    image: 'https://www.shubhamindustries.com/images/products/ampere-pins.jpg',
    desc: 'High-quality ampere pins manufactured with precision from quality brass materials. Designed for reliable electrical connectivity and durability in demanding applications.'
  },
  'copper-split-bolts': {
    name: 'Copper Split Bolts and Lugs',
    image: 'https://www.shubhamindustries.com/images/products/copper-split-bolts-and-lugs.jpg',
    desc: 'Premium copper split bolts and lugs for secure and corrosion-resistant electrical connections. Available in multiple conductor sizes for industrial and commercial use.'
  },
  'diverters': {
    name: 'Diverters',
    image: 'https://www.shubhamindustries.com/images/products/diverters.jpg',
    desc: 'Precision-engineered diverter components manufactured for smooth flow control and long service life. Suitable for plumbing and industrial fluid management systems.'
  },
  'earth-tag': {
    name: 'Earth Tag',
    image: 'https://www.shubhamindustries.com/images/products/earth-tag.jpg',
    desc: 'Robust brass earth tags for effective earthing and bonding in electrical installations. Designed to provide low-resistance electrical earth connections.'
  },
  'ball-valves': {
    name: 'Ball Valves',
    image: 'https://www.shubhamindustries.com/images/products/ball-valves.jpg',
    desc: 'High-performance brass ball valves for reliable on/off flow control. Manufactured with tight tolerances for leak-free operation in water, gas, and industrial applications.'
  },
  'auto-electrical': {
    name: 'Auto Electrical Parts',
    image: 'https://www.shubhamindustries.com/images/products/auto-electrical-parts.jpg',
    desc: 'Comprehensive range of precision-machined auto electrical components for the automotive industry. Made from quality materials to meet OEM specifications.'
  },
  'qrc-body': {
    name: 'QRC Body',
    image: 'https://www.shubhamindustries.com/images/products/qrc-body.jpg',
    desc: 'Quarter Round Connector body components manufactured to exacting standards. Used in automotive and industrial connector systems requiring high reliability.'
  },
  'en1a-body': {
    name: 'EN1A Body',
    image: 'https://www.shubhamindustries.com/images/products/en1a-body.jpg',
    desc: 'EN1A free-cutting steel body components machined for precise dimensional accuracy. Ideal for use in automotive and precision engineering applications.'
  },
  'inserts': {
    name: 'Inserts',
    image: 'https://www.shubhamindustries.com/images/products/inserts.jpg',
    desc: 'Threaded and press-fit brass inserts for plastic and metal assemblies. Provide strong, durable thread anchorage in a wide range of materials and applications.'
  },
  'quarter-turn': {
    name: 'Quarter Turn Ceramic Valves',
    image: 'https://www.shubhamindustries.com/images/products/quarter-turn-veramic-valves.jpg',
    desc: 'Quarter turn ceramic disc valves offering smooth operation and long service life. Ideal for use in bathroom fittings, kitchen taps, and other sanitary applications.'
  },
  'gas-solenoid': {
    name: 'Gas Solenoid Valve Parts',
    image: 'https://www.shubhamindustries.com/images/products/gas-solenoid-valve-parts.jpg',
    desc: 'Precision components for gas solenoid valves, manufactured from quality brass. Designed for safe, reliable gas control in domestic and industrial applications.'
  },
  'impellers': {
    name: 'Impellers',
    image: 'https://www.shubhamindustries.com/images/products/impellers.jpg',
    desc: 'Precision-cast and machined impellers for pumps and flow meters. Available in brass and other materials, designed for optimal hydraulic performance.'
  },
  'contact-pin': {
    name: 'Contact Pin',
    image: 'https://www.shubhamindustries.com/images/products/contact-pin.jpg',
    desc: 'High-conductivity brass contact pins for electrical connectors and terminals. Manufactured to close tolerances for reliable electrical contact and long service life.'
  },
  'temp-sensor': {
    name: 'Temperature Sensor Bolt',
    image: 'https://www.shubhamindustries.com/images/products/temperature-sensor-bolt.jpg',
    desc: 'Specialist bolts designed as housings for temperature sensor elements. Manufactured from quality materials for accuracy and reliability in automotive and industrial temperature monitoring.'
  },
  'terminal': {
    name: 'Terminal',
    image: 'https://www.shubhamindustries.com/images/products/terminal-01.jpg',
    desc: 'Precision brass terminals for secure and corrosion-resistant electrical connections. Suitable for a wide range of electrical and electronic applications.'
  },
  'socket': {
    name: 'Socket',
    image: 'https://www.shubhamindustries.com/images/products/socket.jpg',
    desc: 'High-quality brass sockets for electrical and fluid connections. Manufactured to precise dimensions for reliable, long-lasting performance.'
  },
  'pivot-post': {
    name: 'Pivot Post',
    image: 'https://www.shubhamindustries.com/images/products/pivot-post.jpg',
    desc: 'Precision-machined pivot posts for use in hinges, mechanical assemblies, and instrumentation. Manufactured from quality materials for smooth, wear-resistant operation.'
  },
  'solenoid-valves': {
    name: 'Solenoid Valves Parts',
    image: 'https://www.shubhamindustries.com/images/products/solenoid-valves-parts.jpg',
    desc: 'Precision components for solenoid valve assemblies. Manufactured to exacting tolerances for reliable electromagnetic actuation in fluid and gas control applications.'
  }
};

// ---- MOBILE HAMBURGER ----
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// ---- FILTER TABS (products.html only) ----
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.product-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ---- PRODUCT DETAIL PAGE (product-detail.html only) ----
function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productKey = params.get('product');

  if (!productKey) return;

  const product = PRODUCTS[productKey];
  if (!product) return;

  // Set page title
  document.title = product.name + ' | Shubham Industries';

  // Update hero title
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = product.name;

  // Update breadcrumb
  const breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = product.name;

  // Update detail content
  const detailTitle = document.getElementById('detailTitle');
  if (detailTitle) detailTitle.textContent = product.name;

  const detailDesc = document.getElementById('detailDesc');
  if (detailDesc) detailDesc.textContent = product.desc;

  const productImage = document.getElementById('productImage');
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
  }
}

// Run on detail page
if (document.getElementById('detailTitle')) {
  loadProductDetail();
}