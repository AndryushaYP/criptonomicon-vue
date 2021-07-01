const API_KEY = "d3b6b1c32ac99e15d33d9787b1517dedefa90d65efa0525a94e1cd3be7eedb3e";

export const search = (searchParams) => {
  return fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${searchParams}&api_key=${API_KEY}&tsyms=USD`,
    {
      method: "GET",
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
