## Task for Optimove - Weather forcast

![Screenshot the app screen](https://github.com/minus199/optimove-weather-frontend/blob/master/screenshot.png)

Create a new directory and cd into it: `mkdir com.optimove.weather && cd $_`
### Frontend
- `git clone https://github.com/minus199/optimove-weather-frontend.git`
- `cd optimove-weather-frontend`
- `yarn`
- `yarn build`
### Backend
- `git clone https://github.com/minus199/optimove-weather-backend.git`
- `cd optimove-weather-backend`
- link to the build directory in frontend ### `ln -sf ../optimove-weather-frontend ./public`
- `yarn`
- Make sure to have the following env vars: `GITHUB_CID`, `GITHUB_SECRET`, `APIXUKEY`
- `yarn start`