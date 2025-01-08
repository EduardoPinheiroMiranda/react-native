const baseURL = "https://economia.awesomeapi.com.br/json"

export async function getCurrency(codeCurrency){

    let currency = {};

    await fetch(`${baseURL}/${codeCurrency}`)
        .then(response => response.json())
        .then(data => currency = data);

    return currency;
} 