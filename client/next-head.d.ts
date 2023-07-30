import { ReactNode } from "react";

declare module "next/head" {
  interface HeadProps {
    children?: ReactNode;
  }
}
