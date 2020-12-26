import React from 'react';

import { useAuth } from '../lib/auth';
import EmptyState from '../components/EmptyState';

export default function Home() {
  const auth = useAuth();
  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState />;
}