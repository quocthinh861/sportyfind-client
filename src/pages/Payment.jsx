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
          <section class="card booking-summary p-0">
            <div class="card-body">
              <header class="card-header">
                <h2 class="card-title">Your booking details</h2>
              </header>
              <div class="row">
                <div class="col-md-6">
                  <div class="card-date-range">
                    <div class="card-date-range-item">
                      <div class="card-date-label">Check-in</div>
                      <time class="card-date">
                        <span class="card-date-title">Fri 19 May 2023</span>
                        <span class="card-date-subtitle">From 15:00</span>
                      </time>
                    </div>
                    <div class="card-date-range-item">
                      <div class="card-date-label">Check-out</div>
                      <time class="card-date">
                        <span class="card-date-title">Thu 22 Jun 2023</span>
                        <span class="card-date-subtitle">Until 10:00</span>
                      </time>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card-group">
                    <div class="card-group-item font-weight-bold">
                      Total length of stay:
                    </div>
                    <div class="card-group-item font-weight-bold">
                      34 nights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="card card-price-details js-price-details e2e-price-details bleed-small">
            <div class="card-body">
              <header class="card-header mb-4">
                <h2 class="card-title">Your price summary</h2>
              </header>
              <div class="card-text price-details__total price-details__total--discount-breakdown price-details__total--discount-breakdown-with-bg">
                <div class="row">
                  <div class="col-md-6">
                    <div class="price-details__total-line price-details__total-line--user js-price-details__total-line--user e2e-price-details__total-line--user price-details__total-line--v-align-end">
                      <div class="price-details__charge-type">
                        <div class="price-details__total-price">Price</div>
                      </div>
                      <div class="text-right">
                        <div
                          class="price-details__total-price e2e-price-details__total-charge--user"
                          data-price="25024645.3636597"
                          data-currency-code="VND"
                          data-pd-total-usercurrency=""
                        >
                          <span
                            data-component="core/animate-price"
                            class=""
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
                  <div class="col-md-6">
                    <div class="text-right">
                      <div class="price-details__total--taxes-and-charges-info">
                        +VND&nbsp;575,539 taxes and charges
                      </div>
                      <div class="price-details__total--price-in-hotel-currency">
                        in property currency: 4,435&nbsp;zł
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-component="bp/price-summary/discount-breakdown-details"
                class="card-text price-details__taxes-and-benefits-block js-bp-price-details__taxes-and-benefits-block"
              >
                <header class="card-header mb-4">
                  <h2 class="card-title">Price information</h2>
                </header>
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          Includes VND&nbsp;1,853,677 in taxes and charges
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="d-flex">
                          <div class="flex-grow-1">8 % VAT</div>
                          <div>VND&nbsp;1,853,677</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3">
                          Excludes VND&nbsp;575,539 in taxes and charges
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="d-flex">
                          <div class="flex-grow-1">City tax</div>
                          <div>VND&nbsp 575,539</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3 e2e-price-details__currency-exchange-info">
                      This price is converted to show you the approximate cost
                      in VND. You'll pay in <b>zł</b>. The exchange rate may
                      change before you pay.
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 e2e-price-details__currency-exchange-info">
                      Bear in mind that your card issuer may charge you a
                      foreign transaction fee.
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button
                      type="button"
                      class="btn btn-tertiary btn-negative-inset-adjustment-top btn-negative-inset-adjustment-start btn-negative-inset-adjustment-bottom js-breakdown-details__toggle"
                    >
                      <span class="btn-text">Hide details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <div class="card bleed-small">
            <div class="card-body">
                <h1 className="card-header">Hình thức thanh toán</h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentBookingPage;
