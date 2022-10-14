export const Gif = ({ title, url}) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h6>{title}</h6>
    </div>
  )
}