

function ProductDescription() {

  const currentDate = new Date();
  return (
    <section className="product-main-header" >
        <div className="container">
            <div className="product-header">
                <h2>Produce</h2>
                <h3><span>Fresh</span> - {currentDate.toLocaleDateString()} </h3>
            </div>
            <div className="product-btn-list">
                <a className="btn-anchor product-btn-one" href="#">Default</a>
                <a className="btn-anchor-non-default product-btn-two" href="#">A-Z</a>
                <a className="btn-anchor-non-default product-btn-three" href="#">List View</a>
            </div>

        </div>


    </section>
  )
}

export default ProductDescription