import React from "react";

export default function Delivery() {
return (
    <>
  <h3>Information about delivery</h3>
  <p style={{marginLeft: 10,
  marginRight: 10}}>
    Detailed information about delivery conditions. Delivery times are specified
    in working days (excluding the day of order submission). <br />The countdown for
    delivery starts from the moment the order status is changed to "Dispatched
    for delivery." <br />Order picking and packaging time ranges from 1 to 2 days. You
    can inquire about all delivery details from our operators by phone: +7(926)
    111-57-98.<br /> For orders totaling 30,000₽ or more, delivery is free of charge.
    Delivery within Moscow and Moscow Region: Courier delivery within the MKAD
    (Moscow Ring Road) <br />Delivery cost: starting from 360 rubles Delivery time:
    1-2 days Delivery hours: Mon-Sun from 10:00 AM to 8:00 PM Courier delivery
    outside MKAD up to 40 km: Delivery cost: 700 rubles + 40 rubles per km
    Delivery time: 1-2 days Delivery hours: Mon-Fri from 10:00 AM to 8:00 PM
    Courier delivery outside MKAD beyond 40 km: To be arranged with the operator<br />
    Delivery time: 1-2 days Delivery to Pickup Points: For a complete list and
    delivery conditions to Pickup Points in Moscow and Moscow Region, you can
    learn more &gt;&gt;here&lt;&lt;. <br />Other cities in Russia: Delivery to Pickup
    Points: You can find the nearest Pickup Point for yourself and learn about
    delivery conditions &gt;&gt;here&lt;&lt;.<br /> Delivery by Russian Post: Delivery
    cost: • from 450 rubles - for cash on delivery (payment upon receipt) • from
    270 rubles - for prepaid orders Delivery time: from 3 days Find the nearest
    Russian Post office and clarify its working hours &gt;&gt;here&lt;&lt;.<br /> VIEW
    SDEK OFFICE LOCATIONS EXCHANGE AND RETURNS In accordance with paragraphs 1
    and 3 of the "List of non-food goods of proper quality that are not subject
    to return or exchange for similar goods of other size, shape, dimensions,
    style, color, or configuration," approved by the Resolution of the
    Government of the Russian Federation dated January 19, 1998, No. 55, (as
    amended by Resolutions of the Government of the Russian Federation dated
    October 20, 1998, No. 1222, dated February 6, 2002, No. 81), goods purchased
    from our store are not subject to exchange and/or return. In case of
    discovering factory defects (which is extremely rare, but still happens),<br /> we
    will exchange the defective product for a similar one at our expense. In
    this case, you need to contact us with a request at +7 926-111-57-98.
  </p>
  
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



)


}