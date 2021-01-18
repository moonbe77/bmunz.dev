import PropTypes from 'prop-types';
import {
  SiNextDotJs,
  SiStyledComponents,
  SiMysql,
  SiCraftcms,
  SiReact,
} from 'react-icons/si';
import { FaRadiationAlt,FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import style from './TechIcon.module.css';
import { techs } from '../../../public/data/techs';

export default function TechIcon(props) {
  const { tech } = props; // tech name

  let iconComponent;

  switch (tech) {
    case 'next':
      iconComponent = <SiNextDotJs />;
      break;
    case 'react':
      iconComponent = <SiReact />;
      break;
    case 'styledComponents':
      iconComponent = <SiStyledComponents />;
      break;
    case 'Mysql':
      iconComponent = <SiMysql />;
      break;
    case 'Express':
      iconComponent = <AiOutlineApi />;
      break;
    case 'CustomCMS':
      iconComponent = <SiCraftcms />;
      break;
    case 'StaticGeneration':
      iconComponent = <FaRadiationAlt />;
      break;
    case 'Hosting':
      iconComponent = <FaRegShareSquare />;
      break;

    default:
      break;
  }

  return (
    <div className={style.icon} title="">
      {iconComponent || ''}
    </div>
  );
}

TechIcon.propTypes = {
  tech: PropTypes.string,
};
