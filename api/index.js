const server = require("./src/app.js");
const port = process.env.PORT || 5040;

// Syncing all the models at once.
server.listen(port, () => {
  console.log(".:_:. Server started on port " + port + " .:_:.");
  // eslint-disable-line no-console
});
