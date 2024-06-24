const products = [
    {
      name: 'Botón Perla',
      price: 119,
      stars: 4,
      reviews: 250,
      seller: 'Pandora',
      image: 'https://dam.elcorteingles.es/producto/www-5700303128351-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0058610_263309C01-pendientes-de-boton-perla-cultivada-de-agua-dulce-tratada-barroca/?parentCategoryId=999.39072387013&color=Blanco',
    },
    {
      name: 'Botón Corazón',
      price: 59,
      stars: 3,
      reviews: 250,
      seller: 'Pandora',
      image: 'https://dam.elcorteingles.es/producto/www-5700303127187-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0058610_293356C01-pendientes-de-boton-corazon-verde-opalescente/?parentCategoryId=999.39072387013&color=Verde',
    },
    {
      name: 'Tuyo Mini',
      price: 79,
      stars: 5,
      reviews: 250,
      seller: 'Tous',
      image: 'https://dam.elcorteingles.es/producto/www-8433311871366-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/A41337710-pendientes-tuyo-mini-color-de-plata-con-amazonita-y-cuarzo-rosa/?parentCategoryId=999.39072387013&color=Blanco',
    },
    {
      name: 'Criollas pequeñas Glory',
      price: 279,
      stars: 3,
      reviews: 250,
      seller: 'Tous',
      image: 'https://dam.elcorteingles.es/producto/www-8433311836709-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0086322_918593510-criollas-pequenas-glory-banadas-en-oro-de-18-kt-sobre-plata-con-cuatro-motivos/?parentCategoryId=999.39072387013&color=Multicolor',
    },
    {
      name: 'Largos con abalorios',
      price: 8,
      stars: 5,
      reviews: 250,
      seller: 'Parfois',
      image: 'https://dam.elcorteingles.es/producto/www-5608348431132-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0109561_209003WT-pendientes-largos-con-abalorios-en-blanco/?parentCategoryId=999.39072387013&color=Blanco',
    },
    {
      name: 'Largos con multicadenas',
      price: 10,
      stars: 2,
      reviews: 250,
      seller: 'Parfois',
      image: 'https://dam.elcorteingles.es/producto/www-5608348435086-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0109561_221124GD-pendientes-largos-con-multicadenas-en-dorado/?parentCategoryId=999.39072387013&color=Oro',
    },
    {
      name: 'Urban Woman',
      price: 29,
      stars: 3,
      reviews: 250,
      seller: 'Lotus',
      image: 'https://dam.elcorteingles.es/producto/www-8430622822698-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0059063_8430622822698-pendiente-lotus-style-ls1672-42-urban-woman-de-acero-inoxidable-acabado-brillo/?parentCategoryId=999.39072387013&color=Multicolor',
    },
    {
      name: 'Pure Essential',
      price: 40,
      stars: 5,
      reviews: 250,
      seller: 'Lotus',
      image: 'https://dam.elcorteingles.es/producto/www-8430622719967-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0059063_8430622719967-pendientes-lotus-silver-lp1783-41-pure-essential-de-plata-acabado-brillo-con-circonita/?parentCategoryId=999.39072387013&color=Blanco',
    },
    {
      name: 'Plata con caja rectangular',
      price: 125,
      stars: 4,
      reviews: 250,
      seller: 'UNO De 50',
      image: 'https://dam.elcorteingles.es/producto/www-8435302480045-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/A46605035-pendientess-de-plata-con-caja-rectangular-y-cristal-facetado-gris-verdoso/?parentCategoryId=999.39072387013&color=Gris',
    },
    {
      name: 'Creativity Circle',
      price: 69,
      stars: 2,
      reviews: 250,
      seller: 'Swarovski',
      image: 'https://dam.elcorteingles.es/producto/www-9009652017078-00.jpg?impolicy=Resize&width=967&height=1200',
      url: 'https://www.elcorteingles.es/moda-mujer/MP_0064667_5201707-pendientes-creativity-circle-banados-en-rodio-con-cristales-transparentes/?parentCategoryId=999.39072387013&color=Blanco',
    },
];


/** FILTER **/
const SELLERS = [];
let selectedSeller = '';
let selectedPrice = NaN;

function fillSellers(products) {
  products.forEach(product => {
    if(!SELLERS.includes(product.seller)) {
      SELLERS.push(product.seller);
    }
  });
}

fillSellers(products);

// Filter by Seller
function createSellerFilter() {
  const sectionFilter = document.querySelector('.filter');
  const selectSeller = document.createElement('select');
  selectSeller.className = 'selectSeller';
  
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Filtrar marca';
  defaultOption.value = '';
  selectSeller.appendChild(defaultOption);
  
  SELLERS.forEach(seller => {
    const optionSeller = document.createElement('option');
    optionSeller.value = seller;
    optionSeller.textContent = seller;
  
    selectSeller.appendChild(optionSeller);
  });
  
  sectionFilter.appendChild(selectSeller);

  selectSeller.addEventListener('change', (e) => {
    selectedSeller = e.target.value;
    filterProducts();
  });
}

// Filter by Price
function createPriceFilter() {
  const sectionFilter = document.querySelector('.filter');
  const inputPrice = document.createElement('input');
  inputPrice.className = 'inputPrice';

  inputPrice.type = 'number';
  inputPrice.placeholder = '<€€€';

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Buscar';

  searchButton.addEventListener('click', () => {
    const price = parseFloat(inputPrice.value);
    selectedPrice = price;

    filterProducts();
  });

  sectionFilter.appendChild(inputPrice);
  sectionFilter.appendChild(searchButton);

  const buttonClean = document.createElement('button');
  buttonClean.textContent = 'Limpiar filtros';
  buttonClean.addEventListener('click', () => { cleanFilters(); });
  sectionFilter.appendChild(buttonClean);
}

// Filter
function filterProducts() {
  let filteredProducts = products;

  if(selectedSeller) {
    filteredProducts = filteredProducts.filter(product => product.seller === selectedSeller);
  }

  if(!isNaN(selectedPrice)) {
    filteredProducts = filteredProducts.filter(product => product.price < selectedPrice);
  }

  printProducts(filteredProducts);
}

// Clean Filters
function cleanFilters() {
  const selectSeller = document.querySelector('.selectSeller');
  const inputPrice = document.querySelector('.inputPrice');
  
  selectSeller.value = '';
  inputPrice.value = '';
  selectedSeller = '';
  selectedPrice = NaN;

  filterProducts();
}

createSellerFilter();
createPriceFilter();


/** PRODUCTS **/
function printProducts(products) {
  const sectionProducts = document.querySelector('.products');
  sectionProducts.innerHTML = '';

  if(products.length === 0) { showSuggestedProducts(); return; }

  products.forEach(product => {
    const articleProduct = document.createElement('article');
    articleProduct.classList = 'product';

    const imgProduct = document.createElement('img');
    imgProduct.src = product.image;
    imgProduct.classList = 'imgProduct';
    
    const nameProduct = document.createElement('h3');
    nameProduct.textContent = product.name;
    
    const priceProduct = document.createElement('p');
    priceProduct.textContent = `${product.price}€`;
    
    const divStartsProduct = document.createElement('div');
    divStartsProduct.className = 'divStars';
    for(let i=1; i<=5; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      if(i <= product.stars) {
        star.classList.add('filled');
      }
        
      divStartsProduct.appendChild(star);
    }
    
    articleProduct.appendChild(imgProduct);
    articleProduct.appendChild(nameProduct);
    articleProduct.appendChild(priceProduct);
    articleProduct.appendChild(divStartsProduct);

    sectionProducts.appendChild(articleProduct);
  });
}

printProducts(products);

// Show suggested products when there are no products with the filters applied
function showSuggestedProducts() {
  const sectionProducts = document.querySelector('.products');

  const divSuggestedProducts = document.createElement('div');
  divSuggestedProducts.className = 'suggested';

  const h2 = document.createElement('h2');
  h2.textContent = 'Vaya... no hay productos para los filtros aplicados';
  divSuggestedProducts.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = 'Te dejamos con nuestros productos mejor valorados';
  divSuggestedProducts.appendChild(p);
  
  const resultArray = products.filter((product) => product.stars >= 5);
  printProducts(resultArray);

  const divProducts = document.createElement('div');
  const productArticles = document.querySelectorAll('.product');
  productArticles.forEach(product => {
    divProducts.appendChild(product);
  });
  divSuggestedProducts.appendChild(divProducts);

  sectionProducts.appendChild(divSuggestedProducts);
}
