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

app.use(express.json());
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000);
