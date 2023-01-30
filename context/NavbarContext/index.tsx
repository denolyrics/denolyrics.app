"use client";
import { createContext, ReactNode, useState } from "react";

const Context = createContext({});

Context.displayName = "NavbarContext";

interface Props {
  children: ReactNode;
}

export function ContextNavbarProvider({ children }: Props) {
  const [ShowItemsMobile, setShowItemsMobile] = useState(false);
  return (
    <Context.Provider
      value={{
        ShowItemsMobile,
        setShowItemsMobile,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
