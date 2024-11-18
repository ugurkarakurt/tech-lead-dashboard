// src/components/goals/MonthlyGoals.tsx
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
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  Psychology as PsychologyIcon,
  Architecture as ArchitectureIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const monthlyGoals = [
  {
    category: 'BTP Learning',
    icon: SchoolIcon,
    color: '#2196f3',
    goals: [
      {
        title: 'Cloud Foundry Fundamentals',
        items: [
          'Cloud Foundry mimarisini detaylı öğrenme',
          'Service binding konseptlerini anlama',
          'Deployment stratejilerini inceleme',
          'Multi-tenant yapıyı kavrama',
          'Resource management prensipleri'
        ],
        resources: [
          'SAP BTP Documentation',
          'Cloud Foundry Docs',
          'SAP Learning Journey'
        ]
      },
      {
        title: 'Security & Authentication',
        items: [
          'XSUAA servisini detaylı öğrenme',
          'OAuth flow\'ları anlama',
          'Role-based access control',
          'Security best practices',
          'Identity provider entegrasyonu'
        ],
        resources: [
          'SAP Security Guide',
          'OAuth 2.0 Documentation'
        ]
      }
    ]
  },
  {
    category: 'Technical Architecture',
    icon: ArchitectureIcon,
    color: '#9c27b0',
    goals: [
      {
        title: 'Frontend Architecture',
        items: [
          'Micro-frontend mimarisi araştırması',
          'State management stratejisi belirleme',
          'Performance optimization teknikleri',
          'Build ve deployment pipeline kurulumu',
          'Code splitting ve lazy loading implementasyonu'
        ],
        resources: [
          'Frontend Architecture Patterns',
          'React Performance Documentation'
        ]
      },
      {
        title: 'API Design',
        items: [
          'RESTful API best practices',
          'API versioning stratejisi',
          'Error handling standardı',
          'Rate limiting implementasyonu',
          'API documentation standardı'
        ],
        resources: [
          'REST API Guidelines',
          'API Design Patterns'
        ]
      }
    ]
  },
  {
    category: 'Team Development',
    icon: PsychologyIcon,
    color: '#4caf50',
    goals: [
      {
        title: 'Code Review Culture',
        items: [
          'Code review guidelines oluşturma',
          'PR template hazırlama',
          'Review checklist oluşturma',
          'Feedback verme prensipleri',
          'Review efficiency optimizasyonu'
        ],
        resources: [
          'Code Review Best Practices',
          'Google Engineering Practices'
        ]
      },
      {
        title: 'Technical Documentation',
        items: [
          'Documentation standardı belirleme',
          'Architecture decision records (ADR)',
          'Technical wiki organizasyonu',
          'Development guidelines',
          'Onboarding documentation'
        ],
        resources: [
          'Technical Writing Guidelines',
          'ADR Templates'
        ]
      }
    ]
  }
];

export default function MonthlyGoals() {
  return (
    <Card>
      <CardHeader
        title="1 Aylık Hedefler"
        subheader="Öncelikli öğrenim ve gelişim hedefleri"
      />
      <CardContent>
        {monthlyGoals.map((category, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <category.icon sx={{ color: category.color, mr: 2 }} />
                <Typography variant="h6">{category.category}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {category.goals.map((goal, goalIndex) => (
                  <Grid item xs={12} md={6} key={goalIndex}>
                    <Box
                      sx={{
                        bgcolor: 'background.default',
                        p: 2,
                        borderRadius: 1,
                        height: '100%'
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
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Kaynaklar:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {goal.resources.map((resource, resourceIndex) => (
                            <Chip
                              key={resourceIndex}
                              label={resource}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Box>
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