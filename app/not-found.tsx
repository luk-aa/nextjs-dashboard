// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>

      <Link href="/">Go Home</Link>
    </div>
  );
}
