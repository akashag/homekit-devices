import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="HomeKit Devices" description="Curated HomeKit device directory">
      <main style={{padding: '2rem'}}>
        <h1>Welcome to HomeKit Devices</h1>
        <p>Your curated & categorized catalogue of Apple HomeKit-compatible smart devices—with specs, images, and affiliate links.</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link className="button button--primary" to="/docs/lights/nanoleaf-essentials">
            Browse Lights
          </Link>
          <Link className="button button--secondary" to="/docs/sensors/eve-motion">
            Browse Sensors
          </Link>
        </div>
      </main>
    </Layout>
  );
}
