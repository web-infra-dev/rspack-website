import { next } from '@vercel/edge';

export default function middleware(req) {
  const headers = req.headers;
  console.log('heaers:', headers, headers.get('rspack'));
  if (headers.get('rspack') !== 'edenx') {
    return Response.redirect(new URL('https://modernjs.dev/builder/zh/'));
  }
}
