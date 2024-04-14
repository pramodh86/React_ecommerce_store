
import image1 from "../../images/home_image_1.png"
import image2 from "../../images/home_image_2.png"

function ImageGallary() {
  return (
    <section className="gallary" >
    <div className="container">
        <div className="gallary-image-main">
            <img src={image1} alt="" />
        </div>
        <div className="gallary-image-second">
            <img src={image2} alt="" />
            <p>The person who grew these was located in Central California and, er, hopefully very well-compensated.
            </p>
        </div>

    </div>

</section>
  )
}

export default ImageGallary