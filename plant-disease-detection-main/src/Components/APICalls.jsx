import React from 'react'

function APICalls() {
    const apiKey = 'df24bd934355a6d2ba702da500af0847';

    const latitude = 37; // Example latitude
    const longitude = -122; // Example longitude
    const startDate = 1483218000; // Example start date
    const endDate = 1504213200; // Example end date
    const thresholdTemperature = 273; // Example threshold temperature

    // Constructing the API URL
    const apiUrl = `http://api.agromonitoring.com/agro/1.0/weather/history/accumulated_temperature?lat=${latitude}&lon=${longitude}&start=${startDate}&end=${endDate}&threshold=${thresholdTemperature}&appid=${apiKey}`;

    // Making the API call using fetch
    const fetchData = function () {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the API response data here
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occur during the API call
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div>APICalls</div>
            <button onClick={fetchData}>Fetch Data</button>
        </>
    )
}

export default APICalls