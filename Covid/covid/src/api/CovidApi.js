const refectordata = (data)=>{
     console.log(data);
}

async function CovidApi() {
    const api = await (await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')).json();
    refectordata(api);
}


export default CovidApi
