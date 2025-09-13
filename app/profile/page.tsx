export default function Profile() {
  return (
    <section>
      <h1>Profile</h1>
      <div className="card">
        <h3>User Information</h3>
        <p><strong>Name:</strong> Narasak Thongphijit</p>
        <p><strong>Email:</strong> narasakthongphijit@gmail.com</p>
      </div>
      
      <div className="card" style={{ marginTop: '16px' }}>
        <h3>Account Settings</h3>
        <p>Manage your account preferences and security settings.</p>
        <button style={{ 
          background: '#0070f3', 
          color: 'white', 
          border: 'none', 
          padding: '8px 16px', 
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '8px'
        }}>
          Edit Profile
        </button>
      </div>

      <div className="card" style={{ marginTop: '16px' }}>
        <h3>Recent Activity</h3>
        <ul className="list">
          <li>Logged in today at 9:30 AM</li>
          <li>Updated profile information yesterday</li>
          <li>Created new post 2 days ago</li>
          <li>Changed password last week</li>
        </ul>
      </div>
    </section>
  );
}
