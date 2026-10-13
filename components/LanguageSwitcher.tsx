import Link from 'next/link';
import { useRouter } from 'next/router';
export default function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();
  return <div role='group' aria-label='Language' className='inline-flex rounded-full border border-black/10 p-1'>
    {(locales ?? ['en', 'es']).map(loc => <Link href={asPath} locale={loc} key={loc} aria-current={locale === loc ? 'true' : undefined} aria-label={loc === 'en' ? 'English' : 'Español'} className={`rounded-full px-3 py-1 text-xs font-semibold ${locale === loc ? 'bg-[#262626] text-white hover:text-white' : 'text-[#737373]'}`}>{loc.toUpperCase()}</Link>)}
  </div>;
}
