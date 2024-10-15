"use client";

import { Rating, Stack } from "@mui/material";

const Rating_MUI = () => {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        size="small"
        readOnly
      />
    </Stack>
  );
};

export default Rating_MUI;
