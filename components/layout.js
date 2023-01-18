import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <div>
        <h1>OurSite</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className={router.pathname == "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/about" ? "active" : ""} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/blog" || router.pathname == "/blog/[slug]" ? "active" : ""} href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
      <div className="site-footer">
        <p>Footer text, all rights reserved &copy;</p>
      </div>
    </>
  )
}
