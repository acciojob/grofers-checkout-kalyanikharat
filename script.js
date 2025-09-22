const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price");
.
	let totalsum = 0;
	prices.forEach((priceEL)=>{
		totalsum = parseFloat(priceEL.textcontent);
	});

	let newrow = document.createElement("tr");
	let totalcell = document.creatElement("td");

	totalCell.setAttribute("colspan", "2");
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${total}`;

	newrow.append(totalcell);

	let table = document.querySelector('table');
	table.appenChild('newrow');
	
	
  
};

getSumBtn.addEventListener("click", getSum);

