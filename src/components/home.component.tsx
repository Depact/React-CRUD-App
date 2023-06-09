import { useCallback } from "react";

import { Button } from "@mui/material";
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
    <Grid container>
      <Button variant='outlined' style={createNewButton} onClick={handleCreateNew}>
        Create New
      </Button>
      <PricingPlanTable />
    </Grid>
  );
}

export default Home;
