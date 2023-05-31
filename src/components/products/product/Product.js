import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faBox, faBars} from "@fortawesome/free-solid-svg-icons";

const Product = ( {name, camera, estimatedFlightTime, controlKit, code, price, gps, isSale, isTop, imageUrl} ) => {
  
  return (
    <div className="product">
      <div className="product__img-container">
        <div className="product__labels">
          { isTop && 
            <div className="product__top">Top</div>
          }
          {
            isSale && 
            <div className="product__sale">Sale</div>
          }
        </div>
        <img className="product__img" src={imageUrl} alt="Drone image" />
        <a href=""><FontAwesomeIcon className="product__icon" icon={faScaleBalanced} /></a>
      </div>
      <p className="product__title">{`Agrodrone ${name}`}</p>
      <div className="product__details">
        <p className="product__camera">{`Camera: ${camera ? 'yes' : 'no'}`}</p>
        <p className="product__estimated-flight-time">{`Estimated flight time: ${estimatedFlightTime}min`}</p>
        <p className="product__gps">{`GPS: ${gps ? 'yes' : 'no'}`}</p>
        <p className="product__control-kit">{`Control kit: ${controlKit ? 'yes' : 'no'}`}</p>
        <p className="product__code">{`Product code: ${code}`}</p>
      </div>
      <div className="product__separator"></div>
      <div className="product__buying">
        <div className="product__pricing">
          {
            isSale ?
            <>
              <p className="product__real-price">{`$${price}`}</p>
              <p className="product__sale-price">{`$${price - (price * 0.2)}`}</p>
            </> 
            :
            <>
              <p className="product__price">{`$${price}`}</p>
            </>
          }
        </div>
        <div className="product__actions">
          <button className="btn-secondary">Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default Product;