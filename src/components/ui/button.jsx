import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-[#ED1C24] text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "text-[#ED1C24]  border border-[#ED1C24] shadow-md focus-visible:ring-2 focus-visible:ring-[#ED1C24] focus-visible:ring-offset-2",
        secondaryGrey: "text-grey-300 border cursor-pointer hover:cursor-pointer",
          ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "w-8 h-8 rounded-md gap-1.5 px-[6px] has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        medium: "h-[40px] w-[320px] rounded-[8px] border border-[#ED1C24] py-[3px] px-[6px] text-[#ED1C24]",
        md:"h-[40px] w-[342px] rounded-[8px] py-[3px] px-[6px] ",
        icon: "w-[24px] h-[24px] gap-7px",
      },
      textStyle: {
        default: "",
        poppinsMd: "font-medium text-base leading-6 tracking-normal text-center align-middle"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      textStyle: "default"
    },
  }
)

function Button({
  className,
  variant,
  size,
  textStyle = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, textStyle, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
