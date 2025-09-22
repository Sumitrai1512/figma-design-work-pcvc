"use client"

import * as React from "react"
import { Calendar } from "./calendar"
import { Popover, PopoverTrigger, PopoverContent } from "./popover"
import { Button } from "./button"
import { CalendarIcon } from "lucide-react"

export function DatePicker({ value, onChange, ...props }) {
  const [date, setDate] = React.useState(value || null)

  const handleSelect = (selected) => {
    setDate(selected)
    if (onChange) onChange(selected)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={
            // --- Figma styling ---
            "w-[342px] h-10 px-3 py-2 gap-2 rounded-md border border-[#C9D3E9] bg-white " +
            // --- Default text behavior ---
            "justify-start text-left font-normal " +
            (!date ? " text-gray-500" : "")
          }
        >
          {date ? date.toLocaleDateString() : "DD/MM/YYYY"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  )
}
