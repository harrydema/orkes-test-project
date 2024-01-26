import { memo, FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

const ArticleSkeleton: FC = () => (
  <Card sx={{ display: "flex" }}>
    <Skeleton
      sx={{
        width: 160,
        height: 120,
        borderRadius: 6,
      }}
      variant="rectangular"
    />
    <CardContent
      sx={{
        flex: 1,
      }}
    >
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton
        sx={{
          mt: 0.5,
        }}
        height={20}
        width="70%"
        variant="text"
      />
    </CardContent>
  </Card>
);

export default memo(ArticleSkeleton);
