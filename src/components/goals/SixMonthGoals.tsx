// src/components/goals/SixMonthGoals.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Architecture as ArchitectureIcon,
  Psychology as PsychologyIcon,
  School as SchoolIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

const sixMonthGoals = [
  {
    category: 'BTP Expertise',
    icon: SchoolIcon,
    color: '#2196f3',
    objectives: [
      {
        title: 'Advanced BTP Services',
        description: 'SAP BTP servislerinde uzmanlaşma',
        goals: [
          {
            title: 'Service Integration',
            items: [
              'Multi-cloud stratejisi geliştirme',
              'Cross-service entegrasyon senaryoları',
              'Service mesh implementasyonu',
              'Advanced monitoring ve logging'
            ]
          },
          {
            title: 'Performance Optimization',
            items: [
              'Service level optimization',
              'Resource management stratejileri',
              'Scaling patterns implementasyonu',
              'Cost optimization teknikleri'
            ]
          }
        ],
        certifications: [
          'SAP BTP Development Associate',
          'SAP BTP Integration Associate'
        ]
      },
      {
        title: 'Enterprise Architecture',
        description: 'Enterprise-level BTP mimarisi',
        goals: [
          {
            title: 'Architecture Design',
            items: [
              'Multi-tenant architecture',
              'Disaster recovery planning',
              'High availability design',
              'Security architecture'
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'Technical Leadership',
    icon: ArchitectureIcon,
    color: '#9c27b0',
    objectives: [
      {
        title: 'Architecture Evolution',
        description: 'Teknik altyapı modernizasyonu',
        goals: [
          {
            title: 'Modernization Strategy',
            items: [
              'Microservices mimarisine geçiş',
              'Cloud-native architecture adoption',
              'DevOps transformation',
              'Containerization strategy'
            ]
          },
          {
            title: 'Innovation',
            items: [
              'New technology evaluation framework',
              'POC methodology development',
              'Innovation roadmap creation',
              'Technical debt management'
            ]
          }
        ]
      },
      {
        title: 'Team Excellence',
        description: 'Ekip teknik yetkinliklerinin geliştirilmesi',
        goals: [
          {
            title: 'Engineering Culture',
            items: [
              'Technical excellence framework',
              'Code quality metrics establishment',
              'Knowledge sharing program',
              'Technical mentorship program'
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'Process Improvement',
    icon: TimelineIcon,
    color: '#4caf50',
    objectives: [
      {
        title: 'Development Process',
        description: 'Geliştirme süreçlerinin optimize edilmesi',
        goals: [
          {
            title: 'Process Optimization',
            items: [
              'CI/CD pipeline optimization',
              'Test automation framework',
              'Release management improvement',
              'Quality gates implementation'
            ]
          },
          {
            title: 'Metrics & Monitoring',
            items: [
              'Performance metrics framework',
              'Quality metrics dashboard',
              'Automated reporting system',
              'Early warning systems'
            ]
          }
        ]
      }
    ]
  }
];

export default function SixMonthGoals() {
  return (
    <Card>
      <CardHeader
        title="6 Aylık Hedefler"
        subheader="Uzun vadeli teknik ve liderlik hedefleri"
      />
      <CardContent>
        {sixMonthGoals.map((category, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <category.icon sx={{ color: category.color, mr: 2 }} />
                <Typography variant="h6">{category.category}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {category.objectives.map((objective, objIndex) => (
                  <Grid item xs={12} key={objIndex}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        {objective.title}
                      </Typography>
                      <Typography color="text.secondary" paragraph>
                        {objective.description}
                      </Typography>

                      {objective.goals.map((goal, goalIndex) => (
                        <Box
                          key={goalIndex}
                          sx={{
                            bgcolor: 'background.default',
                            p: 2,
                            borderRadius: 1,
                            mb: 2
                          }}
                        >
                          <Typography variant="subtitle1" gutterBottom>
                            {goal.title}
                          </Typography>
                          <List dense>
                            {goal.items.map((item, itemIndex) => (
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
                      ))}

                      {objective.certifications && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" gutterBottom>
                            Hedef Sertifikalar:
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {objective.certifications.map((cert, certIndex) => (
                              <Chip
                                key={certIndex}
                                label={cert}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Box>
                    {objIndex < category.objectives.length - 1 && (
                      <Divider sx={{ my: 2 }} />
                    )}
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}