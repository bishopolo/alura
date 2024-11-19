export async function getData() {
  const api = await fetch("https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants");
  const data = await api.json();

  return data;
}
