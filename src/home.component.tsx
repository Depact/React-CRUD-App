import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import PricingPlanTable from "./components/pricingPlanTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Button
        variant="outlined"
        style={{ marginLeft: "auto", marginRight: "25px", marginTop: "15px" }}
        onClick={() => {
          navigate(`/pricingPlan`);
        }}
      >
        Create New
      </Button>
      <PricingPlanTable />
    </Grid>
  );
}

export default Home;
