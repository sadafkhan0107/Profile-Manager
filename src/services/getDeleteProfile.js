import axios from 'axios';

export const deleteProfile = async (itemToDelete) => {
    const api_url = 'https://api.poc.graphql.dev.vnplatform.com/graphql';
    const authorization_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6InNhZGFmLmtoYW5AYWlkZXRpYy5pbiIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjkwMTkwODE3LCJleHAiOjE2OTA3MDkyMTd9.svY06nK9bATWCoTbJnXFGYSYu05R6x-b3wk9wiM9X9Q'; // Replace with your actual token

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

    const mutation = `
    mutation DeleteProfile($deleteProfileId: String!) {
        deleteProfile(id: $deleteProfileId)
      }
    `;

    const variables = {
        deleteProfileId: itemToDelete
    };


    try {
      // Perform the mutation to create a new profile
       await axios.post(api_url, { query: mutation, variables }, { headers });

      // Perform the query to get all profiles
      const queryResponse = await axios.post(api_url, { query: query, variables: { orderBy: { key: "is_verified", sort: "desc" }, rows: 10, page: 0, searchString: "" } }, { headers });

      // Retrieve all profiles, including the newly created one
      const allProfiles = queryResponse.data.data.getAllProfiles.profiles;
      console.log(allProfiles);
      return allProfiles;
      // Handle success or any other actions you want to take upon successful creation.
    } catch (error) {
      console.error('Error creating profile:');
      // Handle errors or display an error message to the user.
    }
  };