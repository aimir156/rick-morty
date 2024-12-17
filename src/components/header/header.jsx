import s from './header.module.css'
import logo from '../../assets/logo.png'
// import logotip from '../../assets/logotip.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className= {s.header}>
   
    <div className= {s.div}>
     <img className ={s.img} src={logo} alt="" />
     <div className={s.navigation}>
      <Link to={'/'} className={s.text}>Персонажи</Link>
      <Link to={'/location'} className={s.text}>Места</Link>
      <Link to={'/episode'} className={s.text}>Эпизоды</Link>
     </div>
    </div>
    
    </header>
    </>
  )
}

export default Header