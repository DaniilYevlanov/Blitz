function calculateCO2() {
    let electricity = parseFloat(document.getElementById("electricity").value);
    let renewablePercent = parseFloat(document.getElementById("renewable-percent").value);


    if (isNaN(electricity) || isNaN(renewablePercent) || electricity <= 0 || renewablePercent <= 0 || renewablePercent > 100) {
        document.getElementById("result").innerHTML = "❌ Будь ласка, введіть коректні дані.";
        return;
    }

    const CO2_PER_KWH = 0.4;

    let renewableEnergy = (electricity * renewablePercent) / 100;

    let savedCO2 = renewableEnergy * CO2_PER_KWH;

    let resultElement = document.getElementById("result");
    resultElement.style.opacity = "0"; 
    setTimeout(() => {
        resultElement.innerHTML = `Ви можете скоротити приблизно <b>${savedCO2.toFixed(2)}</b> кг CO₂ на місяць!`;
        resultElement.style.opacity = "1"; 
    }, 300);
}