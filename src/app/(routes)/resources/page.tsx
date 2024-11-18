// src/app/(routes)/resources/page.tsx
'use client';

import { Container, Grid } from '@mui/material';
import TechnicalGuides from '@/components/resources/TechnicalGuides';
import UsefulLinks from '@/components/resources/UsefulLinks';
import BTPResources from '@/components/resources/BTPResources';

export default function ResourcesPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TechnicalGuides />
        </Grid>
        <Grid item xs={12}>
          <BTPResources />
        </Grid>
        <Grid item xs={12}>
          <UsefulLinks />
        </Grid>
      </Grid>
    </Container>
  );
}