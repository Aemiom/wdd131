const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

document.getElementById("LastModified").innerHTML = document.lastModified;




const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {


    const productSelect = document.getElementById('product');

    if (productSelect) {
        products.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = p.name;
            productSelect.appendChild(option);
        });
    }


    const reviewCountDisplay = document.getElementById('reviewCount');

    if (reviewCountDisplay) {
        let reviewCount = localStorage.getItem('reviewCount');

        if (!reviewCount) {
            reviewCount = 0;
        }

        reviewCount++;

        localStorage.setItem("reviewCount", reviewCount);

        reviewCountDisplay.textContent = reviewCount;
    }

});