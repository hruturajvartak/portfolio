import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
