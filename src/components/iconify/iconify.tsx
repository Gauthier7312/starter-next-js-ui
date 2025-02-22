import { Icon } from '@iconify/react';
import { IconifyProps } from './types';

type Props = {
  icon: IconifyProps;
  className?: string;
};

export default function Iconify({ icon, className }: Props) {
  return (
    <span className={`inline-block ${className}`}>
      <Icon icon={icon} />
    </span>
  );
}
