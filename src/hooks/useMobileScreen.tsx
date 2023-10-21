"use client";
import { useMediaQuery } from "@mantine/hooks";

export function useMobileScreen() {
  const mobile = useMediaQuery("(max-width:1024px)");
  return mobile;
}
