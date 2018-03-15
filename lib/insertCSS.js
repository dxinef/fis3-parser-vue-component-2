
module.exports = function(css) {
    return (/^\"\"$/.test(css)) ? "" : ";(function(css){var tag = document.createElement(\"style\"); tag.setAttribute(\"type\",\"text/css\"); tag.innerHTML = css; document.head.appendChild(tag);})("+css+");\n";
}
