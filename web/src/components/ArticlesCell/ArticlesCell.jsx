import Article from '../Article/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ul>
  )
}
