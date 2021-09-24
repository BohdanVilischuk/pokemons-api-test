const Image = ({src, alt, className}) => {
  return (
    <picture className={className}>
      <img src={src} alt={alt}/>
    </picture>
  )
}
export default Image;