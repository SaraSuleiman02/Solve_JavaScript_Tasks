document.addEventListener("DOMContentLoaded", function () {
  let gardenInfo = [];
  let priceSum = 0;
  const form = document.getElementById("formGarden");
  const nameInput = document.getElementById("nameInp");
  const seasonInput = document.getElementById("sesonInp");
  const flowerSelect = document.getElementById("selImg");
  const tableHead = document.getElementById("headCon");
  const tableBody = document.getElementById("bodCon");
  const tableFoot = document.getElementById("tfoCon");
  const clearListButton = document.getElementById("clerLis");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    createTableHead();
    addGardenFlower();
  });

  clearListButton.addEventListener("click", function () {
    tableBody.innerHTML = "";
    tableFoot.innerHTML = "";
  });

  function createTableHead() {
    tableHead.innerHTML = "";

    const tRow = document.createElement("tr");
    tableHead.appendChild(tRow);

    const deleteCell = document.createElement("th");
    tRow.appendChild(deleteCell);

    const nameCell = document.createElement("th");
    tRow.appendChild(nameCell);
    nameCell.textContent = "Name";

    const flowerCell = document.createElement("th");
    tRow.appendChild(flowerCell);
    flowerCell.textContent = "Flower";

    const seasonCell = document.createElement("th");
    tRow.appendChild(seasonCell);
    seasonCell.textContent = "Season";

    const priceCell = document.createElement("th");
    tRow.appendChild(priceCell);
    priceCell.textContent = "Price";
  }

  function gardenFlower(name, season, flower) {
    this.name = name;
    this.season = season;
    this.flower = flower;
    this.prise = calculatePrice(5, 20);
  }

  function addGardenFlower() {
    const name = nameInput.value;
    const season = seasonInput.value;
    const flower = flowerSelect.value;

    if (name === "" || season === "") {
      alert("Please Fill in all fields");
      return;
    }

    gardenInfo.push(new gardenFlower(name, season, flower));

    addRow();
  }

  function addRow() {
    tableBody.innerHTML = "";
    priceSum = 0;

    for (let i = 0; i < gardenInfo.length; i++) {
      const tRow = document.createElement("tr");
      tableBody.appendChild(tRow);

      // Add delete button cell
      const deleteCell = document.createElement("td");
      tRow.appendChild(deleteCell);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", function () {
        deleteRow(tRow);
      });
      deleteCell.appendChild(deleteButton);

      const nameCell = document.createElement("td");
      tRow.appendChild(nameCell);
      nameCell.textContent = gardenInfo[i].name;

      const imgCell = document.createElement("td");
      tRow.appendChild(imgCell);
      const img = document.createElement("img");
      img.src = `./img/${gardenInfo[i].flower}.jpg`;
      img.alt = gardenInfo[i].flower;
      img.width = 50;
      img.height = 50;
      imgCell.appendChild(img);

      const seasonCell = document.createElement("td");
      tRow.appendChild(seasonCell);
      seasonCell.textContent = gardenInfo[i].season;

      const priceCell = document.createElement("td");
      tRow.appendChild(priceCell);
      priceCell.textContent = gardenInfo[i].prise;

      priceSum += gardenInfo[i].prise;

      // Edit button Cell
      const edit = document.createElement("td");
      tRow.appendChild(edit);
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", function () {
        editRow(tRow, nameCell, seasonCell, editBtn);
      });
      edit.appendChild(editBtn);

      // Clear inputs after submission
      nameInput.value = "";
      seasonInput.value = "";
      flowerSelect.selectedIndex = 0;
    }

    createTableFoot(priceSum);
  }

  function calculatePrice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function deleteRow(row) {
    // Get the price from the row before removing it
    const priceCell = row.querySelector("td:nth-child(5)");
    const rowPrice = parseFloat(priceCell.textContent);
    console.log(rowPrice);
    

    // Subtract the row price from the total priceSum
    priceSum -= rowPrice;

    tableBody.removeChild(row);
    createTableFoot(priceSum);
  }

  function editRow(row, nameCell, seasonCell, editButton) {
    if (editButton.textContent === "Edit") {
      // Switch to 'Save'
      editButton.textContent = "Save";

      // Replace name and season with input fields
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = nameCell.textContent;
      nameCell.innerHTML = "";
      nameCell.appendChild(nameInput);

      const seasonInput = document.createElement("input");
      seasonInput.type = "text";
      seasonInput.value = seasonCell.textContent;
      seasonCell.innerHTML = "";
      seasonCell.appendChild(seasonInput);
    } else {
      // Save the new data and switch back to 'Edit'
      editButton.textContent = "Edit";

      const newName = nameCell.querySelector("input").value;
      const newSeason = seasonCell.querySelector("input").value;

      nameCell.innerHTML = newName;
      seasonCell.innerHTML = newSeason;
    }
  }

  function createTableFoot(sum) {
    tableFoot.innerHTML = "";

    let trFo = document.createElement("tr");
    tableFoot.appendChild(trFo);

    let tdFo = document.createElement("td");
    trFo.appendChild(tdFo);
    tdFo.textContent = "Sum of Prises: " + sum;
    tdFo.colSpan = 6;
    tdFo.style.textAlign = "center";
  }
});