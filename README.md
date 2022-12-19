# tee-time-buddy
Finds courses within one mile of a latitude and longitude.  Returns course details that would be found on Google.  
Shows weather information for the specified location

User Stories:
[I] was {visiting} my [dad] during the [holidays] and we {decided} [we] wanted to {play} a [round of golf].  We {checked} the [weather] to make sure it was going to be [nice enough] to enjoy [18 holes of golf]. As on the [last update time], the [weather] is {showing} ["Sunny"], [low clouds], and a [temp] of about 36 degrees today.  The [wind] is a SW [breeze] around 7 mph that is not {gusting} too bad.  Now that we {know} the [weather is good] all that is left is to {choose} a [course] to {play} and {head-out} in the [direction] of the [course].  {Looking} at a [list of all the courses in our area] that [are available] to play on, we {find one} that we have not {played} before and {select} that [course] from the [list]. 

***-> Add additional feature to select the course from the list and check available Tee-Times <-*** 
> possible link to the course website

Nouns = Data Objects:
 > Users: I, dad, we
 > Golf Course: round-of-golf, course, direction to course, list of courses in the area
 > Weather: wind, breeze, sunny, temp, last-update-time, low clouds

Verbs = Methods/Actions of the application:
 > visiting?
 > decided?
 > checked the weather
 > viewed last update time
 > showing the current weather information with the user
 > what are the wind gusts?
 > confirmed the weather is good enough to enjoy a round of golf
 > Select the course from a list returned by the API


Rapid API - Weather API
https://rapidapi.com/weatherapi/api/weatherapi-com/

  Example Data Returned:
      location:
        name:"Berea"
        region:"South Carolina"
        country:"United States of America"
        lat:34.91
        lon:-82.4
        tz_id:"America/New_York"
        localtime_epoch:1671382459
        localtime:"2022-12-18 11:54"
      current:
        last_updated_epoch:1671381900
        last_updated:"2022-12-18 11:45"
        temp_c:4
        temp_f:39.2
        is_day:1
      condition:
        text:"Sunny"
        icon:"//cdn.weatherapi.com/weather/64x64/day/113.png"
        code:1000
        wind_mph:5.6
        wind_kph:9
        wind_degree:290
        wind_dir:"WNW"
        pressure_mb:1020
        pressure_in:30.12
        precip_mm:0
        precip_in:0
        humidity:56
        cloud:0
        feelslike_c:1.8
        feelslike_f:35.2
        vis_km:16
        vis_miles:9
        uv:2
        gust_mph:6.3
        gust_kph:10.1

Rapid API - Golf Course Finder
https://rapidapi.com/golfambit-golfambit-default/api/golf-course-finder/

  Example Data Returned:
      0:
        name:"Hillandale Golf Course"
        zip_code:"29609"
        distance:0.6
