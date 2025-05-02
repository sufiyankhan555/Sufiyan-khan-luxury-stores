const searchBar = document.getElementById('searchBar');
const products = document.querySelectorAll('.product');

searchBar.addEventListener('keyup', function (e) {
  const searchValue = e.target.value.toLowerCase();

  products.forEach(function (product) {
    const productName = product.querySelector('h2').textContent.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});