import { useState, useEffect, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../utils/useDimensions';
import BotContainer from './BotContainer';
import BotButton from './BotButton';
import styles from './bot.module.scss';

const botAnimation = {
  open: ({ x = 0, y = 0 }) => ({
    clipPath: `ellipse(800px 1000px at 100% 100%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: ({ x = 0, y = 0 }) => ({
    clipPath: `ellipse(80px 80px at 100% 100%)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};

const Bot = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const ButtonRef = useRef();
  // const botDimensions = useDimensions(containerRef);
  const botTogglePosition = useDimensions(ButtonRef);
  console.log({ botTogglePosition });

  return (
    <div>
      <motion.div
        className={styles.botWrapper}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={botTogglePosition}
        // ref={containerRef}
        variants={botAnimation}
        className={styles.background}
      >
        <BotContainer toggle={() => toggleOpen()} />
        <BotButton toggle={() => toggleOpen()} reference={ButtonRef} />
      </motion.div>
    </div>
  );
};

export default Bot;
