import React from "react";
import styles from "./Weather.module.scss";

function WeatherApp() {
    const weatherData = {
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
    };

    const [weather, setWeather] = React.useState(null);
    const [data, setData] = React.useState(weatherData);

    const handleCityChange = (e) => {
        const cityKey = e.target.value;
        setWeather(cityKey);
    };

    const currentWeatherData = data[weather];

    const getWeatherIcon = (weather) => {
        switch (weather) {
            case "Nắng":
                return "☀️";
            case "Có mây":
                return "🌤️";
            case "Mưa nhẹ":
                return "🌧️";
            default:
                return "";
        }
    };

    const randomTemHumidity = () => {
        const newTemp = Math.floor(Math.random() * 11) - 5;
        const newHumidity = Math.floor(Math.random() * 11) - 5;

        setData((prevData) => {
            const currentCity = prevData[weather];
            return {
                ...prevData,
                [weather]: {
                    ...currentCity,
                    temp: currentCity.temp + newTemp,
                    humidity: Math.min(
                        100,
                        Math.max(0, currentCity.humidity + newHumidity),
                    ),
                },
            };
        });
    };

    return (
        <div className={styles["weather-container"]}>
            <h1 className={styles["main-title"]}>Dự báo thời tiết</h1>
            <div className={styles["weather-card"]}>
                <select
                    className={styles["city-select"]}
                    value={weather || ""}
                    onChange={handleCityChange}
                >
                    <option value="">-- Chọn thành phố --</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="danang">Đà Nẵng</option>
                    <option value="hcm">TP. Hồ Chí Minh</option>
                </select>

                {currentWeatherData ? (
                    <div className={styles["weather-info"]}>
                        <div className={styles["weather-emoji"]}>
                            {getWeatherIcon(currentWeatherData.weather)}
                        </div>
                        <h2 className={styles["city-name"]}>{currentWeatherData.city}</h2>
                        <div className={styles["temp-display"]}>
                            {currentWeatherData.temp}
                        </div>

                        <div className={styles["weather-details"]}>
                            <div className={styles["detail-row"]}>
                                <span className={styles["detail-label"]}>
                                    Tình trạng:
                                </span>
                                <span className={styles["detail-value"]}>
                                    {currentWeatherData.weather}
                                </span>
                            </div>
                            <div className={styles["detail-row"]}>
                                <span className={styles["detail-label"]}>Độ ẩm:</span>
                                <span className={styles["detail-value"]}>
                                    {currentWeatherData.humidity}
                                </span>
                            </div>
                        </div>

                        <button
                            className={styles["btn-refresh"]}
                            onClick={randomTemHumidity}
                        >
                            Làm mới
                        </button>
                    </div>
                ) : (
                    <div className={styles["weather-placeholder"]}>
                        Vui lòng chọn thành phố để xem thời tiết
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherApp;
