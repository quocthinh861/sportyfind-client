import React from "react";
import { classNames } from "../shared/Utils";
export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames("btn btn-outline-secondary btn-sm", className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames("btn btn-outline-secondary btn-sm", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
