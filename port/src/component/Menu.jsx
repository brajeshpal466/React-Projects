import  {NavLink} from 'react-router-dom';
function Menu(){
   const hmBur = ()=>{
     const ullist = document.querySelector('.ul-list'); 
      ullist.classList.toggle('active');
     
   }
  return(
      <>
      <nav>
<div className="brand-name">@BrajeshKumar</div>
   <div className="ul-list" >
    <ul className="ulbody">
        <>
        <li id='about'><NavLink >About Me</NavLink></li>
        <li id='edu'><NavLink >Education</NavLink></li>
        <li id='skills'><NavLink>Skills</NavLink></li>
        <li id='testo'><NavLink>Testomonial</NavLink></li>
        <li id='contact'><NavLink>Contact</NavLink></li>
        </>
    </ul>
    </div>
  <div onClick={hmBur} className="burger">
      <div></div>
      <div></div>
      <div></div>
  </div>
      </nav>
      
      </>
  )
}
export default Menu;