import * as React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

export function CrossIconButton({ onClick, className, ...props }) {
  return (
    <Button
      variant="secondaryGrey"
      size="sm"
      aria-label="Close"
      onClick={onClick}
      className={className}
      {...props}
    >
      <X className="w-[12.5px] h-[12.5px]" />
    </Button>
  );
}
