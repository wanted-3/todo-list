import { UpperArrow } from '../assets/upperArrow.svg'

function BigButton({ text }) {
  return (
    <button type='button'>
      <span>{text}</span>
      <UpperArrow />
    </button>
  )
}

export default BigButton
