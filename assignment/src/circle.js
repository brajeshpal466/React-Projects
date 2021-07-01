import { useEffect, useState } from 'react';
function Circle(props) {
    const [tit, setTit] = useState(props.slides[0].title);
    const [txt, setTxt] = useState(props.slides[0].text);
    const [rest, setRest] = useState(true);
    const [nt, setNt] = useState(false);
    const [pr, setPr] = useState(true);
    const [c, setC] = useState(0);

    useEffect(() => {
        if (c === 0) {
          setPr(true);
           setRest(true);    
        }else{
            setPr(false);
            setRest(false);
        }
        if (c === props.slides.length - 1) {
           setNt(true);
        }else{
            setNt(false);
        }

        setTit(props.slides[c].title);
        setTxt(props.slides[c].text);
    }, [c]);
    const restartbtn = () => {
        setC(0);
    }
    const nextbtn = () => {
      setC(c+1);
    }
   const prebtn = () => {
      setC(c-1);
    }

return (
    <>
        <center>
            <h1 data-testid="title">{tit}</h1>
            <p data-testid="text">{txt}</p>
            <button data-testid="button-restart" onClick={restartbtn} disabled={rest}>Restart</button>
            <button data-testid="button-next" onClick={nextbtn} disabled={nt}>Next</button>
            <button data-testid="button-prev" onClick={prebtn} disabled={pr}>Prev</button>
        </center>
    </>
);
    }
export default Circle;