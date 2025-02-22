import { Separator } from '@/components/ui/separator';
import React from 'react';

export default function DashboardView() {
  return (
    <div className="space-y-2">
      <div>
        <h4 className="text-xl font-semibold">Welcome back, koffi</h4>
        <p className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        </p>
      </div>

      <Separator />
    </div>
  );
}
