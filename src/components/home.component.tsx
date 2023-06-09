import { useCallback } from "react";

import { Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import PricingPlanTable from "./pricingPlanTable";

const createNewButton = { marginLeft: "auto", marginRight: "25px", marginTop: "15px" };

function Home(): JSX.Element {
  const navigate = useNavigate();
  const handleCreateNew = useCallback(() => {
    navigate(`/pricingPlan`);
  }, [navigate]);

  return (
    <Grid container xs={12} spacing={4} justifyContent='center' padding={3}>
      <Grid item xs={6} md={6}>
        <Paper variant='outlined'>
          <Grid>
            <Grid container justifyContent='space-evenly' alignItems='center'>
              <Typography variant='h5' gutterBottom paddingTop={2} paddingLeft={2}>
                Pricing plans
              </Typography>
              <Button variant='outlined' style={createNewButton} onClick={handleCreateNew}>
                Create New
              </Button>
            </Grid>
            <PricingPlanTable />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
