import { makeStyles } from "tss-react/mui";

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
    
  },
  cardGrid:{
    padding:'20px 0'
  },
  card:{
    height:"100px",
    display:'flex',
    flexDirection:"column"
  },
  cardMedia:{
    paddingTop:'56.25%'
  },
  cardContent:{flexGrow:1,},
  footer:{backgroundColor: theme.palette.background.paper,
    padding:'50px 0'
  }
}));

export default useStyle;
