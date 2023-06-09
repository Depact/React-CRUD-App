import { useCallback } from "react";

import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

import usePricingPlanStore from "../store/pricingPlan.store";
import PricingPlan from "../types/pricingPlan";

const updateButtonStyles = { marginRight: 5 };

function PricingPlanTable(): JSX.Element {
  const navigate = useNavigate();
  const { pricingPlans, removePricingPlan } = usePricingPlanStore();

  function updatePricingPlan(pricingPlanId: string) {
    navigate(`/pricingPlan/${pricingPlanId}`);
  }

  return (
    <Grid container item xs={12} minHeight={50} marginTop={5}>
      <TableContainer>
        <Table>
          <TableBody>{pricingPlans.map((pricingPlan) => PricingPlanTableRow(pricingPlan, updatePricingPlan, removePricingPlan))}</TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

function PricingPlanTableRow(
  pricingPlan: PricingPlan,
  updatePricingPlan: (pricingPlanId: string) => void,
  removePricingPlan: (pricingPlanId: string) => void
): JSX.Element {
  const { Id, Country, Currency, activationDate } = pricingPlan;
  const handleUpdatePricingPlan = useCallback(() => {
    updatePricingPlan(Id);
  }, [Id, updatePricingPlan]);
  const handleRemovePricingPlan = useCallback(() => {
    removePricingPlan(Id);
  }, [Id, removePricingPlan]);

  return (
    <TableRow key={Id}>
      <TableCell>
        {Country} - {Currency} - {activationDate}
      </TableCell>
      <TableCell align='right'>
        <Button variant='contained' style={updateButtonStyles} onClick={handleUpdatePricingPlan}>
          Update
        </Button>
        <Button variant='outlined' onClick={handleRemovePricingPlan}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default PricingPlanTable;
