import { json } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const response = await fetch(`/api/library`);
    const collection = await response.json();
    return { collection };
};