import Footer from "../../ui/blocks/body/Footer"
import Header from "../../ui/blocks/body/Header"
import Wrapper from "../../ui/blocks/body/Wrapper"
import Person from "../paths/Person"

function PersonRout():JSX.Element {
  return (
    <Wrapper>
      <Header />
      <Person />
      <Footer />
    </Wrapper>
  )
}

export default PersonRout