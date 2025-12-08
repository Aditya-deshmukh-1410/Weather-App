import { Container, Typography, Box } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze"
  });

  const updateInfo = (newInfo) => setWeatherInfo(newInfo);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Weather App
      </Typography>

      <Box mb={4}>
        <SearchBox updateInfo={updateInfo} />
      </Box>

      <InfoBox info={weatherInfo} />
    </Container>
  );
} 
