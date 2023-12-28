

export const Contact = () => {
  return (
    <div className="container mt-5" id='contact'>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contact Us</h2>

        {/* <!-- Contact Form --> */}
        <form>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" required/>
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" required/>
          </div>

          <div className="form-group">
            <label for="message">Message:</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

