import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faArrowRight,
  faCartPlus,
  faHeartCirclePlus,
  faMagic,
  faMedal,
  faPeopleGroup,
  faPlusSquare,
  faSpinner,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/bg.jpg";

function FindTeam() {
  const [showTeam, setShowTeam] = useState(false);

  const handleTeamClick = () => {
    setShowTeam(!showTeam);
  };

  return (
    <div className="container-fluid px-3 login findteam">
      <div className="row min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div className="mb-4">
              <h3 className="">Find a team for a game</h3>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faLocationArrow}
                      style={{
                        padding: "5px",
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Location</h5>
                    <p className="card-text text-muted">Up to 500m near you</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faPeopleGroup}
                      style={{
                        padding: "5px",
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Date and Time</h5>
                    <p className="card-text text-muted">May 7, 2023 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faMedal}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Sport</h5>
                    <p className="card-text text-muted">Football</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" onClick={handleTeamClick}>
              <div className="row g-0">
                <div className="col-md-2">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      className="fa-2x btn-social-icon"
                      icon={faMagic}
                      style={{
                        padding: "5px",
                        borderRadius: "12px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title mb-0">Your team</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          {/* Image */}
          <div className="pt-5 mt-5 pb-5">
            <img className="bg-image" src={bg} />
            <div className={`yourteam ${showTeam ? "show" : "hide"}`} >
              <div className="row justify-content-center">
                <div className="col-md-10 new-business-info mt-6">
                  <h3 className="text-white mb-4">Your team</h3>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <FontAwesomeIcon
                          className="fa-2x mt-4"
                          color="#ba4ab2"
                          icon={faUserPlus}
                          style={{
                            padding: "5px",
                            borderRadius: "12px",
                            backgroundColor: "#f5f5f5",
                          }}
                        />
                        <div className="py-5">
                          <h5
                            className="card-title mb-2"
                            style={{
                              color: "#ba4ab2",
                              fontWeight: "700",
                              fontSize: "1.5rem",
                            }}
                          >
                            Join
                          </h5>
                          <p className="card-text text-muted">
                            Join another team <br /> to get some fun
                          </p>
                        </div>
                      </div>
                      <div className="card-header">
                        <b>36 teams</b> are waiting
                      </div>
                    </div>
                    <div className={`card team-card`}>
                      <div className="card-body">
                        <FontAwesomeIcon
                          className="fa-2x mt-4"
                          color="#50b444"
                          icon={faHeartCirclePlus}
                          style={{
                            padding: "5px",
                            borderRadius: "12px",
                            backgroundColor: "#f5f5f5",
                          }}
                        />
                        <div className="py-5">
                          <h5
                            className="card-title mb-2"
                            style={{
                              color: "#50b444",
                              fontWeight: "700",
                              fontSize: "1..5rem",
                            }}
                          >
                            Create new
                          </h5>
                          <p className="card-text text-muted">
                            Invite your friends or wait <br /> for other players
                          </p>
                        </div>
                      </div>
                      <div className="card-header">
                        <b>315 players</b> are near you
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindTeam;
