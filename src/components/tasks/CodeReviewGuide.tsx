// src/components/tasks/CodeReviewGuide.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  BugReport as BugIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Architecture as ArchitectureIcon,
  FormatListBulleted as ListIcon,
} from '@mui/icons-material';

const reviewCategories = [
  {
    title: 'Code Quality',
    icon: CodeIcon,
    color: '#2196f3',
    checks: [
      {
        title: 'Clean Code Prensipleri',
        items: [
          'Fonksiyon ve değişken isimlendirmeleri anlamlı mı?',
          'Single Responsibility Principle uygulanmış mı?',
          'Kod tekrarı (DRY principle) var mı?',
          'Fonksiyonlar tek bir iş yapıyor mu?',
          'Magic number/string kullanımı var mı?'
        ]
      },
      {
        title: 'Kod Organizasyonu',
        items: [
          'Dosya yapısı proje standartlarına uygun mu?',
          'Import/export yapısı düzgün kullanılmış mı?',
          'Gereksiz kod/yorum var mı?',
          'Kodun okunabilirliği yeterli mi?'
        ]
      }
    ]
  },
  {
    title: 'Performance',
    icon: SpeedIcon,
    color: '#4caf50',
    checks: [
      {
        title: 'Frontend Performans',
        items: [
          'Gereksiz re-render durumları var mı?',
          'Memoization doğru kullanılmış mı?',
          'Bundle size etkileniyor mu?',
          'API çağrıları optimize edilmiş mi?'
        ]
      },
      {
        title: 'Resource Optimization',
        items: [
          'Memory leak riski var mı?',
          'Event listener cleanup yapılmış mı?',
          'Asset optimizasyonu gerekli mi?',
          'Lazy loading değerlendirilmiş mi?'
        ]
      }
    ]
  },
  {
    title: 'Security',
    icon: SecurityIcon,
    color: '#f44336',
    checks: [
      {
        title: 'Güvenlik Kontrolleri',
        items: [
          'Input validation yapılmış mı?',
          'XSS açıkları var mı?',
          'Sensitive data kontrolü yapılmış mı?',
          'Authentication/Authorization doğru uygulanmış mı?'
        ]
      }
    ]
  },
  {
    title: 'Architecture',
    icon: ArchitectureIcon,
    color: '#9c27b0',
    checks: [
      {
        title: 'Mimari Uyumluluk',
        items: [
          'Proje mimarisine uygun mu?',
          'Design pattern doğru kullanılmış mı?',
          'Component hierarchy mantıklı mı?',
          'State management yaklaşımı uygun mu?'
        ]
      },
      {
        title: 'Maintainability',
        items: [
          'Kod bakımı kolay mı?',
          'Test yazılabilirlik düşünülmüş mü?',
          'Dokümantasyon yeterli mi?',
          'Edge case\'ler düşünülmüş mü?'
        ]
      }
    ]
  }
];

export default function CodeReviewGuide() {
  return (
    <Card>
      <CardHeader
        title="Code Review Rehberi"
        subheader="Pull Request incelemelerinde kontrol edilecek noktalar"
      />
      <CardContent>
        {reviewCategories.map((category, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <category.icon sx={{ color: category.color, mr: 2 }} />
                <Typography variant="h6">{category.title}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {category.checks.map((check, checkIndex) => (
                <Box key={checkIndex} sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {check.title}
                  </Typography>
                  <List dense>
                    {check.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>
                        <ListItemIcon>
                          <ListIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}