import * as React from "react";
import { useCallback, useState } from "react";

import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import usePricingPlanStore from "../store/pricingPlan.store";
import PricingPlan from "../types/pricingPlan";

interface Properties {
  pricingPlanId: string | undefined;
}

function PricingPlanForm(properties: Properties): JSX.Element {
  const { pricingPlanId } = properties;
  const { addPricingPlan, updatePricingPlan, getPricingPlan } = usePricingPlanStore();
  const navigate = useNavigate();

  const editedPricingPlan = pricingPlanId ? getPricingPlan(pricingPlanId) : undefined;

  if (pricingPlanId && !editedPricingPlan) {
    navigate(`/`);
  }

  const [state, setState] = useState<PricingPlan>({
    Id: pricingPlanId ?? "",
    Quantity: editedPricingPlan?.Quantity ?? 0,
    Industry: editedPricingPlan?.Industry ?? "",
    Customer: editedPricingPlan?.Customer ?? "",
    Country: editedPricingPlan?.Country ?? "",
    Currency: editedPricingPlan?.Currency ?? "",
    activationDate: editedPricingPlan?.activationDate ?? "",
  });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      [event.target.id]: event.target.value,
    }));
  }, []);

  const onSave = useCallback(() => {
    if (pricingPlanId) {
      updatePricingPlan(state);
    } else {
      addPricingPlan(state);
    }
    navigate(`/`);
  }, [addPricingPlan, navigate, pricingPlanId, state, updatePricingPlan]);

  const onExit = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  return (
    <Grid container spacing={2} direction='column' alignContent='center'>
      <Grid item xs={12}>
        <TextField id='activationDate' label='Pick a date' variant='outlined' value={state.activationDate} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id='Currency' label='Currency' variant='outlined' value={state.Currency} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id='Country' label='Country' variant='outlined' value={state.Country} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id='Quantity' label='Quantity' variant='outlined' value={state.Quantity.toString()} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id='Customer' label='Customer' variant='outlined' value={state.Customer} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id='Industry' label='Industry' variant='outlined' value={state.Industry} onChange={handleChange} />
      </Grid>
      <Grid container item xs={12} justifyContent='space-between'>
        <Button variant='outlined' onClick={onExit}>
          Back
        </Button>
        <Button variant='outlined' onClick={onSave}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default PricingPlanForm;
