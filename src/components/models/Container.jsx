import { oneOfType, array, element } from "prop-types"

export default function Container({ children }) {
  return (
    <div className="container">
      { children }
    </div>
  )
}

Container.propTypes = {
  children: oneOfType([ element, array ]),
}
