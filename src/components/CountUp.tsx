import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  /** Display text such as "400+", "70+" or "1,200". Anything that isn't a number is shown as is. */
  value: string;
  /** Seconds the count takes. */
  duration?: number;
  className?: string;
}

const PATTERN = /^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/;

/** Counts up from zero to the number inside `value` once it scrolls into view. */
export const CountUp: React.FC<CountUpProps> = ({ value, duration = 2.2, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();

  const match = value.match(PATTERN);
  const prefix = match?.[1] ?? '';
  const target = match ? parseFloat(match[2].replace(/,/g, '')) : 0;
  const suffix = match?.[3] ?? '';
  const useGrouping = match ? match[2].includes(',') : false;
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;

  const [current, setCurrent] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!match || !inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCurrent(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, target, duration]);

  if (!match) return <span className={className}>{value}</span>;

  const shown = current.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ''}`} aria-label={value}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
};
