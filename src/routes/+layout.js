// export const prerender = true; -> undo if deploying to something other than Cloudflare, Vercel, or Netlify
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};