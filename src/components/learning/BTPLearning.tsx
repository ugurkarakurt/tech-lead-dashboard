// src/components/learning/BTPLearning.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Link,
} from '@mui/material';
import {
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  Book as BookIcon,
  Code as CodeIcon,
} from '@mui/icons-material';

const btpModules = [
  {
    id: 1,
    title: 'BTP Fundamentals',
    status: 'in_progress',
    topics: [
      {
        title: 'Cloud Foundry Basics',
        type: 'theory',
        subtopics: [
          'Cloud Foundry Architecture',
          'Application Lifecycle',
          'Service Models',
          'Resource Management'
        ],
        resources: [
          {
            title: 'CF Documentation',
            url: 'https://docs.cloudfoundry.org'
          },
          {
            title: 'BTP Fundamentals',
            url: 'https://help.sap.com/btp'
          }
        ]
      },
      {
        title: 'Service Binding',
        type: 'hands-on',
        subtopics: [
          'Service Instance Creation',
          'Binding Process',
          'Environment Variables',
          'Service Keys'
        ],
        practice: [
          'Create service instances',
          'Bind services to applications',
          'Manage service credentials',
          'Test connectivity'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Security & Authentication',
    status: 'upcoming',
    topics: [
      {
        title: 'XSUAA Configuration',
        type: 'theory',
        subtopics: [
          'Authentication Flow',
          'Authorization Concepts',
          'Role Collections',
          'Scopes and Attributes'
        ]
      },
      {
        title: 'OAuth Implementation',
        type: 'hands-on',
        subtopics: [
          'Token Handling',
          'Principal Propagation',
          'Scope Validation',
          'JWT Verification'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Integration & APIs',
    status: 'upcoming',
    topics: [
      {
        title: 'API Management',
        type: 'theory',
        subtopics: [
          'API Design Principles',
          'Gateway Services',
          'Rate Limiting',
          'Monitoring'
        ]
      }
    ]
  }
];

export default function BTPLearning() {
  return (
    <Card>
      <CardHeader
        title="BTP Öğrenim Yolu"
        subheader="SAP BTP platform ve servisleri öğrenim planı"
      />
      <CardContent>
        <Stepper orientation="vertical">
          {btpModules.map((module) => (
            <Step
              key={module.id}
              active={module.status === 'in_progress'}
              completed={module.status === 'completed'}
            >
              <StepLabel>
                <Typography variant="h6">{module.title}</Typography>
              </StepLabel>
              <StepContent>
                {module.topics.map((topic, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: 'background.default',
                      p: 2,
                      borderRadius: 1,
                      mb: 2
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="subtitle1">
                        {topic.title}
                      </Typography>
                      <Chip
                        label={topic.type}
                        size="small"
                        color={topic.type === 'hands-on' ? 'primary' : 'default'}
                        sx={{ ml: 2 }}
                      />
                    </Box>

                    <List dense>
                      {topic.subtopics.map((subtopic, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            {topic.type === 'theory' ?
                              <BookIcon color="action" /> :
                              <CodeIcon color="primary" />
                            }
                          </ListItemIcon>
                          <ListItemText primary={subtopic} />
                        </ListItem>
                      ))}
                    </List>

                    {(topic as any).practice && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Pratik Uygulamalar:
                        </Typography>
                        <List dense>
                          {(topic as any).practice.map((item: any, idx: any) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <AssignmentIcon color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}

                    {(topic as any).resources && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Kaynaklar:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {(topic as any).resources.map((resource: any, idx: any) => (
                            <Button
                              key={idx}
                              variant="outlined"
                              size="small"
                              component={Link}
                              href={resource.url}
                              target="_blank"
                            >
                              {resource.title}
                            </Button>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </CardContent>
    </Card>
  );
}