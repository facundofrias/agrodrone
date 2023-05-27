const Product = ( {name, camera, estimatedFlightTime, controlKit, code, price, gps, isSale, isTop, imageUrl} ) => {
  
  return (
    <div className="product">
      <img className="product__img" src={imageUrl} alt="Drone image" />
      <p className="product__title">{name}</p>
      <div className="product__details">
        <p className="product__camera">{`Camera: ${camera ? 'yes' : 'no'}`}</p>
        <p className="product__estimated-flight-time">{`Estimated flight time: ${estimatedFlightTime}min`}</p>
        <p className="product__gps">{`GPS: ${gps ? 'yes' : 'no'}`}</p>
        <p className="product__control-kit">{`Control kit: ${controlKit ? 'yes' : 'no'}`}</p>
        <p className="product__code">{`Product code: ${code}`}</p>
      </div>
      <div className="product__separator"></div>
      <div>
        <div>
          {
            isSale ?
            <>
              <p className="product__real-price">{price}</p>
              <p className="product__sale-price">{price - (price * 0.2)}</p>
            </> 
            :
            <>
              <p className="product__price">{price}</p>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Product;