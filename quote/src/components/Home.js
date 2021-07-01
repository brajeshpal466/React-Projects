import { useState, useEffect } from 'react';

function Home() {
    const [ livedata,setlivedata] = useState("");
    const [data, usedata] = useState("");
    useEffect(() => {
        fetchdata();
    }, [])
    const fetchdata = async () => {
        const rowdata = await fetch("https://api.imgflip.com/get_memes");
        const datameme = await rowdata.json();
        const mem = datameme.data.memes.map((items,index) => {
            return (
                <>
                <div className="col-10 col-md-3" kay={index}>
                 <div className="card" id="cards">
                     <img className="card-img-top" src={items.url}/>
                     <div className="card-body">
                         <h5 className="card-title">{items.name}</h5>
                     </div>
                 </div>
                </div>
         
                </>
            )
        });
        console.log(datameme.data.memes);
      usedata(mem);
    }
    const clickfun =(e)=>{
     const val = e.target.value;
         setlivedata(val);
         console.log(livedata);
         const cname  = data.filter((item)=>{
            if(livedata.data !== "" ){
            return item;
            }else if(item.name.toLowerCase.include(livedata.toLowerCase())){
              return item;
            }
         });
       usedata(cname);         
    }
    return (<>
       <div className="conatainer search-zone">
          <center> <input onChange={clickfun} className="search-bar" placeholder="search.."></input></center>
       </div>
        <div className="row">{data}</div>
    </>);
}
export default Home;