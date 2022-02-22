const BASE_URL =
  "https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json";

export const getProducts = () => fetchRequest();

async function fetchRequest() {
  const response = await fetch(`${BASE_URL}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${BASE_URL}`);
    });
  return response.items;
}
