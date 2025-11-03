// IconButton.tsx
import { LucideIcon } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface IconButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  Icon: LucideIcon;
  label: string;
  description: string;
}

export default function IconButton({ Icon, label, description, ...props }: IconButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className='inline-block'>
          <Button {...props} className={cn('icon-btn', props.className || '')}>
            <Icon className='icon' />
            <span className='label'>{label}</span>
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>{description}</TooltipContent>
    </Tooltip>
  );
}
