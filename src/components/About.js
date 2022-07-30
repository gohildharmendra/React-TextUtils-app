import React from 'react'

export default function About() {
  return (
    <>
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Gohil Dharmendra</h1>
        <p className="lead">This TextUitls Website Design and Develop for easy way to your text to converted to multiple choices like Text-to-UpperCase, Text-to-LowerCase, Text-to-TitleCase, Remove multiple extra-spaces in text value alse count input text how many words,Characters and Reading Time calculation, very easy to use.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-success btn-lg px-4 me-md-2 fw-bold">Check My Github Repository</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Show Resume</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="My_Photo.png"  alt="" width="450" />
      </div>
    </div>
  </div>
    </>
  )
}
