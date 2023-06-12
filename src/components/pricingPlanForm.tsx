import * as React from "react";
import { useCallback, useRef, useState } from "react";

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
  const formReference = useRef<HTMLFormElement>(null);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      [event.target.id]: event.target.value,
    }));
  }, []);

  const onExit = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  function loginHandler(event: React.FormEvent): void {
    event.preventDefault();
    if (!formReference.current?.checkValidity()) return;

    if (pricingPlanId) {
      updatePricingPlan(state);
    } else {
      addPricingPlan(state);
    }
    navigate(`/`);
  }

  return (
    <Grid container direction='column' alignContent='center'>
      <form ref={formReference} onSubmit={loginHandler}>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <TextField
              id='activationDate'
              label='Pick a date'
              variant='outlined'
              required
              value={state.activationDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField id='Currency' label='Currency' variant='outlined' required value={state.Currency} onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField id='Country' label='Country' variant='outlined' required value={state.Country} onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField id='Quantity' label='Quantity' variant='outlined' value={state.Quantity.toString()} onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField id='Customer' label='Customer' variant='outlined' value={state.Customer} onChange={handleChange} />
          </Grid>
          <Grid item>
            <TextField id='Industry' label='Industry' variant='outlined' value={state.Industry} onChange={handleChange} />
          </Grid>
          <Grid container item justifyContent='space-between'>
            <Button variant='outlined' onClick={onExit}>
              Back
            </Button>
            <Button variant='outlined' type='submit'>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default PricingPlanForm;
