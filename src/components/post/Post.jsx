
const Post = (props)=>{
  return (
    <div className="card">
       <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="card-link">Card link</a>
      </div>
</div>
  )
}

export default Post