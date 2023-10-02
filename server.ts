// Deno Server 🦕
//to fire the server in the termianl use
// ❯ deno run --allow-net --allow-read --watch server.ts
//  --allow-net: to make deno allow the file to access network due to deno security modles which disallow everything by defualt.
// --allow-read: allow deno for reading files
// --watch: for watching changes.

async function handler(req: Request) {
  console.log(req.method);
  console.log(req.headers);

  const file = await Deno.open("./index.html");

  const fileStream = file.readable;

  const htmlHeaders = new Headers();

  htmlHeaders.append("content-type", "text/html");

  //   file.close();

  return new Response(fileStream, { headers: htmlHeaders });
}

Deno.serve({ port: 8000 }, handler);

//127.0.0.1:8000 === http://localhost:8000
