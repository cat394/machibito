/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
    fontFamily: {
      "serif": ["serif"]
    }
  },
	daisyui: {
    themes: ["dracula"],
  },
	plugins: [require("daisyui")]
}
