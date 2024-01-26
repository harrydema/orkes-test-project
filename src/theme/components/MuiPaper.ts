import { Components } from "@mui/material";

const MuiPaper: Components["MuiPaper"] = {
  styleOverrides: {
    root: {
      boxShadow: "none",
      borderRadius: 0,
    },
  },
};

export default MuiPaper;
