import { JSDOM } from "jsdom";

//Transform the show name in the slug that will be used in the url
export function slugify(showName: string): string {
  return showName
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase();
}

//striping HTML tags from the text to make it safer
export function stripHTML(text: string): string {
  const dom = new JSDOM(text);
  return dom.window.document.querySelector("p").textContent;
}
