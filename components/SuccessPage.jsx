import React from "react";

export default function SuccessPage() {
  return (
    <>
      <h1>Thank you!</h1>
      <p>You order successfully placed</p>
      <footer className="container py-5 footer">
        <hr />
        <div className="row pt-4">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-asterisk"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg>
            <small className="d-block mb-3 text-muted">© 2017-2021</small>
          </div>
          <div className="col-6 col-md fs15">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md fs15">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md fs15">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
