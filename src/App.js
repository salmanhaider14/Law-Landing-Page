import "./App.css";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaSearch,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

function App() {
  return (
    <div>
      <header id="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand ps-5" href="#header">
              <FaUser />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto me-auto   mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <a
                    class="nav-link active pe-5"
                    aria-current="page"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a
                    class="nav-link active pe-5"
                    aria-current="page"
                    href="#testimonel"
                  >
                    Testimonel
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a
                    class="nav-link active pe-5"
                    aria-current="page"
                    href="#testimonel"
                  >
                    About
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a
                    class="nav-link active pe-5"
                    aria-current="page"
                    href="#terms"
                  >
                    Terms
                  </a>
                </li>
              </ul>
              <FaSearch className="me-5" />
            </div>
          </div>
        </nav>
        <div className="header-container">
          <div className="header-content">
            <h1>
              Your Solution <br></br>Legal Consultacy
            </h1>
            <p>
              We are here to help you take care of your legality with the best
              service especially for you.
            </p>
            <button>Get Started</button>
          </div>
          <div className="header-img">
            <img src="/lawyer.png" alt="robot" />
          </div>
        </div>
      </header>
      <section id="stats">
        <ul>
          <li>
            <img src="/airbnb.png" width={200} alt="" />
          </li>
          <li>
            <img src="/hubspot.png" width={200} alt="" />
          </li>{" "}
          <li>
            <img src="/microsoft.png" width={200} alt="" />
          </li>{" "}
          <li>
            <img src="/google.png" width={200} alt="" />
          </li>
        </ul>
      </section>
      <section id="terms">
        <div className="terms-container">
          {" "}
          <div className="terms-content">
            <h1>
              Why do we help <br></br> with legalization?
            </h1>
            <p>
              We are here for UMKM in Indonesia to carry out the legalization
              process, which is sometimes complicated.
            </p>
          </div>
          <div className="terms-cards">
            <div className="term-card">
              <img src="/circle.png" alt="" />
              <h1>Enviromental Law</h1>
              <p>
                Environmental legal issues might occur since the planned
                business activities are designed
              </p>
            </div>{" "}
            <div className="term-card">
              <img src="/bag.png" alt="" />
              <h1>Corporate and Commercial</h1>
              <p>
                We provide a complete range of services for the continuity of
                your business activities.
              </p>
            </div>{" "}
            <div className="term-card">
              <img src="/rocket.png" alt="" />
              <h1>Information and Technology</h1>
              <p>
                IT not followed by the existing regulation which might cause
                legal uncertainty and business uncertainty.
              </p>
            </div>{" "}
            <div className="term-card">
              <img src="/circle.png" alt="" />
              <h1>Other Services</h1>
              <p>
                In dealing with disruptive economic and legal challenge, our
                firm also provide various legal services.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>
      <section id="achievement">
        <h1>Some count that matters</h1>
        <p>Our achievement in the journey depicted in numbers</p>
        <ul>
          <li>
            <img src="/2.png" width={200} alt="" />
          </li>
          <li>
            <img src="/3.png" width={200} alt="" />
          </li>{" "}
          <li>
            <img src="/4.png" width={200} alt="" />
          </li>{" "}
        </ul>
      </section>
      <section id="testimonel">
        <h1 className="text-center p-5">Clients Testimonial</h1>
        <div className="testimonel-cards">
          <div className="testimonel-card">
            <h1
              style={{ fontSize: "25px", color: "#151617", fontWeight: "500" }}
            >
              Incredible Experience
            </h1>
            <p>
              We had an incredible experience working with Landify and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the concept so quickly.
            </p>
            <img
              src="/client1.png"
              width={250}
              style={{ padding: "20px" }}
              alt=""
            />
          </div>{" "}
          <div className="testimonel-card">
            <h1
              className="testimonel-heading"
              style={{ fontSize: "20px", color: "#151617", fontWeight: "500" }}
            >
              Responsive and Professional Partner
            </h1>
            <p>
              Fermin Apps has collaborated with Landify team for several
              projects such as Photo Sharing Apps and Custom Social Networking
              Apps. The experience has been pleasant, professional and exceeding
              our expectations.
            </p>
            <img
              src="/client1.png"
              width={250}
              style={{ padding: "20px" }}
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h1>Complex Questions ? </h1>
            <p>
              Request for a personalized budget for your legal problem. We will
              send you a coupe options in 24 hours. You can have free consult ,
              if a our first customer
            </p>
            <button>
              {" "}
              <FaPhoneAlt
                style={{ fontSize: "18px", marginRight: "8px" }}
              />{" "}
              Call Now
            </button>
          </div>
          <img src="/contact.png" alt="" />
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#header">Overview</a>
                </li>
                <li>
                  <a href="#header">Features</a>
                </li>
                <li>
                  <a href="#header">Tutorials</a>
                </li>
                <li>
                  <a href="#header">Pricing</a>
                </li>
                <li>
                  <a href="#header">Releases</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#header">About</a>
                </li>
                <li>
                  <a href="#header">Press</a>
                </li>
                <li>
                  <a href="#header">Careers</a>
                </li>
                <li>
                  <a href="#header">Contact</a>
                </li>
                <li>
                  <a href="#header">Partners</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Support </h4>
              <ul>
                <li>
                  <a href="#header">Help Center</a>
                </li>
                <li>
                  <a href="#header">Terms Of Service</a>
                </li>
                <li>
                  <a href="#header">Legal</a>
                </li>
                <li>
                  <a href="#header">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#header">
                  <FaFacebook />
                </a>
                <a href="#header">
                  <FaTwitter />
                </a>
                <a href="#header">
                  <FaInstagram />
                </a>
                <a href="#header">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
