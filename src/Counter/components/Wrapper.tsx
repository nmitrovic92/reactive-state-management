import NestedCounter from "./NestedCounter"
import RandomNumbers from "./RandomNumbers"

const Wrapper = () => {
  return (
    <div>
      Wrappper:
      <NestedCounter />
      <RandomNumbers />
    </div>
  )
}

export default Wrapper