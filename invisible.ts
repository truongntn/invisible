import * as cityTimeZones from "city-timezones";
import * as moment from "moment-timezone";

const inputLocation = "./weather New York, 10005, Tokyo, São Paulo, Berlin";
let arrLocation: string[] = inputLocation.split(",");
let cityLookup = cityTimeZones.lookupViaCity(arrLocation[1].replace(/\s/g, ""));

try {
    function getUsers() {
        const fetch = require("node-fetch");
        return (
            fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityLookup[0]["city"] + "," + cityLookup[0]["iso2"] + "&appid=01ee8e16309fecb0722fb9931922dc4a")
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                })
        );
    }

    function getWeather(query) {
        var that = this;
        const endpoint =
            "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=01ee8e16309fecb0722fb9931922dc4a";
        return that.http
            .get(endpoint)//, {search: searchParams})
            .map(res => res.json().main)
            .subscribe(res => {
                console.log(res);
            });
    }
    console.log(getUsers());
    console.log(cityLookup[0]["timezone"]);
    console.log(moment().tz(cityLookup[0]["timezone"]).format());
} catch (e) {
    let result = e.Message;
    console.log("Not find the city.");
}