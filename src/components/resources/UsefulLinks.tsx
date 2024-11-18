// src/components/resources/UsefulLinks.tsx
'use client';

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Grid,
  Link,
  Chip,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Public as WebIcon,
  GitHub as GitHubIcon,
  Forum as ForumIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';

const usefulLinks = {
  development: [
    {
      title: 'React Documentation',
      url: 'https://reactjs.org',
      description: 'React resmi dokümantasyonu',
      type: 'docs'
    },
    {
      title: 'Cloud Foundry Docs',
      url: 'https://docs.cloudfoundry.org',
      description: 'Cloud Foundry geliştirici dokümantasyonu',
      type: 'docs'
    }
  ],
  communities: [
    {
      title: 'SAP Community',
      url: 'https://community.sap.com',
      description: 'SAP Developer Community',
      type: 'forum'
    },
    {
      title: 'React Dev Community',
      url: '#',
      description: 'React geliştirici topluluğu',
      type: 'forum'
    }
  ],
  blogs: [
    {
      title: 'SAP Blogs',
      url: 'https://blogs.sap.com',
      description: 'SAP ile ilgili blog yazıları',
      type: 'blog'
    }
  ],
  repositories: [
    {
      title: 'SAP Samples',
      url: 'https://github.com/SAP-samples',
      description: 'SAP örnek projeleri',
      type: 'github'
    }
  ]
};

export default function UsefulLinks() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'docs':
        return <WebIcon />;
      case 'forum':
        return <ForumIcon />;
      case 'github':
        return <GitHubIcon />;
      case 'blog':
        return <YouTubeIcon />;
      default:
        return <WebIcon />;
    }
  };

  return (
    <Card>
      <CardHeader
        title="Faydalı Linkler"
        subheader="Geliştirici kaynakları ve topluluklar"
      />
      <CardContent>
        <Grid container spacing={3}>
          {Object.entries(usefulLinks).map(([category, links]) => (
            <Grid item xs={12} md={6} key={category}>
              <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
                {category}
              </Typography>
              {links.map((link, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: 'background.default',
                    p: 2,
                    borderRadius: 1,
                    mb: 2
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemIcon>
                      {getIcon(link.type)}
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        href={link.url}
                        target="_blank"
                        underline="hover"
                        color="inherit"
                      >
                        <Typography variant="subtitle1">
                          {link.title}
                        </Typography>
                      </Link>
                      <Typography variant="body2" color="text.secondary">
                        {link.description}
                      </Typography>
                    </ListItemText>
                    <Chip
                      label={link.type}
                      size="small"
                      variant="outlined"
                    />
                  </ListItem>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}