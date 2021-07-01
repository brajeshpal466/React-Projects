import {useState ,useEffect} from 'react';
function  Services() {
   const [ data ,setData] = useState("");
   const [ filterdata ,setfilter] = useState("");
   const [ live ,setlive] = useState("");
   useEffect(()=>{
   console.log("run one time");
      fetchApi();
   }, []);
   
    const fetchApi = async() =>{
        const api = await fetch("https://restcountries.eu/rest/v2/all");
        const d = await api.json();
       // console.log(d);
        setfilter(d);
        const cname = d.map( (items)=>{
         return (
             <>
             <div className="col-10 col-md-3">
                 <div className="card" id="cards">
                <img className="card-img-top" src={items.flag} alt="flag"/>
                <div className="card-body">
                    <h5 className="card-title">{items.name}</h5>
                    <div className="card-text">
                        <p>Native Name : {items.nativeName}</p>
                        <p>Region : {items.region}</p>
                        <strong>Language : {items.languages[0].name}</strong>
                        <p>Time Zone :{items.timezones}</p>
                        <strong>Population :{items.population}</strong>
                    </div>
                </div>
                 </div>
             </div>
             </>
         )
        });
        setData(cname);
    }

    const filterfun = (e)=>{
        setlive(e.target.value);
        console.log(live);
       const cname = filterdata.filter((item)=>{
            if(live=""){
                return item;
            }else if(item.name.toLowerCase().includes(live.toLowerCase())){
                 return item;
            }
        });
        //console.log(filter);
        //console.log(ele);
      }

    return(
       <>
        <p><strong>API Data</strong></p>
        <div className="searchzone container">
            <center><input type="text" onChange={filterfun} className="form-control" placeholder="search.." className="search-bar"/></center>
        </div>
        <div className="row">
            {data}
        </div>
    </>
    );
}
export default Services;