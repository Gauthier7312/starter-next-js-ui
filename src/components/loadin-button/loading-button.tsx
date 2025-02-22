import { Loader2 } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

type ButtonLoadingProps = ButtonProps & {
  isLoading: boolean;
};

export default function ButtonLoading({
  isLoading,
  children,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button {...props} disabled={isLoading}>
      {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
      {children}
    </Button>
  );
}
