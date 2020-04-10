const apykey =
  "jEcDJw7tj__qdGVURqMlWHj3r8U4jz_6BrmZkJj4q7q1z6ZrHY7N0aOKzzxFg64LeFhhL2mNKUQKMMgG8WSUs6GZYSk8ffMTNMOGo5Drl1dqBJAjwa0wphZTmEyQXnYx";

export const Yelp = {
  search(term, location, sortBy) {
    const headers = {
      Authorization: "Bearer ${apiKey}",
    };

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      headers
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount,
            };
          });
        }
      });
  },
};
