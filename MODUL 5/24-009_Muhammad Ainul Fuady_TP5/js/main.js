const buttonElement = document.getElementById("tambah");

buttonElement.addEventListener("click", function () {
  const tr = document.createElement("tr");
  const tbody = document.getElementById("tbody");
  tbody.appendChild(tr);
  const classes = ["barang", "harga", "jumlah", "subtotal"];
  for (let i = 0; i <= 4; i++) {
    const td = document.createElement("td");
    if (i == 4) {
      const buttonElement = document.createElement("button");
      buttonElement.textContent = "hapus";
      buttonElement.addEventListener("click", function () {
        tbody.removeChild(tr);
        hitungTotal();
      });
      // parent.tambah/remove(anak)
      td.appendChild(buttonElement);
    } else {
      const inputElement = document.createElement("input");
      inputElement.setAttribute("class", classes[i]);
      if (
        inputElement.classList == "harga" ||
        inputElement.classList == "jumlah"
      ) {
        inputElement.setAttribute("type", "number");
      }
      td.appendChild(inputElement);
    }
    tr.appendChild(td);
  }

  const subtotal = tr.querySelector(".subtotal");
  const harga = tr.querySelector(".harga");
  const jumlah = tr.querySelector(".jumlah");
  harga.addEventListener("input", function (e) {
    if (jumlah.value && e.target.value) {
      subtotal.value = jumlah.value * e.target.value;
      hitungTotal();
    }
  });
  jumlah.addEventListener("input", function (e) {
    if (harga.value && e.target.value) {
      subtotal.value = harga.value * e.target.value;
      hitungTotal();
    }
  });
});

const hitungTotal = () => {
  const total = document.querySelector("#total");
  const subtotals = document.querySelectorAll(".subtotal");
  let totalText = 0;

  subtotals.forEach((sub) => {
    totalText += parseFloat(sub.value);
  });

  total.innerHTML = parseInt(totalText);
};

const total = document.querySelector("#total");