// src/components/learning/TechnicalSkills.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  Architecture as ArchitectureIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const technicalSkills = [
  {
    category: 'Frontend Architecture',
    icon: CodeIcon,
    color: '#2196f3',
    skills: [
      {
        title: 'Component Architecture',
        topics: [
          'Micro-frontend mimarisi',
          'Component composition patterns',
          'State management stratejileri',
          'Performance optimization teknikleri',
          'Code splitting ve lazy loading'
        ],
        bestPractices: [
          'Atomic design principles',
          'High-order components',
          'Custom hooks development',
          'Component lifecycle optimization'
        ],
        resources: [
          'React Advanced Patterns',
          'Performance Optimization Guide',
          'Architecture Documentation'
        ]
      },
      {
        title: 'Build & Deployment',
        topics: [
          'Webpack configuration',
          'Module bundling strategies',
          'Asset optimization',
          'CI/CD pipeline setup',
          'Environment management'
        ]
      }
    ]
  },
  {
    category: 'Testing Strategy',
    icon: SpeedIcon,
    color: '#4caf50',
    skills: [
      {
        title: 'Test Automation',
        topics: [
          'Unit testing best practices',
          'Integration test stratejileri',
          'E2E test framework',
          'Performance testing',
          'Test coverage optimizasyonu'
        ],
        bestPractices: [
          'TDD approach',
          'Mock strategies',
          'Test pyramid implementation',
          'Continuous testing'
        ]
      },
      {
        title: 'Quality Assurance',
        topics: [
          'Code review guidelines',
          'Static code analysis',
          'Security testing',
          'Accessibility testing'
        ]
      }
    ]
  },
  {
    category: 'DevOps & CI/CD',
    icon: SecurityIcon,
    color: '#ff9800',
    skills: [
      {
        title: 'Pipeline Automation',
        topics: [
          'CI/CD pipeline design',
          'Build automation',
          'Deployment stratejileri',
          'Infrastructure as Code',
          'Container orchestration'
        ],
        bestPractices: [
          'Git workflow optimization',
          'Environment management',
          'Release automation',
          'Monitoring setup'
        ]
      }
    ]
  }
];

export default function TechnicalSkills() {
  return (
    <Card>
      <CardHeader
        title="Teknik Yetkinlikler"
        subheader="Geliştirme ve mimari yetkinlik haritası"
      />
      <CardContent>
        {technicalSkills.map((category, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <category.icon sx={{ color: category.color, mr: 2 }} />
                <Typography variant="h6">{category.category}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid item xs={12} md={6} key={skillIndex}>
                    <Box
                      sx={{
                        bgcolor: 'background.default',
                        p: 2,
                        borderRadius: 1,
                        height: '100%'
                      }}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        {skill.title}
                      </Typography>

                      <List dense>
                        {skill.topics.map((topic, topicIndex) => (
                          <ListItem key={topicIndex}>
                            <ListItemText primary={topic} />
                          </ListItem>
                        ))}
                      </List>

                      {skill.bestPractices && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" gutterBottom>
                            Best Practices:
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {skill.bestPractices.map((practice, practiceIndex) => (
                              <Chip
                                key={practiceIndex}
                                label={practice}
                                size="small"
                                variant="outlined"
                              />
                            ))}
                          </Box>
                        </Box>
                      )}

                      {(skill as any).resources && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" gutterBottom>
                            Kaynaklar:
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {(skill as any).resources.map((resource: any, resourceIndex: any) => (
                              <Chip
                                key={resourceIndex}
                                label={resource}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Box>
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