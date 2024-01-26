"use client";

import { ReactNode, memo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "@/theme";

interface RootLayoutProps {
  children: ReactNode;
}

const MuiTheme = createTheme(theme);

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={MuiTheme}>
        <Box
          sx={{
            backgroundColor: MuiTheme.palette.background.default,
          }}
        >
          <Box
            sx={{
              maxWidth: 460,
              margin: "0 auto",
              background: MuiTheme.palette.background.paper,
              borderLeft: "1px solid #CCC",
              borderRight: "1px solid #CCC",
            }}
          >
            <Box
              sx={{
                mx: 2,
                minHeight: "100vh",
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default memo(RootLayout);
