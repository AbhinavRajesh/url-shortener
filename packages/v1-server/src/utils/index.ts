import { Deta } from "deta";

const deta = Deta(process.env.DETA_PROJECT_KEY);
export const urlsDB = deta.Base("urls");
