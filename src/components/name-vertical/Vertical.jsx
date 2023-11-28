import style from './Vertical.module.css';
import line from './../../assets/icons/black-line.svg';

export function Vertical() {
  return (
    <div className={style.vertical}>
      <h3>TULIO MININI</h3>
      <img src={line} alt="straight line in black color" />
    </div>
  );
}
