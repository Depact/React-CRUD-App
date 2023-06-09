import type React from "react";

import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import usePricingPlanStore from "../store/pricingPlan.store";

// const UPDATE_INPUT = (_state: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string =>
//   (e.target as HTMLInputElement).value;

function PricingPlanTable(): JSX.Element {
  const { pricingPlans, removePricingPlan } = usePricingPlanStore();
  const navigate = useNavigate();

  //   const formRef = useRef<HTMLFormElement>(null);
  //   const [username, setUsername] = useReducer(UPDATE_INPUT, "");
  //   const [password, setPassword] = useReducer(UPDATE_INPUT, "");

  return (
    <Grid container sx={{ padding: { xs: 1, md: 2 } }}>
      <Grid item xs={12} sm={8} md={6} lg={3} >
        <TableContainer>
          <Table>
            <TableBody>
              {pricingPlans.map((pricingPlan) => (
                <TableRow key={pricingPlan.Id}>
                  <TableCell>{pricingPlan.Country} - {pricingPlan.Currency} - {pricingPlan.activationDate}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => {navigate(`/${pricingPlan.Id}`)}}>
                      Update
                    </Button>
                    <Button variant="outlined" onClick={() => removePricingPlan(pricingPlan.Id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default PricingPlanTable;
