const billInput = document.getElementById('billAmount');
const tipInput = document.getElementById('tipPercent');
const calculateBtn = document.getElementById('calculateBtn');
const tipResult = document.getElementById('tip');
const totalResult = document.getElementById('total');
const resetBtn = document.getElementById('reset')

function tipCalculator() {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);
    if (!bill || !tipPercent || bill <= 0 || tipPercent <= 0) {
        tipResult.innerText = "";
        totalResult.innerText = "Please Enter A Valid Amount.";
        return;
    }

    const tipAmount = bill * tipPercent / 100;
    const totalbill = tipAmount + bill;
    tipResult.innerText = `Tip Amount : ₹${tipAmount.toFixed(2)}`;
    totalResult.innerText = `Total Bill : ₹${totalbill.toFixed(2)}`;

}

function resetAll() {
    billInput.value = "";
    tipInput.value = "";
    tipResult.innerText = "";
    totalResult.innerText = "";
}
calculateBtn.addEventListener('click', tipCalculator);
resetBtn.addEventListener('click', resetAll);
