import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export default function RHFTextField({ name, label, type, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <div className="mb-2 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-500">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              {...field}
              id={name}
              type={type}
              value={type === 'number' && field.value === 0 ? '' : field.value}
              onChange={(event) => {
                if (type === 'number') {
                  field.onChange(Number(event.target.value));
                } else {
                  field.onChange(event.target.value);
                }
              }}
              className={`mt-1 w-full ${
                error ? 'border-red-500' : 'bg-transparent'
              }`}
              {...other}
            />
            {error && (
              <p className="mt-1 text-xs text-red-600" id={`${name}-error`}>
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}
