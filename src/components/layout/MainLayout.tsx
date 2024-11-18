// src/components/layout/MainLayout.tsx
'use client';

import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Today as TodayIcon,
  Assignment as GoalsIcon,
  Timeline as LongTermIcon,
  School as LearningIcon,
  LibraryBooks as ResourcesIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';

const drawerWidth = 280;

const menuItems = [
  { path: '/daily-tasks', label: 'Günlük Plan', icon: TodayIcon },
  { path: '/short-goals', label: 'Kısa Vadeli Hedefler', icon: GoalsIcon },
  { path: '/long-goals', label: 'Uzun Vadeli Hedefler', icon: LongTermIcon },
  { path: '/learning-path', label: 'Öğrenim Yolu', icon: LearningIcon },
  { path: '/resources', label: 'Kaynaklar', icon: ResourcesIcon },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Tech Lead Journey
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'background.default',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Yol Haritası
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                selected={pathname === item.path}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon>
                  <item.icon color={pathname === item.path ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}