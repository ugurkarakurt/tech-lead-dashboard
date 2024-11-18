// src/components/resources/BTPResources.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Link,
} from '@mui/material';
import {
  Book as BookIcon,
  Public as WebIcon,
  School as SchoolIcon,
  DataObject as DataIcon,
} from '@mui/icons-material';

const btpResources = {
  documentation: [
    {
      title: 'BTP Development Guide',
      description: 'Resmi SAP BTP geliştirici rehberi',
      url: 'https://help.sap.com/btp-developer',
      type: 'official',
      topics: [
        'Cloud Foundry Environment',
        'Service Bindings',
        'Security Configuration',
        'Deployment Strategies'
      ]
    },
    {
      title: 'BTP Best Practices',
      description: 'SAP BTP için best practices ve öneriler',
      url: 'https://help.sap.com/btp-best-practices',
      type: 'official',
      topics: [
        'Architecture Patterns',
        'Development Guidelines',
        'Security Guidelines',
        'Performance Optimization'
      ]
    }
  ],
  learningPaths: [
    {
      title: 'BTP Developer Learning Journey',
      description: 'SAP Learning Hub üzerinden BTP eğitim yolu',
      url: '#',
      duration: '40 hours',
      level: 'Intermediate'
    },
    {
      title: 'BTP Integration Specialist',
      description: 'BTP entegrasyon uzmanı eğitim programı',
      url: '#',
      duration: '30 hours',
      level: 'Advanced'
    }
  ],
  apis: [
    {
      title: 'BTP Service APIs',
      description: 'BTP servis API dokümantasyonu',
      url: '#',
      categories: ['REST APIs', 'Service Endpoints', 'Integration APIs']
    }
  ]
};

export default function BTPResources() {
  return (
    <Card>
      <CardHeader
        title="BTP Kaynakları"
        subheader="SAP BTP dokümantasyon ve eğitim kaynakları"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <BookIcon sx={{ mr: 1 }} /> Dokümantasyon
            </Typography>
            {btpResources.documentation.map((doc, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: 'background.default',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}
              >
                <Link
                  href={doc.url}
                  target="_blank"
                  underline="none"
                  color="inherit"
                >
                  <Typography variant="subtitle1" gutterBottom>
                    {doc.title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {doc.description}
                </Typography>
                <List dense>
                  {doc.topics.map((topic, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={topic} />
                    </ListItem>
                  ))}
                </List>
                <Chip
                  label={doc.type === 'official' ? 'Resmi Dokümantasyon' : 'Topluluk'}
                  size="small"
                  color={doc.type === 'official' ? 'primary' : 'default'}
                  sx={{ mt: 1 }}
                />
              </Box>
            ))}
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ mr: 1 }} /> Eğitim Yolları
            </Typography>
            {btpResources.learningPaths.map((path, index) => (
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
                  {path.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {path.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip label={`${path.duration}`} size="small" variant="outlined" />
                  <Chip label={path.level} size="small" color="primary" />
                </Box>
              </Box>
            ))}

            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
              <DataIcon sx={{ mr: 1 }} /> API Referansları
            </Typography>
            {btpResources.apis.map((api, index) => (
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
                  {api.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {api.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {api.categories.map((category, idx) => (
                    <Chip key={idx} label={category} size="small" variant="outlined" />
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
