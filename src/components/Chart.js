import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import React, { useEffect, useRef, useState } from "react";

import { Color } from "../constants/Colors";

function useResizeObserver() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 1000 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return [ref, dimensions];
}

const Chart = () => {
  const [duration, setDuration] = React.useState("");
  const [chartRef, chartDimensions] = useResizeObserver();

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <Box
      ref={chartRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: Color.BackgroundPrimary,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: 16, color: "white" }}>
          Activity
        </Typography>
        <FormControl
          variant="outlined"
          sx={{
            m: 1,
            minWidth: 120,
            backgroundColor: "gray",
            borderRadius: 50,
            border: "none",
          }}
          size="small"
        >
          <Select
            sx={{ color: "white" }}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={duration}
            displayEmpty
            onChange={handleDurationChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Weekly</MenuItem>
            <MenuItem value={20}>Monthly</MenuItem>
            <MenuItem value={30}>Yearly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <BarChart
        sx={{
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: "gray",
              strokeWidth: 3,
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: "gray",
            },
          },
        }}
        xAxis={[
          {
            scaleType: "band",
            data: [
              "group A",
              "group B",
              "group C",
              "group D",
              "group E",
              "group F",
            ],
          },
        ]}
        series={[
          { data: [4, 3, 5, 10, 8, 9] },
          { data: [1, 6, 3, 10, 8, 9] },
          { data: [2, 5, 6, 10, 8, 9] },
          { data: [2, 5, 6, 10, 8, 9] },
          { data: [2, 5, 6, 10, 8, 9] },
          { data: [2, 5, 6, 10, 8, 9] },
        ]}
        borderRadius={50}
        width={chartDimensions.width}
        height={220}
      />
    </Box>
  );
};

export default Chart;
