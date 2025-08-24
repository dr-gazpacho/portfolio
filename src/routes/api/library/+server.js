import { json } from "@sveltejs/kit";
import { DISCOGS_SECRET, DISCOGS_KEY } from "$env/static/private";

export const GET = async () => {
    const api = "https://api.discogs.com/users/DJEdgarHoover/collection/folders/0/releases"
    const library = await fetch(api, {
        method: "GET",
        headers: {
            Authorization: `Discogs key=${DISCOGS_KEY}, secret=${DISCOGS_SECRET}`
        }
    });
    const libraryAsText = await library.text();
    const libraryAsJson = await JSON.parse(libraryAsText)

    return json(libraryAsJson.releases)
}