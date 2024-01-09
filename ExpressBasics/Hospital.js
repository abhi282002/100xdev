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

//use to parse data that comes from req.body
app.use(express.json());

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

app.post("/", function (req, res) {
  //take input from query params
  const isHealthy = req.body;
  user[0].kidneys.push({ healthy: isHealthy });
  res.json({
    msg: "Health Status updated successfully",
  });
});

app.put("/", function (req, res) {
  user[0].kidneys.map((data) => {
    if (!data.healthy) {
      data.healthy = true;
    }
  });
  res.json({ data: "Successfully updated" });
});

app.delete("/", function (req, res) {
  if (isHealthyKidneyPresent()) {
    user[0].kidneys = user[0].kidneys.filter((data) => {
      if (data.healthy) {
        return data.healthy;
      }
    });

    res.json({ msg: "done" });
  } else {
    res.status(411).send({ msg: "no fail kidney present" });
  }
});

function isHealthyKidneyPresent() {
  let unhealthyKidneys = false;
  user[0].kidneys.map((data) => {
    if (!data.healthy) {
      unhealthyKidneys = true;
    }
  });
  return unhealthyKidneys;
}

app.listen(3000, () => {
  console.log("server running on 3000 port");
});
