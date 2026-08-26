const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
};

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(root, `.${requestedPath}`);

  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500).end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    response.end(content);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio: http://127.0.0.1:${port}`);
});

