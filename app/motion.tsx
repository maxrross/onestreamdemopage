"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode, ComponentProps, ElementType } from "react";
import { useMemo, useState } from "react";

const easeOut: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export function Reveal({
  children,
  as: As = "div",
  className,
  delay = 0,
  amount = 0.2,
  y = 28,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  amount?: number;
  y?: number;
} & Omit<ComponentProps<typeof motion.div>, "children">) {
  const reduce = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(As as ElementType), [As]);
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className,
  amount = 0.2,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: easeOut }}
    >
      {children}
    </motion.button>
  );
}

export function FaqAccordion({
  items,
  PlusIcon,
  MinusIcon,
}: {
  items: { q: string; a?: string; open?: boolean }[];
  PlusIcon: () => ReactNode;
  MinusIcon: () => ReactNode;
}) {
  const initialIndex = items.findIndex((i) => i.open);
  const [openIndex, setOpenIndex] = useState<number>(
    initialIndex === -1 ? -1 : initialIndex
  );

  return (
    <div className="faq-box">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.article
            className={`faq-row${isOpen ? " open" : ""}`}
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.04 }}
            onClick={() => setOpenIndex(isOpen ? -1 : i)}
          >
            <div className="faq-q">
              <h3>{item.q}</h3>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
                style={{ display: "inline-flex" }}
              >
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </motion.span>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: isOpen && item.a ? "auto" : 0,
                opacity: isOpen && item.a ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: easeOut }}
              style={{ overflow: "hidden" }}
            >
              {item.a && <p>{item.a}</p>}
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
}
