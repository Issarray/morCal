document.getElementById("calButt").addEventListener("click",doTheMath);


/*TheMonthlyPMT=(amount loaned)*(rate/1200)/(1-(1+(rate/1200)))^(-months)

consolidated it looks like

((amount loaned)*(rate/1200))*(1+ (rate/1200))^months /((1+(rate/1200))^n ) - 1

Remaining bal= "before the next month equals the amount of the loan"
interest pmt = (remaining bal) * (monthly interest rate)
principle = (TheMonthlyPMT) - interest pmt
*/

//down payment
var dpay = parseInt(document.getElementById("1stPay").value);
//the rate
var rate = parseInt(document.getElementById("apr").value);
//the amount of the loan
var loan = parseInt(document.getElementById("pBal").value);
//the term in months
var term = parseInt(document.getElementById("months").value);



//a function to get the monthly pmt
function doTheMath(){

    
    let monthlyInt = rate/1200

    for(i=0; i <= term; i++){
        /*let theMonths = [''];
        theMonths.push([i])*/
        let monthlyPMT = ((loan * monthlyInt)* Math.pow((1 + monthlyInt),i))/(Math.pow((1+monthlyInt),i)-1);
        
        document.getElementById("outMPay").innerHTML = monthlyPMT;
    }
    
}

