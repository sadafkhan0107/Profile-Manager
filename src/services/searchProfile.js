import axios from 'axios';

const getSearchProfiles = async (search) => {
  const api_url = 'https://api.poc.graphql.dev.vnplatform.com/graphql';

  const authorization_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6InNhZGFmLmtoYW5AYWlkZXRpYy5pbiIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjkxMTU5NDk2LCJleHAiOjE2OTE2Nzc4OTZ9.vvSE_6r5siByJJDFTdH-vClv-e_xDQ-sJFSWbtthTH4';

  const headers = {
    Authorization: authorization_token,
    'Content-Type': 'application/json',
  };

  const query = `
    query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
      getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
        size
        profiles {
          id
          first_name
          last_name
          email
          is_verified
          image_url
          description
        }
      }
    }
  `;

  const variables = {
    orderBy: {
      key: 'is_verified',
      sort: 'desc'
    },
    rows: 10,
    page: 0,
    searchString: search
  };

  const payload = {
    query,
    variables,
  };

  try {
    const response = await axios.post(api_url, payload, { headers });
    console.log(response);
    return response
  } catch (error) {
    console.error('Error Response:', error.response);
    console.error('Error Message:', error.message);
    console.error('Request Config:', error.config);
    return error;
  }
};

export default getSearchProfiles;