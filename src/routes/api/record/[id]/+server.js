import { json } from "@sveltejs/kit";

// TO DO:
// Turn record object into track list
// Figure out how the heck they can "submit a request"

export const GET = async ({ params }) => {
    console.log('getting?', params.id)
    const record = await fetch(
        `https://api.discogs.com/releases/${params.id}`,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        }
    );

    const parsedRecord = await record.json()
    return json(parsedRecord);
}