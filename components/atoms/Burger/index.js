// Burger.js
import PropTypes from 'prop-types';
import style from './Burger.module.css';

const Burger = ({ isDarkTheme, showSideMenu, handleSideMenu }) => {
  const theme = isDarkTheme ? style.dark : style.light;

  // const line1 = useSpring({
  //   transform: showSideMenu ? 'rotate(45deg)' : 'rotate(0deg)',
  // });
  // const line2 = useSpring({
  //   opacity: showSideMenu ? 0 : 1,
  // });
  // const line3 = useSpring({
  //   transform: showSideMenu ? 'rotate(-45deg)' : 'rotate(0deg)',
  // });

  const handleKeyDown = (e) => {
    console.log(e.target);
  };

  return (
    <div
      className={style.burger}
      role="switch"
      aria-checked={showSideMenu}
      onClick={handleSideMenu}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-testid="burger"
    >
      <animated.div style={line1} className={`${style.line} ${theme}`} />
      <animated.div style={line2} className={`${style.line} ${theme}`} />
      <animated.div style={line3} className={`${style.line} ${theme}`} />
    </div>
  );
};

export default Burger;

Burger.propTypes = {
  isDarkTheme: PropTypes.bool,
  showSideMenu: PropTypes.bool,
  handleSideMenu: PropTypes.func,
};
