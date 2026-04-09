import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'px-6 py-3 border-2 border-toy-blue/20 text-toy-blue font-bold rounded-toy hover:bg-toy-blue/5 transition-all text-center flex items-center justify-center gap-2',
    ghost: 'px-6 py-3 text-slate-500 font-bold hover:text-toy-blue transition-colors flex items-center justify-center gap-2',
    coral: 'px-6 py-3 bg-toy-coral text-white font-bold rounded-toy hover:bg-toy-coral-dark shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
