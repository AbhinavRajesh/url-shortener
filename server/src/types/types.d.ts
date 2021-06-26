import { Request, Response } from "express";

export type Fn = (req: Request, res: Response) => void;

export interface detaUrls {
  key: string;
  slug: string;
  url: string;
  uid: string;
}
