/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        './app/**/*.php',
        './public/vendor/**/*.html',
        './resources/{docs,js,views}/**/*.{css,html,js,php}',
        './vendor/livewire/livewire/src/**/*.blade.php',
    ],
    corePlugins: {
        aspectRatio: false,
    },
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
    ],
}
