import { useEffect, useState } from 'react';
function CurrencyConverter() {
    const [get1, set1] = useState("USD");
    const [get2, set2] = useState("INR");
   const [getcur1, setCur1] = useState("");
   const [getcur2, setCur2] = useState("");

    const fetchapi = async () => {
        const api1 = await fetch("https://v6.exchangerate-api.com/v6/392e5f7e67b9b07b743cef9d/latest/" + get1);
        const data1 = await api1.json();
        console.log(data1);
        const api2 = await fetch("https://v6.exchangerate-api.com/v6/392e5f7e67b9b07b743cef9d/latest/" +get2);
        const data2 = await api2.json();
        const drop1  = Object.entries(data1.conversion_rates).map((rate)=>{
            return <option value={rate  }>{rate}</option>
        });
        const drop2  = Object.entries(data2.conversion_rates).map((rate)=>{
            return <option value={rate  }>{rate}</option>
        });
        setCur2(drop1);
        setCur1(drop1); 
    }
    useEffect(() => {
        fetchapi();
    });

    return (
        <>
            <div><select>
                {getcur1}
            </select></div>
            <div><select>{getcur2}
            </select></div>

        </>

    );
}
export default CurrencyConverter;