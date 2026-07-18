"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export function SearchInput({
  className,
  containerClassName,
  ...props
}: SearchInputProps) {
  return (
    <InputGroup className={cn("w-full", containerClassName)}>
      <InputGroupAddon>
        <Search className="size-4 text-muted-foreground" />
      </InputGroupAddon>

      <InputGroupInput
        className={cn(className)}
        placeholder="Search..."
        {...props}
      />
    </InputGroup>
  );
}