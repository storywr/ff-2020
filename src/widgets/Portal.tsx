import ReactDOM from 'react-dom'

interface Props {
  target?: HTMLElement
}

const Portal: React.FC<Props> = ({ children, target = document.body }) => (
  ReactDOM.createPortal(children, target)
)

export default Portal
