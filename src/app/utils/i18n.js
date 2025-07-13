export const getMessages = async (locale) => {
  const messages = await import(`../locales/${locale}.json`);
  return messages.default;
};


export const getMetadata = async (locale) => {
  const messages = await getMessages(locale);
  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
};
export const locales = ['en', 'ar'];
export const defaultLocale = 'en';
