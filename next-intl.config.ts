import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Specify all available locales here
const locales = ['en', 'es', 'de', 'hi', 'th', 'id', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

export function getLocales() {
  return locales;
}