import { Dispatch, SetStateAction } from "react";

export type NavbarContextType = {
  ShowItemsMobile: boolean;
  setShowItemsMobile: Dispatch<SetStateAction<boolean>>;
};
