// src/app/(routes)/learning-path/page.tsx
'use client';

import { Container, Grid } from '@mui/material';
import BTPLearning from '@/components/learning/BTPLearning';
import TechnicalSkills from '@/components/learning/TechnicalSkills';
import LearningResources from '@/components/learning/LearningResources';

export default function LearningPathPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BTPLearning />
        </Grid>
        <Grid item xs={12}>
          <TechnicalSkills />
        </Grid>
        <Grid item xs={12}>
          <LearningResources />
        </Grid>
      </Grid>
    </Container>
  );
}