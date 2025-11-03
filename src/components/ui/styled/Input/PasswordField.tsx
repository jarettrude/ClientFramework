'use client';

import { ComponentProps } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordFieldProps extends Omit<ComponentProps<typeof Input>, 'type'> {
  label?: string;
}

export default function PasswordField({ label, id, ...props }: PasswordFieldProps) {
  return (
    <div className='space-y-2'>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input type='password' id={id} {...props} />
    </div>
  );
}
