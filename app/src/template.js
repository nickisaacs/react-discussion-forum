function template(title, content) {
    const script = `<script src="dist/bundle.js"></script>`
    
    let page = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title> ${title} </title>
    </head>
    <body>
      <div id="app">${content}</div>
      ${script}
    </body>
    </html>
    `;

    return page;

}

module.exports = template;