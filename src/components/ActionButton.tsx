import { ArrowUpRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: string;
  dark?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ActionButton({
  children,
  dark = false,
  className,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group inline-flex h-[33px] items-stretch rounded-none border text-xs font-medium tracking-[-0.12px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2',
        dark
          ? 'border-cream/80 bg-transparent text-cream hover:bg-cream hover:text-ink'
          : 'border-ink bg-ink text-cream hover:bg-[#1a0504]',
        className,
      )}
    >
      <span className="flex min-w-[118px] items-center justify-center px-4">
        {children}
      </span>
      <span
        className={cn(
          'flex h-full w-[33px] items-center justify-center border-l transition-colors duration-300',
          dark ? 'border-cream/80 group-hover:border-ink' : 'border-ink/60',
        )}
      >
        <ArrowUpRightIcon className="h-3 w-3" strokeWidth={1.5} />
      </span>
    </button>
  );
}
