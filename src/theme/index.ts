import { ThemeOptions } from "@mui/material";
import MuiCard from "./components/MuiCard";
import MuiCardContent from "./components/MuiCardContent";
import MuiCardMedia from "./components/MuiCardMedia";
import MuiPaper from "./components/MuiPaper";

const theme: ThemeOptions = {
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
  components: {
    MuiCard: MuiCard,
    MuiCardContent: MuiCardContent,
    MuiCardMedia: MuiCardMedia,
    MuiPaper: MuiPaper,
  },
};

export default theme;
