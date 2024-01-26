import { FC, memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Error: FC<{
  text: string;
}> = ({ text }) => {
  return (
    <>
      <Box
        sx={{
          pt: 3,
          textAlign: "center",
        }}
      >
        <Box
          alt="Error"
          component="img"
          src="/assets/error.png"
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: 200,
          }}
        />
        <Typography
          sx={{
            mt: 3,
            maxWidth: 300,
            margin: "0 auto",
          }}
          align="center"
          variant="body1"
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default memo(Error);
