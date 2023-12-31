import express from "express";
import { create } from "../../dist/index.js"; // "express-handlebars"
import * as helpers from "./lib/helpers.js";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Create `ExpressHandlebars` instance with a default layout.
const hbs = create({
	helpers,

	// Uses multiple partials dirs, templates in "shared/templates/" are shared
	// with the client-side of the app (see below).
	partialsDir: [
		"shared/templates/",
		"views/partials/",
	],
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

// Middleware to expose the app's shared templates to the client-side of the app
// for pages which need them.
function exposeTemplates (req, res, next) {
	// Uses the `ExpressHandlebars` instance to get the get the **precompiled**
	// templates which will be shared with the client-side of the app.
	hbs.getTemplates("shared/templates/", {
		cache: app.enabled("view cache"),
		precompiled: true,
	}).then((templates) => {
		// RegExp to remove the ".handlebars" extension from the template names.
		const extRegex = new RegExp(hbs.extname + "$");

		// Creates an array of templates which are exposed via
		// `res.locals.templates`.
		templates = Object.keys(templates).map((name) => {
			return {
				name: name.replace(extRegex, ""),
				template: templates[name],
			};
		});

		// Exposes the templates during view rendering.
		if (templates.length) {
			res.locals.templates = templates;
		}

		setImmediate(next);
	})
		.catch(next);
}

app.get("/", (req, res) => {
	res.render("home", {
		title: "Home",
	});
});

app.get("/yell", (req, res) => {
	res.render("yell", {
		title: "Yell",

		// This `message` will be transformed by our `yell()` helper.
		message: "hello world",
	});
});

app.get("/exclaim", (req, res) => {
	res.render("yell", {
		title: "Exclaim",
		message: "hello world",

		// This overrides _only_ the default `yell()` helper.
		helpers: {
			yell (msg) {
				return (msg + "!!!");
			},
		},
	});
});

app.get("/echo/:message?", exposeTemplates, (req, res) => {
	res.render("echo", {
		title: "Echo",
		message: req.params.message,

		// Overrides which layout to use, instead of the defaul "main" layout.
		layout: "shared-templates",

		partials: Promise.resolve({
			echo: hbs.handlebars.compile("<p>ECHO: {{message}}</p>"),
		}),
	});
});

app.use(express.static("public/"));

app.listen(3000, () => {
	console.log("express-handlebars example server listening on: 3000");
});
