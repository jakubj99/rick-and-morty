import { useQuery, gql} from "@apollo/client";

const GET_PAGE = gql`
query GetPage($page: Number!){
        characters(page: $page){
        results{
            id
            name
            image
            species
            gender
        }
    }
}
`;

export const usePagination = (pageNumber) => {
    const { loading, error, data } = useQuery(GET_PAGE, {
        arguments: pageNumber
    });
    return {
        data,
        loading,
        error
    };
}