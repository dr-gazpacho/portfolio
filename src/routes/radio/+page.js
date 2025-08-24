import { json } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const response = await fetch(`/api/library`);
    console.log(response.body)

    return {
        response
    };
};