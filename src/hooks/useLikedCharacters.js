import { useQuery, gql} from "@apollo/client";

const GET_LIKED_CHARACTERS = gql`
query GetLikedCharacters($ids: [ID!]!){
    charactersByIds(ids: $ids){
        id
        name
        image
        species
        gender
    }
}
`;

export const useLikedCharacters = (ids) => {
    const { loading, error, data } = useQuery(GET_LIKED_CHARACTERS, {
        variables: {
            ids
        }
    });
    return {
        data,
        loading,
        error
    };
}