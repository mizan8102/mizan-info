import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TerminalCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  animate?: boolean;
}

export function TerminalCard({ 
  children, 
  title, 
  className = '', 
  variant = 'default',
  animate = true 
}: TerminalCardProps) {
  const variantStyles = {
    default: 'border-green-400/30 bg-black/50',
    success: 'border-green-400/50 bg-green-400/5',
    warning: 'border-yellow-400/50 bg-yellow-400/5',
    error: 'border-red-400/50 bg-red-400/5'
  };

  const headerColors = {
    default: 'text-green-400',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  };

  const CardComponent = animate ? motion.div : 'div';
  const cardProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  return (
    <CardComponent
      className={cn(
        'border rounded-lg backdrop-blur-sm',
        variantStyles[variant],
        className
      )}
      {...cardProps}
    >
      {title && (
        <div className="px-3 sm:px-4 py-2 border-b border-current/20">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
            </div>
            <span className={cn('text-xs sm:text-sm font-mono truncate', headerColors[variant])}>
              {title}
            </span>
          </div>
        </div>
      )}
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </CardComponent>
  );
}

interface TerminalTextProps {
  children: React.ReactNode;
  className?: string;
  prefix?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'muted';
}

export function TerminalText({ 
  children, 
  className = '', 
  prefix = '>', 
  variant = 'default' 
}: TerminalTextProps) {
  const variantStyles = {
    default: 'text-green-400',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400',
    muted: 'text-gray-500'
  };

  return (
    <div className={cn('font-mono text-xs sm:text-sm flex items-start space-x-2', className)}>
      <span className={cn(variantStyles[variant], 'flex-shrink-0')}>{prefix}</span>
      <span className="text-gray-300 flex-1 break-words">{children}</span>
    </div>
  );
}

interface TerminalCommandProps {
  command: string;
  output?: string;
  className?: string;
}

export function TerminalCommand({ command, output, className = '' }: TerminalCommandProps) {
  return (
    <div className={cn('font-mono text-xs sm:text-sm space-y-1', className)}>
      <div className="flex items-start space-x-2">
        <span className="text-green-400 flex-shrink-0">$</span>
        <span className="text-white break-all">{command}</span>
      </div>
      {output && (
        <div className="text-gray-300 pl-3 sm:pl-4 text-xs">
          {output}
        </div>
      )}
    </div>
  );
}