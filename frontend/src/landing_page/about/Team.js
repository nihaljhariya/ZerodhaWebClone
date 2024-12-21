import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted  "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3  text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p style={{ fontWeight: "500", fontSize: "15px", color: "#424242" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ fontWeight: "500", fontSize: "15px", color: "#424242" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ fontWeight: "500", fontSize: "15px", color: "#424242" }}>
            Playing basketball is his zen.
          </p>
          <p style={{ fontWeight: "500", fontSize: "15px", color: "#424242" }}>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>

        {/* People ends here */}
        <div></div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Nikhil.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Nikhil Kamath
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>
            Co-founder & CFO
          </h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                Nikhil is an astute and experienced investor, and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </p>
            </ul>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Kailash.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Dr. Kailash Nadh
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>CTO</h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </ul>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Venu.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Venu Madhav
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>COO</h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </p>
            </ul>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Hanan.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Hanan Delvi
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>CCO</h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                We take pride in the way we support our clients, and Hanan is
                responsible for this with his never ending flow of energy. He is
                the man behind many of our support initiatives that have helped
                us stay ahead of the game. A free thinker, Hanan can be seen
                posing as one in his free time.
              </p>
            </ul>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Seema.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Seema Patil
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>Director</h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                Seema who has lead the quality team since the beginning of
                Zerodha, is now a director. She is an extremely disciplined
                fitness enthusiast.
              </p>
            </ul>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Karthik.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Karthik Rangappa
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>
            Chief of Education
          </h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                Karthik "Guru" Rangappa single handledly wrote Varsity,
                Zerodha's massive educational program. He heads investor
                education initiatives at Zerodha and loves stock markets,
                classic rock, single malts, and photography.
              </p>
            </ul>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/Austin.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 style={{ fontSize: "20px", color: "#424242" }} className="mt-5">
            Austin Prakesh
          </h4>
          <h6 style={{ color: "#666666", fontSize: "15px" }}>
            Director Strategy
          </h6>
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              bio
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <p style={{ fontSize: "10px" }}>
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organisations
                including grow by optimizing revenue streams and creating growth
                strategies. He is a boxing enthusiast and loves collecting
                exquisite watches.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
