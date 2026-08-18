import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NotFound() {
  const { locale } = useRouter();
  const copy = locale === 'es'
    ? { title: 'Esta página no está aquí', description: 'Es posible que se haya movido mientras simplificaba este sitio.', back: 'Volver al inicio' }
    : { title: "That page isn't here", description: 'It may have moved while this site was being simplified.', back: 'Back home' };

  return (
    <main className='flex min-h-screen items-center px-6 pt-20'>
      <div className='mx-auto w-full max-w-[900px]'>
        <p className='text-sm font-semibold uppercase tracking-[0.22em] text-[#4B007F]'>404</p>
        <h1 className='mt-4 text-5xl font-semibold JosefinSansFont'>{copy.title}</h1>
        <p className='mt-4 text-gray-600'>{copy.description}</p>
        <Link href='/' className='mt-8 inline-flex rounded-full bg-[#4B007F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7132B2]'>
          {copy.back}
        </Link>
      </div>
    </main>
  );
}
