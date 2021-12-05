import { Link } from 'react-router-dom';
const DashboardNav = () => {
    const active = window.location.pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav">
                    <Link className="navbar-brand p-2" to="/dashboard">Dashboard</Link>
                    <Link className={`nav-link nav-item ${active === '/dashboard' && 'active'}`} to="/dashboard">Your Bookings</Link>
                    <Link className={`nav-item nav-link ${active === '/dashboard/seller' && 'active'}`} to="/dashboard/seller">Your Hotels</Link>
                </div>
        </nav >
    )
}
export default DashboardNav;