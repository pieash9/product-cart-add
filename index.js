//! dynamic serial number
let serial = 0;
let totalResult = 0

document.getElementById("first-card").addEventListener("click", function (e) {
  // get data from html using id
  serial += 1;
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-product").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;
  // console.log(productName,productPrice,productQuantity);
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton('first-card')
});

//using event object from browser
document.getElementById("second-card").addEventListener("click", function (e) {
  serial += 1;
  // console.log(e.target.parentNode.parentNode.children[0].innerText);
  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;

  const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
  displayData(pName, pPrice, pQuantity, sumTotal);
  disabledButton('second-card')
});

//4th card
document.getElementById("third-card").addEventListener("click", function (e) {
  // get data from html using id
  serial += 1;
  const productName = document.getElementById("third-title").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;
  // console.log(productName,productPrice,productQuantity);
  const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton('third-card')
});

//last card
document.getElementById('last-card').addEventListener('click',function(){
  serial +=1;

  const productName = document.getElementById("last-title").innerText;
  const productPrice = document.getElementById("last-price").value;
  const productQuantity = document.getElementById("last-quantity").value;
  if(productPrice == '' || productQuantity == '' || productPrice <= 0 || productQuantity <= 0 ){
    return alert("0 er theke boro number din !!")
  }
  const result = parseFloat(productPrice) / parseFloat(productQuantity);
  displayData(productName ,productPrice,productQuantity,result);
  disabledButton('last-card')
})

//common function to display data
function displayData(nameOfP, priceOfP, quantityOfP, resultP) {
  //show the data
  const container1 = document.getElementById("table-container1");
  const tr1 = document.createElement("tr");
  tr1.innerHTML = `
    
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfP}</td>
    <td>${resultP}</td>

    `;
  container1.appendChild(tr1);

  const container2 = document.getElementById("table-container2");
  const tr2 = document.createElement('tr');
  tr2.innerHTML = `

  <td class ="font-bold text-center text-3xl">Total Result : ${totalResult}</td>
  
  `
  container2.appendChild(tr2);
}



function disabledButton(btnId){
  document.getElementById(btnId).setAttribute('disabled',true)
}