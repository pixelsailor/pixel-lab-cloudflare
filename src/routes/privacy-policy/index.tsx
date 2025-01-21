import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

type WpRenderedObject = {
  rendered: string;
}

export const usePrivacyPolicy = routeLoader$(async () => {
  const res = await fetch('https://cms.pixel-lab.us/wp-json/wp/v2/pages/3');
  const page = await res.json();
  return page as {
    date: string | null;
    guid: any;
    id: number;
    link: string;
    slug: string;
    status: string;
    type: string;
    permalink_template: string;
    title: WpRenderedObject;
    content: WpRenderedObject;
    author: number;
  }
});

export default component$(() => {
  const signal = usePrivacyPolicy();
  return (
    <div class="md:container mx-auto p-4">
      <h1 class="text-4xl font-bold mb-8">{signal.value.title.rendered}</h1>
      <div dangerouslySetInnerHTML={signal.value.content.rendered}></div>
    </div>
  )
});