import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/view/app-sidebar';
import { Separator } from '@radix-ui/react-separator';
import { BellDot } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-white p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 w-[1px] h-4 bg-primary-first"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Tableau de board</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Index</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto flex flex-row justify-end items-center space-x-1">
            <Button variant="ghost" className="h-8 w-8 mr-1">
              <BellDot className="w-10 h-10" />
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:pt-4 md:px-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
