import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, PlaneTakeoff, Clock, Map, Users, ExternalLink } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>Aero<br />Admin.</h1>
      </div>
      <nav style={{ flex: 1 }}>
        <NavLink to="/admin" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} end>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/schedule" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <PlaneTakeoff size={20} />
          <span>Schedule Flight</span>
        </NavLink>
        <NavLink to="/admin/delays" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Clock size={20} />
          <span>Manage Delays</span>
        </NavLink>
        <NavLink to="/admin/route" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Map size={20} />
          <span>Find Route</span>
        </NavLink>
        <NavLink to="/admin/bookings" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
          <Users size={20} />
          <span>Manifest</span>
        </NavLink>
      </nav>
      
      <div style={{ padding: '2rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontSize: '0.9rem', textDecoration: 'none', transition: 'opacity 0.3s' }} className="nav-link-hover">
          <ExternalLink size={16} />
          <span>View Public Portal</span>
        </Link>
      </div>
    </aside>
  );
}
