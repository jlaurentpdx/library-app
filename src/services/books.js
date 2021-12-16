import client from './client';

export async function getBooks(query) {
  let request = client.from('books').select(`*, authors (*)`).order('title').limit(100);
  if (query) {
    request = request.ilike('title', `%${query}%`);
  }

  return request;
}

export async function getBookById(id) {
  return client.from('books').select(`*, authors (*)`).match({ book_id: id }).single();
}
