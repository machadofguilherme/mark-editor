import { createContext } from "react";
import { IData } from "../types/IData";

const context = createContext<IData | null>(null);

export default context;