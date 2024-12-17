


import png from '../../assets/rick-and-morty.png';
import s from './Png.module.css';

const Png = () => {
  return (
    <div className={s.img}>
      <img src={png} alt="Rick and Morty" />
    </div>
  );
};

export default Png;