import "./App.css";
import { Head } from "./compunent/a_head/head";
import { Ego } from "./compunent/b_ego/ego";
import { Crue } from "./compunent/c_crue/crue";
import { LogoContainer } from "./compunent/d_logoContainer/logoContainer";

function App() {
  return (
    <>
      <Head></Head>
      <Ego></Ego>
      <Crue></Crue>
      <LogoContainer></LogoContainer>
    </>
  );
}

export default App;
