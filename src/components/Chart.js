import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import React, { useEffect, useRef, useState } from "react";

import { Color } from "../constants/Colors";

function useResizeObserver() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth - 112,
  });

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
  const [duration, setDuration] = React.useState(10);
  const [chartRef, chartDimensions] = useResizeObserver();
  const [chartData, setChartData] = useState([
    { data: [4, 3, 5, 10, 8, 9] },
    { data: [1, 6, 3, 10, 8, 9] },
    { data: [2, 5, 6, 10, 8, 9] },
    { data: [2, 5, 6, 10, 8, 9] },
    { data: [2, 5, 6, 10, 8, 9] },
    { data: [2, 5, 6, 10, 8, 9] },
  ]);

  const handleDurationChange = (event) => {
    const value = event.target.value;
    setDuration(event.target.value);
    if (value === 10) {
      setChartData([
        { data: [4, 3, 5, 10, 8, 9] },
        { data: [1, 6, 3, 10, 8, 9] },
        { data: [2, 5, 6, 10, 8, 9] },
        { data: [2, 5, 6, 10, 8, 9] },
        { data: [2, 5, 6, 10, 8, 9] },
        { data: [2, 5, 6, 10, 8, 9] },
      ]);
    } else if (value === 20) {
      setChartData([
        { data: [4 * 3, 3 * 3, 5 * 3, 10 * 3, 8 * 3, 9 * 3] },
        { data: [1 * 3, 6 * 3, 3 * 3, 10 * 3, 8 * 3, 9 * 3] },
        { data: [2 * 3, 5 * 3, 6 * 3, 10 * 3, 8 * 3, 9 * 3] },
        { data: [2 * 3, 5 * 3, 6 * 3, 10 * 3, 8 * 3, 9 * 3] },
        { data: [2 * 3, 5 * 3, 6 * 3, 10 * 3, 8 * 3, 9 * 3] },
        { data: [2 * 3, 5 * 3, 6 * 3, 10 * 3, 8 * 3, 9 * 3] },
      ]);
    }
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
            <MenuItem value={10}>Weekly</MenuItem>
            <MenuItem value={20}>Monthly</MenuItem>
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
        series={chartData}
        borderRadius={50}
        width={chartDimensions.width}
        height={220}
      />
    </Box>
  );
};

export default Chart;
