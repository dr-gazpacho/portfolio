import { DISCOGS_SECRET, DISCOGS_KEY } from "$env/static/private";

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles); // iterablePostFiles = {path: resolver()}

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver(); // resolver() -> file content
			const postPath = path.slice(11, -3); // path = /src/routes/blog/post-title.md; path.slice -> /blog/post-title

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const formatArtists = (artists) => {
	let artist;
	for (let i = 0; i < artists.length; i++) {
		artist += artists[i].name + artists[i].join;
	}
	return artist;
}

export const formatLibrary = (unformattedLibrary) => {
	const genres = [];
	const library = [];

	unformattedLibrary.map(record => {
		library.push({
			id: record?.basic_information?.id,
			artist: record?.basic_information?.artists,
			thumb: record?.basic_information?.thumb,
			title: record?.basic_information?.title
		})

		if (record?.basic_information?.artists?.length > 1) {
			console.log(record?.basic_information?.artists)
		}

		record?.basic_information?.genres.map(genre => {
			if (genres.indexOf(genre) === -1) {
				genres.push(genre);
			}
		})
	})
	return { library, genres }

}