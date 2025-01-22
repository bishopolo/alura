export async function getData() {
  let newData = null;
  const response = await fetch(
    "https://673bb8a096b8dcd5f3f73ee7.mockapi.io/movies/"
  );
  const data = await response.json();
  if (data.length > 0) {
    newData = {
      trending: [...data[0].trending],
      movies: data[0].movies,
      series: data[0].series,
    };
  }

  return newData;
}
