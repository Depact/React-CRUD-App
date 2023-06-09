import * as React from "react";
import PricingPlan from "../types/pricingPlan";
import { PricingPlanForm } from "./pricingPlanForm";
import { useParams } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function PricingPlanPage(): JSX.Element {
  const params = useParams();

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card variant="outlined" sx={{ marginTop: 5 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {params.pricingPlanId ? "Edit Pricing plan" : "Create Pricing plan"}
          </Typography>

          <PricingPlanForm pricingPlanId={params.pricingPlanId} />
        </CardContent>
      </Card>
    </Grid>
  );
}
