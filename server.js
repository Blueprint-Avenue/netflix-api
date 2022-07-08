const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
	.connect(
		"mongodb+srv://mackie23:admin@cluster0.erym8xr.mongodb.net/netflix-clone",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("DB Connetion Successfull");
	})
	.catch((err) => {
		console.log(err.message);
	});

app.use("/api/user", userRoutes);

app.listen(7700, console.log("Server Started"));
