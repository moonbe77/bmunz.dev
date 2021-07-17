/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../utils/useDimensions';
import BotContainer from './BotContainer';
import BotButton from './BotButton';
import styles from './bot.module.scss';

// motion animation of clippath
const botAnimation = {
  open: () => ({
    clipPath: `circle(100% at 50% 50%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: () => ({
    clipPath: `circle(2% at 91.2% 95.5%)`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};

const Bot = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const BotWrapperRef = useRef();
  const botDimensions = useDimensions(BotWrapperRef);

  return (
    <motion.div animate={isOpen ? 'open' : 'closed'}>
      <motion.div
        // ref={containerRef}
        className={`${styles.botWrapper} ${styles.background}`}
        custom={botDimensions}
        initial={false}
        ref={BotWrapperRef}
        variants={botAnimation}
      >
        <BotContainer toggle={() => toggleOpen()} />
      </motion.div>
      <BotButton toggle={() => toggleOpen()} botHeight={botDimensions.height} />
    </motion.div>
  );
};

export default Bot;
