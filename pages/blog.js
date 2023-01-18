import Link from "next/link"

export default function Blog(props) {
  return (
    <>
      <h2>The Blog</h2>
      {props.posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()

  return {
    props: {
      posts: data.posts
    }
  }
}
