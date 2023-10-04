import { MouseEventHandler } from "react";

export interface customButtonPorps {
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
} 

export interface searchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
  }