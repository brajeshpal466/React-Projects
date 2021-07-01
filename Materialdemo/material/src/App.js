import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import './App.css';
import {PhotoCamera} from '@material-ui/icons'
function App() {
  return (
    < >
<CssBaseline/>
<AppBar>
  <Toolbar>
    <PhotoCamera></PhotoCamera>
    <Typography variant='h6'>
      Photo Album
    </Typography>
  </Toolbar>
</AppBar>
<main>
  <div>
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" color="textPrimary" getterBottom >Album Photo</Typography>
    </Container>
  </div>
</main>
    </>
  );
}

export default App;
