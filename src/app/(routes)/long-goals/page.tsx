// src/app/(routes)/long-goals/page.tsx
'use client';

import { Container, Grid, Typography } from '@mui/material';
import SixMonthGoals from '@/components/goals/SixMonthGoals';
import YearlyVision from '@/components/goals/YearlyVision';
import CareerPath from '@/components/goals/CareerPath';

export default function LongGoalsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Uzun Vadeli Hedefler
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        6-12 aylık kariyer ve teknik gelişim planı
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SixMonthGoals />
        </Grid>
        <Grid item xs={12} md={8}>
          <YearlyVision />
        </Grid>
        <Grid item xs={12} md={4}>
          <CareerPath />
        </Grid>
      </Grid>
    </Container>
  );
}
