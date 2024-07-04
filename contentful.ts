import { createClient } from 'contentful';

let contentfulClient;

try {
  contentfulClient = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  });
  console.log('Contentful client created successfully');
} catch (error) {
  console.error('Error creating Contentful client:', error);
}

export { contentfulClient };