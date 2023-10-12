import Navigation from "./components/Navigation.components";
import GitHub from "./components/GitHub.components";
import Profile from "./components/Profile.components";
import Username from "./components/Username.components";
import Issues from "./components/Isssues.components";
import NotFound from "./components/NotFound.components";
import { Route ,Switch , Redirect} from 'react-router-dom';
import Marketplace from "./components/Marketplace.components";
import Cli_Arg from "./components/Cli-arg.components";
import Product from "./components/product.component";
import Repositories from "./components/Repositories.components";
import Facebook from "./components/facebook.components";



function App() {
  return (
    <>
     
      <Navigation />
      <Switch>
      
       
        <Route path='/github' render={(props)=> <GitHub selected={true} {...props}/>} />
        <Route path='/profile' component={Profile} />
        <Route path='/username/:Username?' component={Username} /> 
      
        
          <Route path='/issues' component={Issues} /> 
          <Route path='/repositories' component={Repositories} />
          <Route path='/facebook' component={Facebook} />
         
          <Route path='/marketplace' component={Marketplace} /> 
          <Route path='/cli_arg' component={Cli_Arg} /> 
          <Route path='/not-found' component={NotFound} />
          <Route exact path='/' component={GitHub} />
          <Redirect to='/not-found'  />
           {/* <Route path='/product/:id' component={Product} /> */}
      
      
      </Switch>
        
      
    </>
    
  );
}

export default App;
