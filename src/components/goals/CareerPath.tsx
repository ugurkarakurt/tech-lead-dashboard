// src/components/goals/CareerPath.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';

const careerSteps = [
  {
    label: 'Technical Lead',
    description: 'Mevcut Pozisyon',
    skills: [
      'Team Leadership',
      'Technical Architecture',
      'Code Quality',
      'Mentoring'
    ],
    status: 'current'
  },
  {
    label: 'Senior Technical Lead',
    description: '6-12 Ay',
    skills: [
      'Advanced Architecture',
      'Innovation Leadership',
      'Process Optimization',
      'Strategic Planning'
    ],
    status: 'next'
  },
  {
    label: 'Solution Architect',
    description: '1-2 Yıl',
    skills: [
      'Enterprise Architecture',
      'Technology Strategy',
      'Cross-team Leadership',
      'Business Alignment'
    ],
    status: 'future'
  }
];

export default function CareerPath() {
  return (
    <Card>
      <CardHeader
        title="Kariyer Yolu"
        subheader="Professional gelişim planı"
      />
      <CardContent>
        <Stepper orientation="vertical">
          {careerSteps.map((step, index) => (
            <Step key={index} active={step.status === 'current'}>
              <StepLabel>
                <Typography variant="subtitle1">{step.label}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {step.description}
                </Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Anahtar Yetkinlikler:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {step.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        variant="outlined"
                        color={step.status === 'current' ? 'primary' : 'default'}
                      />
                    ))}
                  </Box>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </CardContent>
    </Card>
  );
}