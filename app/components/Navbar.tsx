import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <b>API-first Demo</b>
      </div>
      <nav className="navbar-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/users" className="nav-link">Users</Link>
        <Link href="/posts" className="nav-link">Posts</Link>
        <Link href="/profile" className="nav-link profile-link">Profile</Link>
      </nav>
    </header>
  );
}
