const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getJson = filename => require(`./data/${filename}.json`);

app.get("/", (req, res) => {
  return res.send("Hello Deliveryman!");
});

app.get("/api/users", (req, res) => res.json(getJson("users")));
app.get("/api/users/:id", (req, res) => {
  const users = getJson("users");
  const id = req.params.id;
  user = users.find(e => e.id == id);
  return res.json(user);
});

app.get("/api/clients", (req, res) => res.json(getJson("clients")));
app.get("/api/clients/:id", (req, res) => {
  const clients = getJson("clients");
  const id = req.params.id;
  client = clients.find(e => e.id == id);
  return res.json(client);
});

app.get("/api/shipments", (req, res) => res.json(getJson("shipments")));
app.get("/api/shipments/:id", (req, res) => {
  const shipments = getJson("shipments");
  const id = req.params.id;
  shipment = shipments.find(e => e.id == id);
  return res.json(shipment);
});

app.get("/api/statuses", (req, res) => res.json(getJson("statuses")));
app.get("/api/statuses/:id", (req, res) => {
  const statuses = getJson("statuses");
  const id = req.params.id;
  status = statuses.find(e => e.id == id);
  return res.json(status);
});

app.post("/api/login", (req, res) => {
  const users = getJson("users");

  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    e => e.username === username && e.password === password
  );

  if (user) {
    return res.json(user);
  } else {
    // forbidden
    return res.sendStatus(403);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}.`));
