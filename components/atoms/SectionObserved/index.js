import PropTypes from 'prop-types';
import { useIntersect } from '../../../utils/useIntersect';
import style from './SectionObserved.module.css';

export default function SectionObserved(props) {
  const { children } = props;

  const [ref, entry] = useIntersect({
    threshold: 1,
  });
  // console.log(entry);

  return (
    <div className={`${style.container}`} ref={ref}>
      <div className={`${style.content}`}>{children}</div>
    </div>
  );
}

SectionObserved.propTypes = {
  children: PropTypes.node.isRequired,
};
