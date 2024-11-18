// src/app/(routes)/short-goals/page.tsx
'use client';

import { Container, Grid, Typography } from '@mui/material';
import MonthlyGoals from '@/components/goals/MonthlyGoals';
import QuarterlyGoals from '@/components/goals/QuarterlyGoals';

export default function ShortGoalsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Kısa Vadeli Hedefler
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        1-3 aylık öğrenim ve gelişim planı
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MonthlyGoals />
        </Grid>
        <Grid item xs={12}>
          <QuarterlyGoals />
        </Grid>
      </Grid>
    </Container>
  );
}