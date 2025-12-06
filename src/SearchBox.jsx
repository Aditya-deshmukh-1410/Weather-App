import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5b3ee9f762d6dea3f75b9d8c370d41fe";

  const getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let json = await response.json();

    return {
      city: json.name,
      temp: json.main.temp,
      feelslike: json.main.feels_like,
      humidity: json.main.humidity,
      tempMax: json.main.temp_max,
      tempMin: json.main.temp_min,
      weather: json.weather[0].description
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          label="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, width: "100%" }}
        >
          Search
        </Button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            No such place exists!
          </p>
        )}
      </form>
    </Paper>
  );
}
