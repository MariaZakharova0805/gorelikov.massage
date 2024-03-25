import { createContext, useContext } from "react";
import { MassageListTypes } from "./types";
import { massageChildren } from "./constants";

export type ServicesContextTypes = {
  massageDetailed: MassageListTypes;
  setMassageDetailed: (massageDetailed: MassageListTypes) => void;
};

export const ServicesContext = createContext<ServicesContextTypes>({
  massageDetailed: massageChildren[0],
  setMassageDetailed: () => undefined,
});

export const useServicesContextContext = () => useContext(ServicesContext);
