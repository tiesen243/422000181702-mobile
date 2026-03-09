export default {
  fetch: (_req: Request) =>
    new Response('Hello World!', {
      headers: { 'content-type': 'text/plain' },
    }),
}
