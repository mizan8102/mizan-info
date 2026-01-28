import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'busy' | 'away';
  label?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StatusIndicator({ 
  status, 
  label, 
  showLabel = true, 
  size = 'md',
  className = '' 
}: StatusIndicatorProps) {
  const statusConfig = {
    online: { color: 'bg-green-400', text: 'ONLINE' },
    offline: { color: 'bg-gray-400', text: 'OFFLINE' },
    busy: { color: 'bg-red-400', text: 'BUSY' },
    away: { color: 'bg-yellow-400', text: 'AWAY' }
  };

  const sizeConfig = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const config = statusConfig[status];
  const shouldAnimate = status === 'online';

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="relative">
        <div 
          className={cn(
            'rounded-full',
            config.color,
            sizeConfig[size],
            shouldAnimate && 'animate-pulse'
          )}
        />
        {shouldAnimate && (
          <motion.div
            className={cn(
              'absolute inset-0 rounded-full',
              config.color,
              'opacity-75'
            )}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.75, 0, 0.75]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-mono text-gray-300">
          {label || config.text}
        </span>
      )}
    </div>
  );
}

interface SystemStatusProps {
  uptime?: string;
  location?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

export function SystemStatus({ 
  uptime = '24/7 OPERATIONAL',
  location = 'DHAKA, BD',
  status = 'online',
  className = ''
}: SystemStatusProps) {
  return (
    <div className={cn('space-y-2 text-xs font-mono', className)}>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">STATUS:</span>
        <StatusIndicator status={status} size="sm" />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">LOCATION:</span>
        <span className="text-green-400">{location}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">UPTIME:</span>
        <span className="text-green-400">{uptime}</span>
      </div>
    </div>
  );
}