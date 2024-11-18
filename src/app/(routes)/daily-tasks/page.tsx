// src/app/(routes)/daily-tasks/page.tsx
'use client';

import {
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Box,
  Divider,
} from '@mui/material';
import MorningRoutine from '@/components/tasks/MorningRoutine';
import CodeReviewGuide from '@/components/tasks/CodeReviewGuide';
import TeamInteractions from '@/components/tasks/TeamInteractions';

export default function DailyTasksPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Günlük Plan ve Kontrol Listesi
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Günlük rutinler, kontroller ve önemli noktalar
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MorningRoutine />
        </Grid>
        <Grid item xs={12}>
          <CodeReviewGuide />
        </Grid>
        <Grid item xs={12}>
          <TeamInteractions />
        </Grid>
      </Grid>
    </Container>
  );
}