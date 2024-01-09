const express = require("express");
const app = express();

var user = [
  {
    name: "abhishek",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  const healthyKidneys = johnKidneys.filter((data) => data.healthy == true);
  const numberOfUnhealthyKidney = numberOfKidneys - healthyKidneys.length;
  res.status(200).json({
    numberOfKidneys,
    healthyKidneys: healthyKidneys.length,
    numberOfUnhealthyKidney,
  });
});

app.listen(3000, () => {
  console.log("server running on 3000 port");
});
