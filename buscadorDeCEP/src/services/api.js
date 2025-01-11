export async function GetCep(cep){
    
    let result = {};

    await fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => response.json())
        .then((data) => result = data);

    return result;
}