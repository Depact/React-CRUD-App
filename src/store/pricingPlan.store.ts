import { create } from "zustand";
import PricingPlan from "../types/pricingPlan";
import { v4 as uuidv4 } from "uuid";

interface PricingPlanState {
  pricingPlans: PricingPlan[];
  addPricingPlan: (pricingPlan: PricingPlan) => void;
  updatePricingPlan: (pricingPlan: PricingPlan) => void;
  getPricingPlan: (id: string) => PricingPlan | undefined;
  removePricingPlan: (id: string) => void;
}

const usePricingPlanStore = create<PricingPlanState>((set, get) => ({
  pricingPlans: [],
  getPricingPlan: (id: string): PricingPlan | undefined => {
    return get().pricingPlans.find((plan) => plan.Id == id);
  },
  addPricingPlan: (pricingPlan: PricingPlan) => {
    pricingPlan.Id = uuidv4();
    set({ pricingPlans: [...get().pricingPlans, pricingPlan] });
  },
  updatePricingPlan: (pricingPlan: PricingPlan) => {
    set({ pricingPlans: [...get().pricingPlans.filter((plan) => plan.Id != pricingPlan.Id), pricingPlan] });
  },
  removePricingPlan: (id: string) => {
    set({ pricingPlans: [...get().pricingPlans.filter((plan) => plan.Id != id)] });
  },
}));

export default usePricingPlanStore;
