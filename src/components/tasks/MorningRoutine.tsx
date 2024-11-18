// src/components/tasks/MorningRoutine.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import {
  CheckCircleOutline as CheckIcon,
  AccessTime as TimeIcon,
  CoffeeOutlined as CoffeeIcon,
  Assignment as AssignmentIcon,
  Mail as MailIcon,
  ListAlt as ListIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

const morningTasks = [
  {
    title: 'Günlük Stand-up',
    description: [
      'Ekip durumu kontrolü',
      'Blocker\'ların belirlenmesi',
      'Teknik zorlukların tespiti',
      'Yardım ihtiyaçlarının belirlenmesi',
      'Günlük hedeflerin netleştirilmesi',
    ],
    category: 'team',
    time: '09:00 - 10:00'
  },
  {
    title: 'Pull Request İncelemeleri',
    description: [
      'Bekleyen PR\'ları önceliklendirme',
      'Kritik PR\'ları belirleme',
      'Review zamanlaması planlama',
      'Kompleks PR\'lar için pair review organize etme',
    ],
    category: 'code-review',
    time: '10:00 - 10:15'
  },
  {
    title: 'Teknik Mentörlük Seansı',
    description: [
      'Junior geliştiricilerle teknik tartışma',
      'Code review feedback\'lerinin açıklanması',
      'Best practices paylaşımı',
      'Soru-cevap seansı',
    ],
    category: 'mentoring',
    time: '10:30 - 11:30'
  },
  {
    title: 'Dokümantasyon ve Araştırma',
    description: [
      'Teknik dokümanların güncellenmesi',
      'Architecture decision records',
      'Yeni teknolojilerin araştırılması',
      'BTP dökümanlarının incelenmesi',
    ],
    category: 'documentation',
    time: '11:30 - 12:30'
  },
];

export default function MorningRoutine() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'code-review':
        return <AssignmentIcon color="primary" />;
      case 'team':
        return <PeopleIcon color="success" />;
      case 'mentoring':
        return <CoffeeIcon color="warning" />;
      case 'documentation':
        return <ListIcon color="info" />;
      default:
        return <CheckIcon />;
    }
  };

  return (
    <Card>
      <CardHeader
        title="Sabah Rutini"
        subheader="09:00 - 12:30 arası günlük aktiviteler"
      />
      <CardContent>
        {morningTasks.map((task, index) => (
          <Box key={index} sx={{ mb: 4, '&:last-child': { mb: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {getCategoryIcon(task.category)}
              <Typography variant="h6" sx={{ ml: 2 }}>
                {task.title}
              </Typography>
              <Chip
                icon={<TimeIcon />}
                label={task.time}
                variant="outlined"
                size="small"
                sx={{ ml: 'auto' }}
              />
            </Box>
            <List dense>
              {task.description.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <CheckIcon color="action" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      variant: 'body2',
                    }}
                  />
                </ListItem>
              ))}
            </List>
            {index < morningTasks.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}