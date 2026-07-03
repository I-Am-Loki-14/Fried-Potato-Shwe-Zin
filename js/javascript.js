document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navbar) {
    navToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        navToggle.classList.remove("open");
      }
    });
  });
});

function blockMinus(event) {
    if (event.key === '-' || event.key === 'Minus' || event.key === 'e') {
        event.preventDefault();
    }
}


function addToCart() {
    const quantityInput = document.getElementById('quantity');
    let currentQty = Number(quantityInput.value);
    quantityInput.value = currentQty + 1; 
    
    calculatePrice();
}


function calculatePrice() {
    const quantityInput = document.getElementById('quantity');
    const totalDisplay = document.getElementById('totalDisplay');
    const noteDisplay = document.getElementById('noteDisplay');

    
    if (quantityInput.value === "" || Number(quantityInput.value) === 0) {
        totalDisplay.innerText = "0 ကျပ်";
        noteDisplay.innerText = "အရေအတွက် ရိုက်ထည့်ပါ သို့မဟုတ် အပေါ်ကခလုတ်နှိပ်ပါ။";
        noteDisplay.style.color = "#a0a0a0";
        return;
    }

    let quantity = Number(quantityInput.value);
    let pricePerPack = 2200;
    let baseTotal = quantity * pricePerPack; 
    let discount = 0;

   
    discount = Math.floor(quantity / 5) * 500;

    
    let finalTotal = baseTotal - discount;

   
    totalDisplay.innerText = finalTotal.toLocaleString() + " ကျပ်";

    
    if (discount > 0) {
        
        let nextMilestone = (Math.floor(quantity / 5) + 1) * 5;
        let missingPacks = nextMilestone - quantity;

        noteDisplay.innerText = `အထူးပရိုမိုးရှင်းဖြင့် ${discount.toLocaleString()} ကျပ် သက်သာသွားပါပြီ 🎉 \n (နောက်ထပ် ${missingPacks} ထုပ် ထပ်ယူရင် နောက်ထပ် ၅၀၀ ထပ်လျှော့ဦးမှာနော်! 🔥)`;
        noteDisplay.style.color = "#2ed573";
    } 
    else {
        
        let missingPacks = 5 - quantity;
        noteDisplay.innerText = `နောက်ထပ် ${missingPacks} ထုပ်ပဲ ထပ်ယူလိုက်ရင် ၅၀၀ ကျပ် တန်းလျှော့ပေးမှာနော်! 🔥`;
        noteDisplay.style.color = "#ff4757"; 
    }
}