import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ScrollToTop from './components/scrollToTop';
import Layout from './views/layout';


import Content from './components/content'
import Footer from './components/footer';
import Instructions from './components/stages/instructions';
import Stage1 from './components/stages/stage1';
import Stage2 from './components/stages/stage2';
import Stage3 from './components/stages/stage3';
import Stage4 from './components/stages/stage4';
import Stage5 from './components/stages/stage5';
import Stage6 from './components/stages/stage6';
import Stage7 from './components/stages/stage7';

const Wrapper = ({children}) => {
  return <Layout>{children}</Layout>
}
const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    {/* <CSSTransition key={location.key} classNames="slide" timeout={500}> */}
    {/* <CSSTransition key={location.key} timeout={{
                          enter: 1000,
                          exit: 1000,
                      }} classNames="my-node" unmountOnExit> */}
      <Switch location={location}>
        <Route exact path="/" component={Instructions} />
        <Route exact path="/all" component={Content} />
        <Route exact path="/stage1" component={Stage1} />
        <Route exact path="/stage2" component={Stage2} />
        <Route exact path="/stage3" component={Stage3} />
        <Route exact path="/stage4" component={Stage4} />
        {/* <Route exact path="/stage5" component={Stage5} /> */}
        <Route exact path="/stage6" component={Stage6} />
        <Route exact path="/stage7" component={Stage7} />
        <Route render={() => <h1 className="notfound">Not found!</h1>} />
      </Switch>
    {/* </CSSTransition> */}
  </TransitionGroup>
));


function App() {
  return (
    <>
      <BrowserRouter>
          <ScrollToTop>
          <Wrapper>
            <AnimatedSwitch />
            {/* <Switch>
        
              <Route exact path="/" component={Instructions} />
              <Route exact path="/all" component={Content} />
              <Route exact path="/stage1" component={Stage1} />
              <Route exact path="/stage2" component={Stage2} />
              <Route exact path="/stage3" component={Stage3} />
              <Route exact path="/stage4" component={Stage4} />
              <Route exact path="/stage5" component={Stage5} />
              <Route exact path="/stage6" component={Stage6} />
              <Route exact path="/stage7" component={Stage7} />
              <Route render={() => <h1 className="notfound">Not found!</h1>} />

            </Switch> */}
          </Wrapper>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
