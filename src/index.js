var bank_account = 300;
var how_many_phones = 0;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 80;
const TAX_RATE = 0.08;
const PHONE_PRICE = 30;

function calculating_tax(amt) {
  amt = amt + amt * TAX_RATE;
  return amt;
}

function format_price(price) {
  price = "$" + price.toFixed(2);
  return price;
}

function total_price() {
  var total_price = PHONE_PRICE + ACCESSORY_PRICE;
  total_price = calculating_tax(total_price);
  return total_price;
}

function wannabuy() {
  wannabuy = prompt("Up for a purchase today ?");

  if (wannabuy != "yes") {
    alert("Ok, have a good day !");
  } else {
    while (bank_account > 0) {
      if (total_price() <= SPENDING_THRESHOLD) {
        console.log(format_price(total_price()));
        bank_account = bank_account - total_price();
        how_many_phones++;
      } else {
        break;
      }
    }

    console.log("Phones and accessories bought :");
    console.log(how_many_phones);
    console.log("Your bank account has now ");
    console.log(format_price(bank_account));
  }
}

//wannabuy();
