const fromAmountElement=document.querySelector(".amount")
const convertedAmountElement=document.querySelector(".convertedAmount")
const fromCurrencyElement=document.querySelector(".fromCurrency")
const toCurrencyElement=document.querySelector(".toCurrency")
const resultElement=document.querySelector(".result")

const countries=[
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "INR", name: "Indian Rupee" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "KRW", name: "South Korean Won" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "THB", name: "Thai Baht" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "NPR", name: "Nepalese Rupee" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "ZAR", name: "South African Rand" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "COP", name: "Colombian Peso" },
  { code: "PEN", name: "Peruvian Sol" },
  { code: "DKK", name: "Danish Krone" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "RON", name: "Romanian Leu" },
  { code: "ILS", name: "Israeli New Shekel" }
];


countries.forEach(country=>{
    const option1= document.createElement('option')
    const option2= document.createElement('option')

    option1.value=option2.value=country.code
    option1.textContent=option2.textContent=`${country.code} (${country.name})`

    fromCurrencyElement.appendChild(option1)
    toCurrencyElement.appendChild(option2)

    
     fromCurrencyElement.value="USD"
     toCurrencyElement.value="INR"
})

    const getExchangeRate=async()=>{
    const amount=parseFloat(fromAmountElement.value)
    const fromCurrency=fromCurrencyElement.value;
    const toCurrency=toCurrencyElement.value;    

    const res=await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    const data=await res.json();

    const conversionRate=data.rates[toCurrency];
    const convertedAmount=(amount*conversionRate);

    convertedAmountElement.value=convertedAmount;
    resultElement.textContent=`${amount} ${fromCurrency}=${convertedAmount} ${toCurrency}`
}

fromAmountElement.addEventListener("input",getExchangeRate)
fromCurrencyElement.addEventListener("change",getExchangeRate)
toCurrencyElement.addEventListener("change",getExchangeRate)
window.addEventListener("load",getExchangeRate)
