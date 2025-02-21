let balance = 1000;
const balanceDisplay = document.getElementById("balance");
const historyList = document.getElementById("history");
const emojiBox = document.getElementById("emoji-box");

function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0) {
        balance += amount;
        updateUI(`Deposited ${amount} KES`);
        showClapEmojis();
    } else {
        alert("Enter a valid amount.");
    }
}

function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateUI(`Withdrew ${amount} KES`);
    } else {
        alert("Insufficient funds or invalid amount.");
    }
}

function updateUI(message) {
    balanceDisplay.textContent = balance;
    let li = document.createElement("li");
    li.textContent = message;
    historyList.appendChild(li);
    document.getElementById("amount").value = "";
}

function showClapEmojis() {
    emojiBox.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        let emoji = document.createElement("span");
        emoji.innerHTML = "👏";
        emoji.classList.add("clap-emoji");
        emojiBox.appendChild(emoji);
    }
    setTimeout(() => emojiBox.innerHTML = "", 4000);
}
