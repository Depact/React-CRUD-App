import * as React from "react";
import PricingPlan from "../types/pricingPlan";

import { ChangeEventHandler, useState } from "react";
import { FormControl, FormGroup, Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import usePricingPlanStore from "../store/pricingPlan.store";

interface Props {
  pricingPlanId: string | undefined;
}

export const PricingPlanForm: React.FunctionComponent<Props> = (props: Props) => {
  const { addPricingPlan } = usePricingPlanStore();
  const navigate = useNavigate();
  const [state, setState] = useState<PricingPlan>({
    Id: "",
    Quantity: 0,
    Industry: "",
    Customer: "",
    Country: "",
    Currency: "",
    activationDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  function onSave() {
    if (props.pricingPlanId) {
      console.log(state);
    } else {
        addPricingPlan(state)
        navigate(`/`);
    }
  }

  return (
    <Grid container spacing={2} direction="column" alignContent="center">
      <Grid item xs={12}>
        <TextField
          id="activationDate"
          label="Pick a date"
          variant="outlined"
          value={state.activationDate}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField id="Currency" label="Currency" variant="outlined" value={state.Currency} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id="Country" label="Country" variant="outlined" value={state.Country} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Quantity"
          label="Quantity"
          variant="outlined"
          value={state.Quantity.toString()}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField id="Customer" label="Customer" variant="outlined" value={state.Customer} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField id="Industry" label="Industry" variant="outlined" value={state.Industry} onChange={handleChange} />
      </Grid>
      <Grid container item xs={12} justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back
        </Button>
        <Button variant="outlined" onClick={onSave}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
