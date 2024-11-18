// src/components/learning/LearningResources.tsx
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
  IconButton,
  Link,
  Button,
} from '@mui/material';
import {
  Book as BookIcon,
  VideoLibrary as VideoIcon,
  Article as ArticleIcon,
  Public as PublicIcon,
  OpenInNew as OpenInNewIcon,
  Bookmark as BookmarkIcon,
  LocalLibrary as LibraryIcon,
} from '@mui/icons-material';

const learningResources = {
  books: [
    {
      title: 'Cloud Native Patterns',
      author: 'Cornelia Davis',
      description: 'Cloud-native uygulama geliştirme prensipleri',
      tags: ['cloud-native', 'architecture', 'patterns'],
      url: '#'
    },
    {
      title: 'Building Micro-Frontends',
      author: 'Luca Mezzalira',
      description: 'Modern web uygulamaları için micro-frontend mimarisi',
      tags: ['frontend', 'architecture', 'micro-frontends'],
      url: '#'
    }
  ],
  courses: [
    {
      title: 'SAP BTP Development',
      platform: 'SAP Learning Hub',
      description: 'Kapsamlı BTP development eğitimi',
      duration: '40 saat',
      level: 'Intermediate',
      url: '#'
    },
    {
      title: 'Advanced React Patterns',
      platform: 'Frontend Masters',
      description: 'React best practices ve ileri seviye patterns',
      duration: '8 saat',
      level: 'Advanced',
      url: '#'
    }
  ],
  documentation: [
    {
      title: 'SAP BTP Documentation',
      category: 'Official Docs',
      description: 'SAP BTP resmi dokümantasyonu',
      url: 'https://help.sap.com/btp'
    },
    {
      title: 'Cloud Foundry Docs',
      category: 'Official Docs',
      description: 'Cloud Foundry geliştirici dokümantasyonu',
      url: 'https://docs.cloudfoundry.org'
    }
  ],
  communities: [
    {
      title: 'SAP Community',
      type: 'Forum',
      description: 'SAP teknolojileri için topluluk platformu',
      url: 'https://community.sap.com'
    },
    {
      title: 'React Dev Community',
      type: 'Forum & Blog',
      description: 'React geliştirici topluluğu',
      url: '#'
    }
  ]
};

export default function LearningResources() {
  return (
    <Card>
      <CardHeader
        title="Öğrenim Kaynakları"
        subheader="Kitaplar, kurslar ve referans dokümanlar"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <BookIcon sx={{ mr: 1 }} /> Kitaplar
            </Typography>
            <List>
              {learningResources.books.map((book, index) => (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    mb: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start' }}>
                    <ListItemText
                      primary={book.title}
                      secondary={`Yazar: ${book.author}`}
                    />
                    <IconButton>
                      <BookmarkIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {book.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {book.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              <VideoIcon sx={{ mr: 1 }} /> Online Kurslar
            </Typography>
            <List>
              {learningResources.courses.map((course, index) => (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    mb: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start' }}>
                    <ListItemText
                      primary={course.title}
                      secondary={`Platform: ${course.platform}`}
                    />
                    <Chip label={course.level} size="small" color="primary" />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    Süre: {course.duration}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ArticleIcon sx={{ mr: 1 }} /> Teknik Dokümanlar
            </Typography>
            <List>
              {learningResources.documentation.map((doc, index) => (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <ListItemText
                    primary={doc.title}
                    secondary={doc.description}
                  />
                  <Button
                    endIcon={<OpenInNewIcon />}
                    component={Link}
                    href={doc.url}
                    target="_blank"
                  >
                    Görüntüle
                  </Button>
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              <PublicIcon sx={{ mr: 1 }} /> Topluluklar
            </Typography>
            <List>
              {learningResources.communities.map((community, index) => (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <ListItemIcon>
                    <LibraryIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={community.title}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {community.description}
                        </Typography>
                        <Chip
                          label={community.type}
                          size="small"
                          variant="outlined"
                          sx={{ mt: 1 }}
                        />
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}