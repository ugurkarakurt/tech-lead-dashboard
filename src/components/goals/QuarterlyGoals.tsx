// src/components/goals/QuarterlyGoals.tsx
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
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';


const quarterlyGoals = [
  {
    category: 'BTP Integration',
    icon: IntegrationInstructionsIcon,
    color: '#2196f3',
    description: 'SAP BTP servisleriyle kapsamlı entegrasyon',
    goals: [
      {
        title: 'Backend Servis Entegrasyonları',
        steps: [
          {
            phase: 'Araştırma ve Planlama',
            tasks: [
              'BTP servis kataloğunun detaylı analizi',
              'Entegrasyon senaryolarının belirlenmesi',
              'POC planlaması',
              'Performans kriterlerinin belirlenmesi'
            ]
          },
          {
            phase: 'Teknik Implementasyon',
            tasks: [
              'Destination service konfigürasyonu',
              'Authentication flow implementasyonu',
              'API Gateway entegrasyonu',
              'Error handling stratejisi'
            ]
          },
          {
            phase: 'Testing ve Optimizasyon',
            tasks: [
              'Integration testleri',
              'Performance testleri',
              'Security testleri',
              'Monitoring setup'
            ]
          }
        ],
        skillsToAcquire: [
          'BTP Service Integration',
          'OAuth Flows',
          'API Management',
          'Connectivity Services'
        ]
      },
      {
        title: 'Database ve Storage',
        icon: StorageIcon,
        steps: [
          {
            phase: 'Araştırma',
            tasks: [
              'HANA Cloud servis analizi',
              'Storage servis opsiyonları',
              'Backup stratejileri',
              'Scaling senaryoları'
            ]
          },
          {
            phase: 'Implementasyon',
            tasks: [
              'Database schema design',
              'Migration stratejisi',
              'Backup automation',
              'Monitoring setup'
            ]
          }
        ],
        skillsToAcquire: [
          'HANA Cloud',
          'Backup Management',
          'Data Migration',
          'Performance Tuning'
        ]
      }
    ]
  },
  {
    category: 'DevOps Pipeline',
    icon: SpeedIcon,
    color: '#4caf50',
    description: 'CI/CD ve automation süreçleri',
    goals: [
      {
        title: 'CI/CD Optimizasyonu',
        steps: [
          {
            phase: 'Pipeline Design',
            tasks: [
              'Build süreçlerinin optimizasyonu',
              'Test automation stratejisi',
              'Deployment automation',
              'Environment yönetimi'
            ]
          },
          {
            phase: 'Quality Gates',
            tasks: [
              'Code quality checks',
              'Security scanning',
              'Performance testing',
              'Coverage thresholds'
            ]
          }
        ],
        skillsToAcquire: [
          'Jenkins/GitLab CI',
          'Docker',
          'Kubernetes',
          'Infrastructure as Code'
        ]
      },
      {
        title: 'Monitoring ve Alerting',
        steps: [
          {
            phase: 'Setup',
            tasks: [
              'Monitoring tools setup',
              'Alert configuration',
              'Dashboard creation',
              'Log aggregation'
            ]
          },
          {
            phase: 'Optimization',
            tasks: [
              'Alert tuning',
              'Performance metrics',
              'Custom dashboard creation',
              'Automation rules'
            ]
          }
        ],
        skillsToAcquire: [
          'Grafana',
          'Prometheus',
          'ELK Stack',
          'APM Tools'
        ]
      }
    ]
  },
  {
    category: 'Security Framework',
    icon: SecurityIcon,
    color: '#ff9800',
    description: 'Güvenlik standartları ve implementasyonu',
    goals: [
      {
        title: 'Security Standards',
        steps: [
          {
            phase: 'Assessment',
            tasks: [
              'Current security audit',
              'Vulnerability assessment',
              'Compliance requirements',
              'Risk analysis'
            ]
          },
          {
            phase: 'Implementation',
            tasks: [
              'Security controls implementation',
              'Authentication enhancement',
              'Authorization framework',
              'Encryption standards'
            ]
          }
        ],
        skillsToAcquire: [
          'OWASP Security',
          'OAuth/OIDC',
          'Encryption',
          'Security Testing'
        ]
      }
    ]
  }
];

export default function QuarterlyGoals() {
  return (
    <Card>
      <CardHeader
        title="3 Aylık Hedefler"
        subheader="Orta vadeli teknik hedefler ve öğrenim planı"
      />
      <CardContent>
        {quarterlyGoals.map((category, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <category.icon sx={{ color: category.color, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{category.category}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {category.goals.map((goal, goalIndex) => (
                  <Grid item xs={12} key={goalIndex}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        {goal.title}
                      </Typography>

                      {goal.steps.map((step, stepIndex) => (
                        <Box
                          key={stepIndex}
                          sx={{
                            bgcolor: 'background.default',
                            p: 2,
                            borderRadius: 1,
                            mb: 2
                          }}
                        >
                          <Typography variant="subtitle1" gutterBottom>
                            {step.phase}
                          </Typography>
                          <List dense>
                            {step.tasks.map((task, taskIndex) => (
                              <ListItem key={taskIndex}>
                                <ListItemText
                                  primary={task}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      ))}

                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Kazanılacak Yetenekler:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {goal.skillsToAcquire.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
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