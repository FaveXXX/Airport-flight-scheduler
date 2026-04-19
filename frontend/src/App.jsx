import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import ScheduleFlight from './pages/ScheduleFlight';
import ManageDelays from './pages/ManageDelays';
import FindRoute from './pages/FindRoute';
import CustomerPortal from './pages/CustomerPortal';
import AdminBookings from './pages/AdminBookings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerPortal />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="schedule" element={<ScheduleFlight />} />
          <Route path="delays" element={<ManageDelays />} />
          <Route path="route" element={<FindRoute />} />
          <Route path="bookings" element={<AdminBookings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
