import React from 'react'
import '../Services/CTA.css'

function CTA() {
  return (
    <div>
        <div className="container-fluid">
  <div className="row">
    <div className="col-12">
              <div className="purplesection">
                {" "}
                <div className="container">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-md-8">
                      {" "}
                      <h2 style={{ textTransform: "uppercase" }}>
                        Choose TrueCare For Your Hospice Needs{" "}
                      </h2>{" "}
                      <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At deserunt corrupti voluptatum vitae consequuntur hic explicabo provident reiciendis dolor voluptate rem deleniti, aperiam, minima dolorum laudantium. Sed aliquam voluptas eius?
                      </p>
                      <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At deserunt corrupti voluptatum vitae consequuntur hic explicabo provident reiciendis dolor voluptate rem deleniti, aperiam, minima dolorum laudantium. Sed aliquam voluptas eius?
                      </p>{" "}
                    </div>{" "}
                    <div className="col-md-4">
        <div className="formwrap">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required /><br /><br />

            <label htmlFor="number">Number:</label>
            <input type="tel" id="number" name="number" required /><br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br /><br />

            <label htmlFor="help">How may we help you:</label>
            <textarea id="help" name="help" rows="4" required></textarea><br /><br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
                  </div>{" "}
                </div>{" "}
              </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default CTA