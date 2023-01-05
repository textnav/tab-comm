import * as React from 'react';

import { Link } from "react-router-dom";

export function Home() {
  return (
    <div style={{padding: '1rem'}}>
      <h2>Home</h2>
      <Link to="/postMessage">Post Message</Link>
      <Link to="/broadcastChannel">Broadcast Channel</Link>
      <Link to="/localStorage">Local Storage</Link>
    </div>
  );
}
