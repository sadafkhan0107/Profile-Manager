import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_PROFILES = gql`
  query GetAllProfiles(
    $orderBy: globalOrderBy
    $searchString: String
    $rows: Int
    $page: Int
  ) {
    getAllProfiles(
      orderBy: $orderBy
      searchString: $searchString
      rows: $rows
      page: $page
    ) {
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


export default function App(){
  const { loading, error, data, refetch } = useQuery(GET_ALL_PROFILES, {
    variables: {
      // orderBy: {
      //   key,
      //   sort,
      // },
      // rows,
      // page,
      // searchString,
      orderBy: {
          key: 'email',
          sort: 'asc'
        },
        rows: 16,
        page: 0,
        searchString: ''
    },
  });
  console.log(data);
  useEffect(() => {
    if (error) {
      console.log(error.message + "Please check CORS (turn it on)");
      console.log("error");
      
    }
  }, [error]);
}