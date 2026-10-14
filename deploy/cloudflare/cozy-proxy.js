// cozycrafts.expresphone.com → arnonidan.pythonanywhere.com (Cozy runs on PythonAnywhere).
// Visitors see cozycrafts.expresphone.com; the old address keeps working too.
const ORIGIN = "https://arnonidan.pythonanywhere.com";
const PUBLIC = "https://cozycrafts.expresphone.com";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(url.pathname + url.search, ORIGIN);
    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.set("X-Forwarded-Host", url.host);
    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
      redirect: "manual",
    });
    const response = new Response(upstream.body, upstream);
    const location = response.headers.get("Location");
    if (location && location.startsWith(ORIGIN)) {
      response.headers.set("Location", PUBLIC + location.slice(ORIGIN.length));
    }
    return response;
  },
};
