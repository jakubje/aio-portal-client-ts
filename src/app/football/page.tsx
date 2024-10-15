import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Football',
};

export default async function Page() {
  return <div className="bg-white dark:bg-black h-screen w-screen">Football</div>;
}
