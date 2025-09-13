import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
      <b>API-first Demo</b>
      <nav style={{ display: 'inline-block', marginLeft: 16 }}>
        <Link href="/">Home</Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link href="/users">Users</Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link href="/posts">Posts</Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}
