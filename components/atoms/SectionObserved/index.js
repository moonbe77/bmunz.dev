import PropTypes from 'prop-types';
import { useIntersect } from '../../../utils/useIntersect';
import style from './SectionObserved.module.css';

const { format } = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
});
const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

export default function SectionObserved(props) {
  const { children } = props;

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });

  return (
    <div
      className={`${style.container}`}
      ref={ref}
      style={{
        opacity: format(entry.intersectionRatio),
        transform: `translateY(${format(entry.intersectionRatio) * 100}px)`,
      }}
    >
      <div className={`${style.content}`}>{children}</div>
    </div>
  );
}

SectionObserved.propTypes = {
  children: PropTypes.node.isRequired,
};
