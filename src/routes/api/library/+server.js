import { json } from "@sveltejs/kit";
import { DISCOGS_SECRET, DISCOGS_KEY } from "$env/static/private";

export const GET = async () => {
    let library = [];

    try {
        for (let i = 1; i <= 6; i++) {
            const discogsCollection = await fetch(
                `https://api.discogs.com/users/DJEdgarHoover/collection/folders/0/releases?page=${i}&per_page=100`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Discogs key=${DISCOGS_KEY}, secret=${DISCOGS_SECRET}`
                    }
                }
            );

            if (!discogsCollection.ok) {
                throw new Error(`HTTP error! status: ${discogsCollection.status}`);
            }

            const libraryAsJson = await discogsCollection.json();
            const releases = libraryAsJson.releases;

            library.push(...releases);
        }

        return json({
            success: true,
            data: library,
            totalCount: library.length
        });
    } catch (error) {
        return json({
            success: false,
            error: 'Failed to fetch collection',
            details: error.message
        }, {
            status: 500
        });
    }
};