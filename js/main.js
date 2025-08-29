const heart = document.getElementsByClassName("fa-heart");

for (h of heart) {
  h.addEventListener("click", function () {
    const countElement = document.getElementById("count");
    let count = parseInt(document.getElementById("count").innerText);
    count++;
    countElement.innerText = count;
  });
}

const callButtons = document.getElementsByClassName("call-btn");
for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    let coins = parseInt(document.getElementById("coins").innerText);

    if (coins < 20) {
      alert("No Enough Coins");
      return;
    }

    coins -= 20;
    document.getElementById("coins").innerText = coins;

    const card = btn.parentElement.parentElement;
    const serviceName = card.querySelector("h3").innerText;
    const serviceNumber = card.querySelector("h2").innerText;
    // console.log(serviceName, serviceNumber);
    alert(`Calling ${serviceName}: ${serviceNumber}`);

    // adding to history section
    const historyContainer = document.getElementById("call-history");

    const historyItem = document.createElement("div");

    historyItem.className =
      "flex justify-between items-center mt-5 bg-[#FAFAFA] rounded-[16px] py-4 px-1.5";

    historyItem.innerHTML = `
        <div>
        <h4 class="text-[#111] font-semibold font-inter ">${serviceName}</h4>
        <p class="text-[#5C5C5C] text-sm font-normal">${serviceNumber}</p>
        </div>
        <p>${new Date().toLocaleDateString()}</p>
        
        `;
    historyContainer.insertBefore(historyItem, historyContainer.children[1]);
  });
}


document.getElementById('clear-btn').addEventListener('click',function(){
    const historyContainer = document.getElementById('call-history');
    // console.log(historyContainer.children);
    while(historyContainer.children.length>1){
        historyContainer.removeChild(historyContainer.children[1]);
    }
    
})