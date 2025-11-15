window.addEventListener("load", () =>{

    let numberAccount = document.querySelector(".header__number");
    let money = document.querySelector(".header__money");
    let containerIcos = document.querySelectorAll(".item__ico");
    let titles = document.querySelectorAll(".item__title");
    let dates = document.querySelectorAll(".item__date");
    let bills = document.querySelectorAll(".item__bill");
    let totals = document.querySelectorAll(".item__total");
    let bgLoads = document.querySelectorAll(".bg-load")
    let bgLoadsText = document.querySelectorAll(".bg-load-text")

    function setInfo(){

        numberAccount.innerText = "CU99 3231 43244 43234 090909 9900";
        money.innerText = "10.000 USD";

        containerIcos.forEach(ico => {
            ico.innerHTML = `<i class = "fa-regular fa-credit-card"></i>`;
        });


        titles.forEach(title => {
            title.innerText = "Empresa";
        });

        dates.forEach(date => {
            date.innerText = "24/10/2025";
        });

        bills.forEach(bill => {
            bill.innerText = "-500 USD";
        });

        totals.forEach(total => {
            total.innerText = "5000 USD";
        });

        bgLoads.forEach(bgLoad => {
            bgLoad.classList.remove("bg-load");
        });

        bgLoadsText.forEach(bgLoadText => {
            bgLoadText.classList.remove("bg-load-text");
        });



    }

    /* Al cagar la pagina 3 segundos despues */

    setTimeout(setInfo, 3000);
    /* setInfo(); */


});