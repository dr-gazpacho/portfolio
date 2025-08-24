import { fetchDiscogsLibrary } from '$lib/utils/index.js'
export const load = async ({ fetch }) => {
    fetchDiscogsLibrary(fetch);
}