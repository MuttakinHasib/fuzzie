"use client";

import "reactflow/dist/style.css";

import React, { PropsWithChildren } from "react";
import { ReactFlowProvider } from "reactflow";

export const WorkflowProvider = ({ children }: PropsWithChildren) => {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};
