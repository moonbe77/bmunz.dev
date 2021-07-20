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
    clipPath: `circle(0% at 92.5% 102.8%)`,
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
        className={`${styles.botWrapper}`}
        initial={false}
        ref={BotWrapperRef}
        variants={botAnimation}
      >
        <BotContainer />
      </motion.div>
      <BotButton toggle={() => toggleOpen()} botHeight={botDimensions.height} />
    </motion.div>
  );
};

export default Bot;
