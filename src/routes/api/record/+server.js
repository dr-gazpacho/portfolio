import { json } from "@sveltejs/kit";

// TO DO:
// Create second get method at /album or something to pull details
// Figure out how the heck they can "submit a request"

export const GET = async ({ params }) => {
    const record = await fetch(
        `https://api.discogs.com/releases/${params.record}}`,
        {
            method: "GET",
        }
    );
    return json(record);

}