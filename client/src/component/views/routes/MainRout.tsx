import Footer from "../../ui/blocks/body/Footer"
import Header from "../../ui/blocks/body/Header"
import Wrapper from "../../ui/blocks/body/Wrapper"
import Main from "../paths/Main"

function MainRout():JSX.Element {
  return (
     <Wrapper>
       <Header />
       <Main />
       <Footer />
     </Wrapper>
  )
}

export default MainRout