import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export default function ManageDelays() {
  const [flights, setFlights] = useState([]);
  const [delayForm, setDelayForm] = useState({ flightId: '', newPriority: 5 });
  const [statusForm, setStatusForm] = useState({ flightId: '', status: 'COMPLETED' });
  const [message, setMessage] = useState('');

  const fetchFlights = async () => {
    try {
      const res = await axios.get(`${API_URL}/flights`);
      setFlights(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleDelaySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/flights/delay/${delayForm.flightId}?newPriority=${delayForm.newPriority}`);
      setMessage(`Flight ${delayForm.flightId} delayed successfully!`);
      fetchFlights();
    } catch (err) {
      setMessage('Error delaying flight.');
    }
  };

  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/flights/${statusForm.flightId}/status?status=${statusForm.status}`);
      setMessage(`Flight ${statusForm.flightId} status updated to ${statusForm.status}!`);
      fetchFlights();
    } catch (err) {
      setMessage('Error updating status.');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Manage Delays & Status</h2>
      </div>

      {message && (
        <div style={{ padding: '1rem', marginBottom: '1.5rem', backgroundColor: 'rgba(197, 168, 128, 0.2)', color: 'var(--color-gold)', borderRadius: '8px', border: '1px solid rgba(197, 168, 128, 0.5)' }}>
          {message}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="premium-card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Report Delay</h3>
          <form onSubmit={handleDelaySubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label className="premium-label">Select Flight</label>
              <select className="premium-input" value={delayForm.flightId} onChange={e => setDelayForm({...delayForm, flightId: e.target.value})} required>
                <option value="">-- Select Flight --</option>
                {flights.filter(f => f.status !== 'COMPLETED' && f.status !== 'CANCELLED').map(f => (
                  <option key={f.flightId} value={f.flightId}>{f.flightId} ({f.source} → {f.destination})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="premium-label">New Priority</label>
              <input type="number" className="premium-input" value={delayForm.newPriority} onChange={e => setDelayForm({...delayForm, newPriority: e.target.value})} min="1" required />
            </div>
            <button type="submit" className="premium-btn">Delay Flight</button>
          </form>
        </div>

        <div className="premium-card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>Update Status</h3>
          <form onSubmit={handleStatusSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label className="premium-label">Select Flight</label>
              <select className="premium-input" value={statusForm.flightId} onChange={e => setStatusForm({...statusForm, flightId: e.target.value})} required>
                <option value="">-- Select Flight --</option>
                {flights.map(f => (
                  <option key={f.flightId} value={f.flightId}>{f.flightId}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="premium-label">New Status</label>
              <select className="premium-input" value={statusForm.status} onChange={e => setStatusForm({...statusForm, status: e.target.value})}>
                <option value="ON_TIME">ON_TIME</option>
                <option value="DELAYED">DELAYED</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
            <button type="submit" className="premium-btn">Update Status</button>
          </form>
        </div>
      </div>
    </div>
  );
}
