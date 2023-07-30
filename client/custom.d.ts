import { HTMLAttributes, LinkHTMLAttributes, MetaHTMLAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends Attributes {
    // Add any additional HTML attributes you need here
  }
  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {}
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {}
}
