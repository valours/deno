Deno.serve((_: Request, res: Response) => {
  return new Response("Hello, world!");
});
