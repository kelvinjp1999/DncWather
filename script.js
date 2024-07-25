
 async function getAddressByCep(){
    const cep=document.getElementById("cep").value;
    const lat=document.getElementById("latitude").value;
    const lon=document.getElementById("longitude").value;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responsePrev = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
        const data= await response.json();
        const dataPrev= await responsePrev.json();
        document.getElementById('rua_res').innerHTML=data.logradouro;
        document.getElementById('bairro_res').innerHTML=data.bairro;
        document.getElementById('cidade_res').innerHTML=data.localidade;
        document.getElementById("res_temperatura").innerHTML=`Previsão de tempo de acordo com a região:  ${dataPrev.hourly.temperature_2m[0]}`;
    }catch(error){
        alert("Verifique se os dados foram preenchidos corretamente")
    }
}

