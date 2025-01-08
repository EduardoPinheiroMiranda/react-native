const baseURL = "https://economia.awesomeapi.com.br/json/all"

export async function getCurrency(codeCurrency){

    let currency = {};

    await fetch(`${baseURL}/${codeCurrency}`)
        .then(response => response.json())
        .then(data => currency = data);

    return currency;
}