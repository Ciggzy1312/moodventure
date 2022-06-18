export default function Articles({ articles }) {
	return (
		<>
			{articles.map(article => {
				return (
					<div key={article.url}>
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							{article.title}
						</a>
					</div>)
			})}
		</>
	)
}