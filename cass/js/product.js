$(document).ready(function () {
  $("header").load("header.html");
  $("footer").load("footer.html");
});

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  productLoad(productId);
});

function productLoad(productId) {
  $.get("https://pjs168686.github.io/cass/item.json")
    .done(function (data) {
      const product = data[productId];
      const imgAdd = `<img src="${data[productId].img}" class="prodcut-img" alt="beer"/>`;
      $("#item-img").append(imgAdd);
      $("#item-title").text(data[productId].title);
      $("#item-price").text(data[productId].price);

      if (product.detail !== null) {
        const detailImg = `<img src="${product.detail}" id="detail-img">`;
        document
          .querySelector(".item-detail")
          .insertAdjacentHTML("beforeend", detailImg);

        const moreBox = `<div class="item-seemore"><h4 class="seemore-text">상품정보 더보기</h4></div>`;
        document
          .querySelector(".item-detail")
          .insertAdjacentHTML("afterend", moreBox);

        const imgElement = new Image();
        imgElement.src = product.detail;

        imgElement.onload = function () {
          const imgHeight = imgElement.naturalHeight;
          let moreCount = 1;
          document
            .querySelector(".item-seemore")
            .addEventListener("click", function () {
              document.querySelector(".item-detail").style.height = "auto";
              if (moreCount == 1) {
                moreCount = 0;
                document.querySelector(".seemore-text").textContent =
                  "상품정보 접기";
              } else {
                document.querySelector(".seemore-text").textContent =
                  "상품정보 더보기";
                document.querySelector(".item-detail").style.height = `500px`;
                moreCount = 1;
              }
            });
        };
      }
    })
    .fail(function (error) {
      console.log("실패");
    });
}

document.querySelector(".minus-btn").addEventListener("click", function () {});
