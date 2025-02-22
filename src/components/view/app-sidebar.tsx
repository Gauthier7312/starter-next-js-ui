import {
  BadgeInfo,
  BriefcaseBusiness,
  Calendar,
  Command,
  FolderKanban,
  Home,
  Settings,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { paths } from '@/lib/paths';
import Link from 'next/link';
import { NavUser } from './nav-user';
import { useAuthContext } from '@/auth/hooks';
import { Separator } from '../ui/separator';

// Menu items.
const items = [
  {
    title: 'Tableau de bord',
    url: paths.dashbord.root,
    icon: Home,
  },
  {
    title: 'Publier offre',
    url: paths.dashbord.postJob,
    icon: BriefcaseBusiness,
  },
  {
    title: 'Mes offres',
    url: paths.dashbord.jobs,
    icon: FolderKanban,
  },
  {
    title: 'Calendar',
    url: paths.dashbord.calendar,
    icon: Calendar,
  },
];

const itemsFooter = [
  {
    title: 'A propos de nous',
    url: paths.dashbord.company,
    icon: BadgeInfo,
  },
  {
    title: 'Paramètre',
    url: paths.dashbord.setting,
    icon: Settings,
  },
];

export function AppSidebar() {
  const { user } = useAuthContext();
  return (
    <Sidebar collapsible="icon" className="bg-white text-primary-first">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={paths.dashbord.root}>
                <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-3" />
                </div>
                <div className="grid flex-1 text-left text-base leading-tight">
                  <span className="truncate font-bold">Logo</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* <Separator /> */}

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 py-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="space-y-1 py-2">
          {itemsFooter.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <Separator />
          <NavUser
            user={{
              avatar: '',
              ...user,
            }}
          />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
