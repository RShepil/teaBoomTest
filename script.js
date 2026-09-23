document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll(".product-card__packaging-input");

  const detailSku = document.getElementById("detail-sku");
  const detailStock = document.getElementById("detail-stock");
  const detailPrice = document.getElementById("detail-price");
  const detailOldPrice = document.getElementById("detail-old-price");

  const updateDetails = (input) => {
    const { id, price, oldPrice, stock } = input.dataset;

    detailSku.textContent = id;
    detailStock.textContent = stock;
    detailPrice.textContent = price + " ₽";
    detailOldPrice.textContent = oldPrice + " ₽";
  };

  const checked = document.querySelector(
    ".product-card__packaging-input:checked",
  );
  if (checked) updateDetails(checked);

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) updateDetails(e.target);
    });
  });
});
