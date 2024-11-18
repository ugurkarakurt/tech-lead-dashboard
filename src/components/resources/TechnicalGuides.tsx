// src/components/resources/TechnicalGuides.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  Grid,
} from '@mui/material';
import {
  Description as DocIcon,
  Code as CodeIcon,
  Architecture as ArchIcon,
} from '@mui/icons-material';

const technicalDocs = {
  architectureGuides: [
    {
      title: 'Frontend Architecture Guide',
      description: 'React ve modern frontend mimarisi için kapsamlı rehber',
      topics: [
        'Component Architecture',
        'State Management',
        'Performance Optimization',
        'Code Organization'
      ],
      type: 'architecture',
      tags: ['react', 'frontend', 'architecture']
    },
    {
      title: 'CI/CD Pipeline Setup',
      description: 'CI/CD süreçleri ve konfigürasyon rehberi',
      topics: [
        'Pipeline Configuration',
        'Build Process',
        'Deployment Strategy',
        'Environment Management'
      ],
      type: 'devops',
      tags: ['ci-cd', 'devops', 'automation']
    }
  ],
  codeStandards: [
    {
      title: 'Code Review Guidelines',
      description: 'Code review süreci ve standartları',
      topics: [
        'Review Process',
        'Quality Checks',
        'Best Practices',
        'Feedback Guidelines'
      ],
      type: 'standards',
      tags: ['code-review', 'quality']
    },
    {
      title: 'Testing Standards',
      description: 'Test yazım standartları ve stratejileri',
      topics: [
        'Unit Testing',
        'Integration Tests',
        'E2E Testing',
        'Test Coverage'
      ],
      type: 'standards',
      tags: ['testing', 'quality']
    }
  ]
};

export default function TechnicalGuides() {
  return (
    <Card>
      <CardHeader
        title="Teknik Rehberler"
        subheader="Mimari dökümanlar ve kodlama standartları"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Mimari Rehberler
            </Typography>
            {technicalDocs.architectureGuides.map((guide, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: 'background.default',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <ListItemIcon>
                    {guide.type === 'architecture' ? <ArchIcon /> : <CodeIcon />}
                  </ListItemIcon>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">
                      {guide.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {guide.description}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ pl: 6 }}>
                  <List dense>
                    {guide.topics.map((topic, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={topic} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 2, pl: 6 }}>
                  {guide.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Kodlama Standartları
            </Typography>
            {technicalDocs.codeStandards.map((standard, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: 'background.default',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <ListItemIcon>
                    <DocIcon />
                  </ListItemIcon>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">
                      {standard.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {standard.description}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ pl: 6 }}>
                  <List dense>
                    {standard.topics.map((topic, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={topic} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 2, pl: 6 }}>
                  {standard.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}