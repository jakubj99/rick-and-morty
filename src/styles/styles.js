import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
cardImage: {
minHeight: '10.5rem'
},
characterCard: {
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: '21rem',
  },
characterContainer: {
    spacing: 2,
    justifyContent: 'center'
}
}));

export default useStyles;