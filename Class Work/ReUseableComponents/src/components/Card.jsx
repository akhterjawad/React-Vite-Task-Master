let Card = promps => {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={promps.src}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{promps.title}</h2>
          <p>{promps.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card