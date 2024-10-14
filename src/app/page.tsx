import Link from 'next/link';
import { Links } from './components/links';

export default function Page() {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
      <Links />
    </div>
  );
}
