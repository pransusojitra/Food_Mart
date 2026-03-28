import React from 'react'
import photo1 from "../assets/ad-image-3.png"
import photo2 from "../assets/ad-image-4.png"

const Bestproduct = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column flex-lg-row g-3">

        <div className="col-12 col-lg-6">
          <div
            className="rounded-3 h-100"
            style={{
              backgroundColor: "#faece8",
              backgroundImage: `url(${photo1})`,
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              backgroundPositionY: "bottom",
              backgroundPositionX: "right",
              backgroundSize: "300px",
            }}>

            <div className="p-lg-5 p-md-5 p-3 h-100">
              <div className="mx-auto">
                <span className="fs-2">Upto 25% Off</span>
                <h2 className='fs-3 mt-2'>Luxa Dark Chocolate</h2>
                <p className="fw-semibold mb-0">Very tasty & creamy vanilla flavour creamy muffins.</p>
                <button className='sbx border border-1 rounded-2 border-black fs-5 mt-3'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div
            className="rounded-3 h-100"
            style={{
              backgroundColor: "#e6f3fa",
              backgroundImage: `url(${photo2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              minHeight: "300px",
              backgroundPositionY: "bottom",
              backgroundPositionX: "right",
              backgroundSize: "300px",
            }}>

            <div className="p-lg-5 p-md-5 p-3 h-100">
              <div className="mx-auto">
                <span className="fs-2">Upto 25% Off</span>
                <h2 className='fs-3 mt-2'>Creamy Muffins</h2>
                <p className="fw-semibold mb-0">Very tasty & creamy vanilla flavour creamy muffins.</p>
                <button className='sbx border border-1 rounded-2 border-black fs-5 mt-3'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Bestproduct
