import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead, type RequestHandler } from "@builder.io/qwik-city";

export const onGetMedia: RequestHandler = async ({ send, url }) => {
  const response = await fetch(
    new URL('https://cms.pixel-lab.us/wp-json/wp/v2/media/', url)
  );
  send(response.status, await response.text());
}

export default component$(() => {
  return (
    <div class="container h-screen grid md:grid-cols-2 gap-4 place-items-center">
      <div class="grid gap-4 text-center">
        <h1 class="silkscreen text-6xl font-light leading-normal m-0" style="color: #333;">Pixel Lab</h1>
        <p class="text-sm mb-0">Powered by Cloudflare Pages and <a href="https://qwik.dev">qwik</a></p>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
      <div>
        <img width="720" height="540" src="https://cms.pixel-lab.us/wp-content/uploads/2025/01/3048031.F4ECB10BF007F006.webp" alt="A gray mech-like model created with LEGO bricks" />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "pixel lab",
  meta: [
    {
      name: "description",
      content: "Pixel Lab is a sandbox for experimenting with various web technologies in a live environment. Pixel Lab is strictly for educational purposes.",
    },
  ],
};
