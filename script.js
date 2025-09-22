
  const getSumBtn = document.createElement("button");
  getSumBtn.append("Get Total Price");
  document.body.appendChild(getSumBtn);

  const getSum = () => {
    let prices = document.querySelectorAll(".price");
    let totalsum = 0;

    prices.forEach(priceEL => {
      totalsum += parseInt(priceEL.textContent,10);
    });

    let newRow = document.createElement("tr");
    let totalCell = document.createElement("td");

    totalCell.setAttribute("colspan", "2");
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${totalsum}`;
	totalCell.id = "ans";

    newRow.appendChild(totalCell);

    let table = document.querySelector("table");
    table.appendChild(newRow);
  };

  getSumBtn.addEventListener("click", getSum);

