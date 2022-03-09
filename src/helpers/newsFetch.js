export const getNews = async (category = "general") => {
  const resp = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&pageSize=6&apiKey=155c278041194359a7bfbd479d1433c2`
  );
  const { articles } = await resp.json();
  return articles;
};
