import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import PricingPlanForm from "./pricingPlanForm";

const formContainer = { marginTop: 5 };

export default function PricingPlanPage(): JSX.Element {
  const parameters = useParams();

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Card variant='outlined' sx={formContainer}>
        <CardContent>
          <Typography variant='h5' gutterBottom>
            {parameters.pricingPlanId ? "Edit Pricing plan" : "Create Pricing plan"}
          </Typography>

          <PricingPlanForm pricingPlanId={parameters.pricingPlanId} />
        </CardContent>
      </Card>
    </Grid>
  );
}
