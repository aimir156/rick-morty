import s from './img.module.css'
import img from '../../assets/logotip.svg'
const Img = () => {
  return (
    <div>
        <img className= {s.img} src= {img} alt="" />
    </div>
  )
}

export default Img