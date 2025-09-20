import React from "react";
import { Box, Slider, Typography } from "@mui/material";

export function SalarySlider({ salaryRange, setSalaryRange }) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 220,
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 1,
        padding: "0 16px",
      }}
    >
      <div className="w-full flex flex-row items-start justify-between">
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5, color: "#222222", fontSize: "16px", fontWeight:500 }}
        >
          Salary Per Month
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "16px", color: "#222222" }} fontWeight={500}>
          ₹{(salaryRange[0] / 1000).toFixed(0)}K – ₹{(salaryRange[1] / 1000).toFixed(0)}K
        </Typography>
      </div>

      <Slider
        value={salaryRange}
        onChange={(e, newValue) => setSalaryRange(newValue)}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${(value / 1000).toFixed(0)}K`}
        min={50000}
        max={800000}
        step={20000}
        sx={{
          color: "black",
          height: 2,
          width: "100%",
          ml: 1,
          "& .MuiSlider-thumb": {
            width: 12,
            height: 12,
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            position: "absolute",
            marginTop: "0px",
            "&::after": {
              content: '""',
              display: "block",
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "4px",
              height: "4px",
              background: "#fff",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            },
          },
          "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: "#e5e7eb",
          },
          "& .MuiSlider-track": {
            backgroundColor: "black",
          },
        }}
      />
    </Box>
  );
}
