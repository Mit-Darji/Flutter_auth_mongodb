const app = require("./app");
const db = require("./config/db");
const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`connected at port ${PORT}`);
});