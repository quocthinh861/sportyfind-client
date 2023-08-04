import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PaymentBookingPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle payment booking logic here
  };

  return (
    <Container>
      <Row>
        <Col>
          <section className="card booking-summary p-0">
            <div className="card-body">
              <header className="card-header">
                <h2 className="card-title">Your booking details</h2>
              </header>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-date-range">
                    <div className="card-date-range-item">
                      <div className="card-date-label">Check-in</div>
                      <time className="card-date">
                        <span className="card-date-title">Fri 19 May 2023</span>
                        <span className="card-date-subtitle">From 15:00</span>
                      </time>
                    </div>
                    <div className="card-date-range-item">
                      <div className="card-date-label">Check-out</div>
                      <time className="card-date">
                        <span className="card-date-title">Thu 22 Jun 2023</span>
                        <span className="card-date-subtitle">Until 10:00</span>
                      </time>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-group">
                    <div className="card-group-item font-weight-bold">
                      Total length of stay:
                    </div>
                    <div className="card-group-item font-weight-bold">
                      34 nights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="card card-price-details js-price-details e2e-price-details bleed-small">
            <div className="card-body">
              <header className="card-header mb-4">
                <h2 className="card-title">Your price summary</h2>
              </header>
              <div className="card-text price-details__total price-details__total--discount-breakdown price-details__total--discount-breakdown-with-bg">
                <div className="row">
                  <div className="col-md-6">
                    <div className="price-details__total-line price-details__total-line--user js-price-details__total-line--user e2e-price-details__total-line--user price-details__total-line--v-align-end">
                      <div className="price-details__charge-type">
                        <div className="price-details__total-price">Price</div>
                      </div>
                      <div className="text-right">
                        <div
                          className="price-details__total-price e2e-price-details__total-charge--user"
                          data-price="25024645.3636597"
                          data-currency-code="VND"
                          data-pd-total-usercurrency=""
                        >
                          <span
                            data-component="core/animate-price"
                            className=""
                            data-value="25024645.3636597"
                            data-currency="VND"
                            data-precision=""
                            data-animate-price-group-name="bp_user_total_price"
                            data-animation-speed="0.7"
                            style={{
                              display: "inline-block",
                              transform: "none",
                            }}
                          >
                            VND&nbsp;25,024,645
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-right">
                      <div className="price-details__total--taxes-and-charges-info">
                        +VND&nbsp;575,539 taxes and charges
                      </div>
                      <div className="price-details__total--price-in-hotel-currency">
                        in property currency: 4,435&nbsp;zł
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-component="bp/price-summary/discount-breakdown-details"
                className="card-text price-details__taxes-and-benefits-block js-bp-price-details__taxes-and-benefits-block"
              >
                <header className="card-header mb-4">
                  <h2 className="card-title">Price information</h2>
                </header>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          Includes VND&nbsp;1,853,677 in taxes and charges
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex">
                          <div className="flex-grow-1">8 % VAT</div>
                          <div>VND&nbsp;1,853,677</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          Excludes VND&nbsp;575,539 in taxes and charges
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-flex">
                          <div className="flex-grow-1">City tax</div>
                          <div>VND&nbsp 575,539</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3 e2e-price-details__currency-exchange-info">
                      This price is converted to show you the approximate cost
                      in VND. You'll pay in <b>zł</b>. The exchange rate may
                      change before you pay.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 e2e-price-details__currency-exchange-info">
                      Bear in mind that your card issuer may charge you a
                      foreign transaction fee.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-tertiary btn-negative-inset-adjustment-top btn-negative-inset-adjustment-start btn-negative-inset-adjustment-bottom js-breakdown-details__toggle"
                    >
                      <span className="btn-text">Hide details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <div className="card bleed-small">
            <div className="card-body">
                <h1 className="card-header">Hình thức thanh toán</h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentBookingPage;
