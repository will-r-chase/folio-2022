import pMap from "p-map"
import { basename } from "path"

export async function get() {
	// Import all .svx files in the directory
	const modules = import.meta.glob("./*.svx")

	// Run a map over each module

	// Check out the docs for p-map if this looks confusing, it's  basically
	// Array.map(...) but for promises
	const posts = await pMap(
		Object.entries(modules),
		async function ([filename, module]) {
			// Import the component. The metadata here is added by MDSveX and mirrors
			// the front matter.
			const { metadata } = await module()

			return {
				title: metadata.title,
				date_raw: new Date(metadata.date),
				date: new Date(metadata.date).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}),
				summary: metadata.summary,
                post_type: metadata.post_type,
                preview: `/img/blog/${metadata.img}`,
				slug: basename(filename, ".svx") // Generate a slug we can link to
			}
		}
	)

	// Sort posts by descending date
	posts.sort((a, b) => (a.date > b.date ? -1 : 1))

	return {
		body: { posts }
	}
}