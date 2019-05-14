import { configure } from "@storybook/react";

function loadStories() {
	const req = require.context('../stories', true, /\.stories\.js$/);
	req.keys().forEach(filename => req(filename));
}

// function loadStories() {
//   require("../stories/index.js");
//   // You can require as many stories as you need.
//   // }
//   //
// }

configure(loadStories, module);
