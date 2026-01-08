import { notFound } from 'next/navigation';

// Blog posts disabled — return 404 for any blog slug
export default async function BlogPostPage() {
  notFound();
}
