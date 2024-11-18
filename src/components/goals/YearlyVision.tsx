// src/components/goals/YearlyVision.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Divider,
} from '@mui/material';
import {
  StarBorder as StarIcon,
  Timeline as TimelineIcon,
  School as SchoolIcon,
  Architecture as ArchitectureIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

interface Goal {
  area: string;
  items: string[];
}

interface SectionBase {
  title: string;
  icon: React.ComponentType;
  goals: Goal[];
}

interface TechnicalSection extends SectionBase {
  certifications: string[];
}

interface TeamSection extends SectionBase { }

interface LearningSection extends SectionBase {
  resources: string[];
}

interface YearlyGoals {
  technicalExpertise: TechnicalSection;
  teamLeadership: TeamSection;
  learning: LearningSection;
}

const yearlyGoals = {
  technicalExpertise: {
    title: 'Technical Expertise',
    icon: ArchitectureIcon,
    goals: [
      {
        area: 'BTP Architecture Mastery',
        items: [
          'Enterprise-scale BTP mimarisi tasarımı',
          'Multi-cloud stratejisi geliştirme',
          'Cloud-native patterns implementasyonu',
          'Disaster recovery ve HA tasarımları'
        ]
      },
      {
        area: 'Innovation Leadership',
        items: [
          'Teknoloji inovasyon programı kurulumu',
          'Microservices mimarisine geçiş',
          'Event-driven architecture implementasyonu',
          'Modern development practices adoption'
        ]
      }
    ],
    certifications: [
      'SAP BTP Solution Architect',
      'Cloud Native Computing Foundation Certification',
      'AWS/Azure Solution Architect'
    ]
  },
  teamLeadership: {
    title: 'Technical Leadership',
    icon: GroupIcon,
    goals: [
      {
        area: 'Team Development',
        items: [
          'Kapsamlı teknik mentorluk programı',
          'Technical excellence framework',
          'Innovation culture development',
          'Cross-functional team collaboration'
        ]
      },
      {
        area: 'Process Excellence',
        items: [
          'DevOps transformation leadership',
          'Quality metrics framework',
          'Automated testing strategy',
          'Continuous improvement program'
        ]
      }
    ]
  },
  learning: {
    title: 'Continuous Learning',
    icon: SchoolIcon,
    goals: [
      {
        area: 'Advanced Technologies',
        items: [
          'Serverless architecture patterns',
          'Machine learning integration',
          'Advanced security practices',
          'Performance optimization techniques'
        ]
      }
    ],
    resources: [
      'Technical conferences',
      'Architecture workshops',
      'Leadership seminars',
      'Industry meetups'
    ]
  }
};

export default function YearlyVision() {
  return (
    <Card>
      <CardHeader
        title="1 Yıllık Vizyon"
        subheader="Uzun vadeli kariyer ve teknik hedefler"
      />
      <CardContent>
        <Grid container spacing={3}>
          {Object.entries(yearlyGoals).map(([key, section]) => (
            <Grid item xs={12} key={key}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <section.icon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">{section.title}</Typography>
                </Box>

                {section.goals.map((goal, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: 'background.default',
                      p: 2,
                      borderRadius: 1,
                      mb: 2
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom>
                      {goal.area}
                    </Typography>
                    <List dense>
                      {goal.items.map((item, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <StarIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}

                {(section as TechnicalSection).certifications && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Hedef Sertifikalar:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {(section as TechnicalSection).certifications.map((cert, idx) => (
                        <Chip
                          key={idx}
                          label={cert}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {(section as LearningSection).resources && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Öğrenme Kaynakları:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {(section as LearningSection).resources.map((resource: string, idx: number) => (<Chip
                        key={idx}
                        label={resource}
                        size="small"
                        variant="outlined"
                      />
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
