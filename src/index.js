const express = require("express");

const tourRoute = require("./tour/tour.router");
const scheduleRoute = require("./schedule/schedule.router");
const priceRouter = require("./price/price.router");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    if (req.originalUrl === '/') return res.send('Service is running!');
    next();
});

app.use('/tour', tourRoute);
app.use('/schedule', scheduleRoute);
app.use('/price', priceRouter);

app.listen(3000, () => {
    console.log(`app is running on http://localhost:3000`);
});

/*
{
    "title": "test",
    "slug": "test",
    "description": "test",
    "isActive": true
}

// d7124ec3-534b-4616-9afc-5ad68a9ffa9a

{
    "tourId": "test",
    "startDate": "03.03.2022",
    "endDate": "03.03.2022",
    "isActive": true
}

// 8c952f74-49f1-413d-98cf-b63996d65073
*/