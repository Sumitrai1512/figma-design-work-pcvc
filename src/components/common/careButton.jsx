import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function CareButtonLeft({ onClick, className, ...props }) {
  return (
    <Button
      variant="secondaryGrey"
      size="icon"
      aria-label="Previous"
      onClick={onClick}
      className={className}
      {...props}
    >
      <ChevronLeft className="w-[9px] h-[16.5px]" />
    </Button>
  );
}

export function CareButtonRight({ onClick, className, ...props }) {
  return (
    <Button
      variant="secondaryGrey"
      size="icon"
      aria-label="Next"
      onClick={onClick}
      className={className}
      {...props}
    >
      <ChevronRight className="w-5 h-5" />
    </Button>
  );
}
