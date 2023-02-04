import './index.css'

const ImageItem = props => {
  const {imageDetails, onImageClick} = props
  const {thumbnailUrl} = imageDetails

  const onButtonClick = () => {
    onImageClick(thumbnailUrl)
  }
  return (
    <li className="image-item">
      <button className="button" type="button" onClick={onButtonClick}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
