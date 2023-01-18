import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/post.module.css"

export default function Post(props) {
  const router = useRouter()
  return (
    <>
      <p>
        <Link href="/blog">
          <small>&laquo; back to all blog posts</small>
        </Link>
      </p>
      <h2 className={styles.title}>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <button className={styles.button} onClick={() => router.push("/blog")}>
        Click me to programmatically navigate or redirect
      </button>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()

  const thePaths = data.posts.map(pet => {
    return { params: { slug: pet.slug } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()
  const thePost = data.posts.filter(post => post.slug === context.params.slug)[0]

  return {
    props: {
      post: thePost,
      title: thePost.title
    }
  }
}
