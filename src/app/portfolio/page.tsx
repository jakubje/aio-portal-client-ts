import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function Page() {
  return <div className="bg-white dark:bg-black h-screen w-screen">Portfolio</div>;
}
