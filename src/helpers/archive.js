import tasks from "./Events";

export async function getEventDetails() {
  return tasks.map(t => ({key: t.key, name: t.name, about: t.desc, img_url: t.image, img_mobile_url: t.image}));
}

// The original backend records were not included in the repository.
export const sponsors = [];
export const media = [];
export const wallmag = [];
