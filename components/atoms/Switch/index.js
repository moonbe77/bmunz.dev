import { useStateDispatch } from '../../../store/store';
import style from './switch.module.css';

export default function Switch(props) {
  const dispatch = useStateDispatch();
  const { value, type, children } = props;

  function handleChange() {
    dispatch({
      type,
      payload: value,
    });
  }

  const changeThemeShortCut = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${style.switch}`}
      onClick={handleChange}
      onKeyDown={changeThemeShortCut}
      role="button"
      tabIndex="0"
      data-testid="switch"
    >
      {children}
    </div>
  );
}
