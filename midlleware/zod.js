const { secureHeapUsed } = require("crypto");
const express = require("express");
const z = require("zod");
const app = express();

const schema = z.array(z.number());
/*
 email:string=>email,
 password:atleast 8 letter,
 counry "IN","US"
*/

const authSchema = z.object({
  email: z.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number()),
});

function validate(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const response = schema.safeParse(obj);
  return response;
}
app.use(express.json());

app.post("/login", function (req, res) {
  const response = validate(req.body);
  if (!response.success) {
    res.json({
      msg: "Your inputs are invalid",
    });
    return;
  }
});

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000);
