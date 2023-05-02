import React from "react";

// An ID of the ship to focus on
export const focusShipContext = React.createContext<string | null>(null);
export const FocusShipProvider = focusShipContext.Provider;
