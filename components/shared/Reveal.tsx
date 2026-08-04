"use client";

import Box, { type BoxProps } from "@mui/material/Box";
import useInView from "./useInView";

export default function Reveal({ children, sx, ...rest }: BoxProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
