import React,{useState, useRef, useEffect} from 'react'
import pokemonBg from '../assets/images/PocketSpirits.jpg'
import Menu from './Menu'
import Toast from './Toast'
import Modal from './Modal'


const answers = {
    Pikachu: [0.15911111111111112, 0.8559201141226819],
    Meowth: [0.7591111111111111, 0.9336661911554922],
    Jigglypuff: [0.3253333333333333, 0.9736091298145506]
  
}
const Container = ({navRef, timeOn, setTimeOn, time, setTime}) => {

  //to calculate menu position
  const [xPos,setxPos] = useState(0);
  const [yPos,setyPos] = useState(0);
  //use these coords to calculate user answer
  const [coords, setCoords] = useState([0,0]);
  //to show context menu
  const [showMenu, setShowMenu] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [found, setFound] = useState({'Pikachu':false, 'Meowth':false, 'Jigglypuff':false});
  const [showModal, setShowModal] = useState(false);
  
  const imgRef = useRef();

  useEffect(() => {
    if(Object.values(found).every((val)=> val==true)){
      setShowModal(true);
      setTimeOn(false);
    }
  }, [found])

  useEffect(()=>{
   console.log(timeOn);
  },[timeOn])

  const handleMenu = (x,y, mon)=>{
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;
    const navHeight = navRef.current.clientHeight;

    //find relative coords to work with all screen sizes
    const relX = x / width;
    const relY = (y - navHeight) / height;


    //check if there's any relX coord matching user selected relX coord
    const userX = Math.abs(relX - answers[mon][0]) < 0.02;

    //check if there's any relY coord matching user selected relY coord
    const userY = Math.abs(relY - answers[mon][1]) < 0.02;
    setShowMenu(false);

    if(userX && userY){
      setCorrect(true);
      setPokemon(mon);
      setFound({...found, [mon]:true});
    }

    else{
      setCorrect(false);
      setPokemon('nothing')
    }
    setShowToast(true);
  }

  const handleImgClick = (e)=>{
   e.preventDefault();
   //To prevent the menu from going out of the screen 
   if(imgRef.current.offsetWidth - e.pageX < 105){
    setxPos(e.pageX - 144);
   }else{
    setxPos(e.pageX);
   }
   if(imgRef.current.offsetHeight - e.pageY < 125){
    setyPos(e.pageY - 144);
   }else{
    setyPos(e.pageY);
   }
    setCoords([e.pageX,e.pageY]);
    setShowMenu(!showMenu);
    
  }
 
  return (
    <div className='relative'>
      {showModal && <div className='absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.6)] z-10 backdrop-blur-sm'></div>}
      {showToast && <Toast pokemon={pokemon} showToast={showToast} setShowToast={setShowToast} correct={correct}/>}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} time={time} setTime={setTime}/>}
      <img ref= {imgRef} src={pokemonBg} className='pokemonBg' onClick={(e)=>handleImgClick(e)}/>
      <Menu xPos= {xPos} yPos= {yPos} coords= {coords} showMenu= {showMenu} handleMenu= {handleMenu} found={found}/>
   
    </div>
  )
}

export default Container