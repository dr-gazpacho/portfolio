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

export const fetchDiscogsLibrary = async (fetch) => {
	const api = "https://api.discogs.com/users/DJEdgarHoover/collection/folders"
	const library = await fetch(api);
	const libraryAsJson = await library.json();
	console.log(libraryAsJson);
}