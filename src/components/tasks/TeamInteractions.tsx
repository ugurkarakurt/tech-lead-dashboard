// src/components/tasks/TeamInteractions.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Grid,
} from '@mui/material';
import {
  Group as GroupIcon,
  School as SchoolIcon,
  Forum as ForumIcon,
  Assignment as AssignmentIcon,
  Code as CodeIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

const interactionTypes = [
  {
    title: '1-1 Görüşmeler',
    icon: ChatIcon,
    color: '#2196f3',
    items: [
      'Teknik zorlukların tartışılması',
      'Kariyer hedeflerinin değerlendirilmesi',
      'Geribildirim paylaşımı',
      'Gelişim alanlarının belirlenmesi',
      'Mentorluk ihtiyaçlarının tespiti'
    ]
  },
  {
    title: 'Pair Programming',
    icon: CodeIcon,
    color: '#4caf50',
    items: [
      'Kompleks task\'larda yardımlaşma',
      'Best practice paylaşımı',
      'Debug teknikleri gösterimi',
      'Code review sonrası düzeltmeler',
      'Yeni teknoloji/pattern demoları'
    ]
  },
  {
    title: 'Technical Discussions',
    icon: ForumIcon,
    color: '#9c27b0',
    items: [
      'Mimari kararların tartışılması',
      'Teknoloji seçimlerinin değerlendirilmesi',
      'Problem çözme seansları',
      'Teknik zorlukların çözümü',
      'İnovasyon fırsatlarının değerlendirilmesi'
    ]
  },
  {
    title: 'Knowledge Sharing',
    icon: SchoolIcon,
    color: '#ff9800',
    items: [
      'Tech talks organizasyonu',
      'Lightning talk\'lar',
      'Best practice sunumları',
      'Yeni teknoloji demoları',
      'Case study incelemeleri'
    ]
  }
];

export default function TeamInteractions() {
  return (
    <Card>
      <CardHeader
        title="Ekip Etkileşimleri"
        subheader="Günlük ekip iletişimi ve mentorluk aktiviteleri"
      />
      <CardContent>
        <Grid container spacing={3}>
          {interactionTypes.map((type, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  bgcolor: 'background.default',
                  p: 2,
                  borderRadius: 1,
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <type.icon sx={{ color: type.color, mr: 2 }} />
                  <Typography variant="h6">{type.title}</Typography>
                </Box>
                <List dense>
                  {type.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: 'body2',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}