export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, categories } = post.metadata;
	const Content = post.default; //access body of markdown file with .default
    console.log({title, date, Content})

	return {
		Content,
		title,
		date,
		categories
	};
}