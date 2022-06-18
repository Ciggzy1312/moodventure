export default async function getArticles() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
			'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
		}
	}

	const response = await fetch(
		`https://${process.env.X_RAPIDAPI_HOST}/news/thetimes`, options)
	return response.json()
}