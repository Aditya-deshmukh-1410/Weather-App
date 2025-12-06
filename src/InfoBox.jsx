import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/LightMode";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const HOT =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000";
  const COLD =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000";
  const RAIN =
    "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=1000";

  const getImage = () => {
    if (info.humidity > 80) return RAIN;
    if (info.temp > 20) return HOT;
    return COLD;
  };

  const getIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon />;
    if (info.temp > 20) return <SunnyIcon />;
    return <AcUnitIcon />;
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 4,
        overflow: "hidden",
      }}
    >
      <CardMedia component="img" height="180" image={getImage()} />

      <CardContent>
        <Typography variant="h5" fontWeight={600}>
          {info.city} &nbsp; {getIcon()}
        </Typography>

        <Box mt={2}>
          <Typography>Temperature: {info.temp}°C</Typography>
          <Typography>Feels like: {info.feelslike}°C</Typography>
          <Typography>Humidity: {info.humidity}%</Typography>
          <Typography>Min: {info.tempMin}°C</Typography>
          <Typography>Max: {info.tempMax}°C</Typography>
          <Typography mt={2} fontStyle="italic">
            Condition: {info.weather}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
