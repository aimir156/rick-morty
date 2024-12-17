
import logo from '../../assets/rick-and-morty 1.png'
import s from './Png.module.css'

const Rick = () => {
  return (
    <div className={s.img}>
    <img src={logo} alt="Rick and Morty" />
  </div>
  )
}

export default Rick