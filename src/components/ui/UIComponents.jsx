import { useState } from 'react'
import { cn } from '../../utils/helpers'

export function Button({
  children,
  variant = 'backend',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  asChild = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    backend: 'bg-backend-primary text-neutral-950 hover:bg-backend-secondary focus:ring-backend-primary',
    ai: 'bg-ai-primary text-white hover:bg-ai-secondary focus:ring-ai-primary',
    outline: 'border-2 border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:bg-neutral-900 focus:ring-neutral-700',
    ghost: 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 focus:ring-neutral-700',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  const Component = asChild ? 'span' : 'button'

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </Component>
  )
}

export function Badge({ children, variant = 'neutral', className = '', ...props }) {
  const variants = {
    backend: 'bg-backend-primary/10 text-backend-primary border border-backend-primary/20',
    ai: 'bg-ai-primary/10 text-ai-primary border border-ai-primary/20',
    neutral: 'bg-neutral-800 text-neutral-300 border border-neutral-700',
    success: 'bg-green-900/30 text-green-400 border border-green-900/50',
    warning: 'bg-yellow-900/30 text-yellow-400 border border-yellow-900/50',
    error: 'bg-red-900/30 text-red-400 border border-red-900/50',
  }

  return (
    <span
      className={cn('inline-flex items-center px-3 py-1 text-xs font-medium rounded-full', variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}

export function Card({ children, className = '', hover = true, padding = 'p-6', ...props }) {
  return (
    <div
      className={cn(
        'bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl transition-all duration-300',
        hover && 'hover:border-neutral-700 hover:shadow-card-hover hover:-translate-y-1',
        padding,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={cn('text-xl font-semibold text-neutral-100', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={cn('text-neutral-400 text-sm mt-1', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-neutral-800', className)} {...props}>
      {children}
    </div>
  )
}

export function Input({ label, error, className = '', id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const errorId = `${inputId}-error`
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-300 mb-2">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 bg-neutral-900 border rounded-xl text-neutral-50 placeholder-neutral-500',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all duration-200',
          error
            ? 'border-red-900/50 focus:ring-red-500/50'
            : 'border-neutral-700 focus:ring-backend-primary focus:border-transparent',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function Textarea({ label, error, className = '', id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const errorId = `${inputId}-error`
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          'w-full px-4 py-3 bg-neutral-900 border rounded-xl text-neutral-50 placeholder-neutral-500 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all duration-200',
          error
            ? 'border-red-900/50 focus:ring-red-500/50'
            : 'border-neutral-700 focus:ring-backend-primary focus:border-transparent',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function Separator({ className = '', ...props }) {
  return (
    <hr className={cn('border-neutral-800', className)} {...props} />
  )
}

export function Avatar({ src, alt, name, size = 'md', className = '', ...props }) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-lg',
    '2xl': 'w-32 h-32 text-xl',
  }

  const initials = name ? getInitials(name) : '?'

  return (
    <div
      className={cn('relative inline-flex items-center justify-center rounded-full bg-neutral-800 overflow-hidden font-medium', sizes[size], className)}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-neutral-300">{initials}</span>
      )}
    </div>
  )
}

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Tooltip({ children, content, position = 'top', className = '' }) {
  const [visible, setVisible] = useState(false)
  
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (
        <div
          className={cn(
            'absolute z-50 px-3 py-2 text-xs font-medium text-neutral-100 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg whitespace-nowrap animate-slide-down',
            positions[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}