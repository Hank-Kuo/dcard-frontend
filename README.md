# Dcard frontend Demo
## Introduce 
This homework **display the taiwanese spots**, try to access https://ptx.transportdata.tw/MOTC?t=Tourism&v=2 api, and use **React hook** to show **spot's name,  description and location**. And also can link different location to see the different spots.

**Demo Link**: http://dcard-frontend-demo.surge.sh/scenicSpot

## How to use ?
- Script: 
```script
Run: yarn start
Build: yarn build
Deploy: yarn deploy
```
- Scripts decription: 
    - `yarn start`:  Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    - `yarn build`: Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
    - `yarn deploy`: Build the project and deploy this project to http://dcard-frontend-demo.surge.sh.

## Project Architecture

### Entry point
```
./scr/index.jsx
```

### node module:
- **react**: inital react library
- **react-router-dom**: router library
- **react-scripts**: easy to run react script
- **styled-components**: css library
- **surge**: delopy website to server

### Project hierarchy 

![](https://i.imgur.com/UMBIZJ2.png)

#### api: 
![](https://i.imgur.com/3GmbZ4p.png)

call https://ptx.transportdata.tw/MOTC?t=Tourism&v=2 api function, and let main file to call, and also wrap to restful api ( get, post, put, delete ). The api detail configuration is in config.jsx.

#### assets
put the static object, like images or multilingual file. 

#### components
![](https://i.imgur.com/06p5Fif.png)

Break up the user interface into separate pieces that can then be reused and handled independently.

#### core
![](https://i.imgur.com/AeK3TI1.png)

Put utility objects, like constants (unit), function, hoc, ... . In here, device.jsx is for RWD and spot.jsx is for all taiwanese spots.

#### routes
![](https://i.imgur.com/vgV6FVQ.png)

Setting all pages' router. In here, only set ```/scenicSpot``` route.

#### view
![](https://i.imgur.com/Ypr8hxJ.png)

Each pages will put in here, the main file is index.jsx ( main logic ), then css file is styles.jsx ( use styles-components to wrap HTML to components ).

