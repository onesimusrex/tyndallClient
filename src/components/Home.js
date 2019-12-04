import React, { Component } from "react";



class Home extends Component {
    constructor(props) {
      super(props);
      this.state =  { 
      };
      // this.dbApiEvent = this.dbApiEvent.bind(this);
    }

    render (){
        return(
<g>
  <div className="body-overlay" />
  <div id="side-panel" className="dark">
    <div id="side-panel-trigger-close" className="side-panel-trigger">
      <a href="#">
        <i className="icon-line-cross" />
      </a>
    </div>
    <div className="side-panel-wrap" id="side-panel-wrap"></div>
  </div>
  {/* Document Wrapper
	============================================= */}
  <div id="wrapper" className="clearfix">
    
    {/* Header
		============================================= */}
    <header
      id="header"
      className="transparent-header full-header"
      data-sticky-class="not-dark"
    >
      <div id="header-wrap">
        <div className="container clearfix">
          <div id="primary-menu-trigger">
            <i className="icon-reorder" />
          </div>
          {/* Logo
					============================================= */}
          <div id="logo">
            
            <a
              href="http://localhost:3000/index.html"
              className="standard-logo"
              data-dark-logo="images/logo-dark.png"
            >
              <img src="images/logo.png" alt="Canvas Logo" />
            </a>
            <a
              href="http://localhost:3000/index.html"
              className="retina-logo"
              data-dark-logo="images/logo-dark@2x.png"
            >
              <img src="images/logo@2x.png" alt="Canvas Logo" />
            </a>
          </div>
          {/* #logo end */}
          {/* Primary Navigation
					============================================= */}
          <nav id="primary-menu" className>
            <ul>
              <li className="current">
                <a href="http://localhost:3000/index.html">
                  <div>Home</div>
                </a>
              </li>
              <li className="current">
                <a href="overview.html">
                  <div>Overview</div>
                </a>
                <ul>
                  <li>
                    <a href="overview.html">
                      <div>Introduction</div>
                    </a>
                  </li>
                  <li>
                    <a href="overview-context.html">
                      <div>Context</div>
                    </a>
                  </li>
                  <li>
                    <a href="overview-flightline.html">
                      <div>Flightline District</div>
                    </a>
                  </li>
                  <li>
                    <a href="overview-support.html">
                      <div>Support District</div>
                    </a>
                  </li>
                  <li>
                    <a href="overview-ammo.html">
                      <div>Ammo District</div>
                    </a>
                  </li>
                  <li>
                    <a href="overview-crooked-island.html">
                      <div>Crooked Island District</div>
                    </a>
                  </li>
                  <li>
                    <a href="overview-silver-flag.html">
                      <div>Silver Flag District</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="current">
                <a href="performance-standards.html">
                  <div>Performance Standards</div>
                </a>
              </li>
              <li className="current">
                <a href="design-intent.html">
                  <div>Design Intent</div>
                </a>
                <ul>
                  <li>
                    <a href="di-architectural.html">
                      <div>Architectural Image &amp; Character</div>
                    </a>
                    <ul>
                      <li>
                        <a href="di-architectural-types.html">
                          <div>Building Types &amp; Groups</div>
                        </a>
                        <ul>
                          <li>
                            <a href="di-architectural-types-g1.html">
                              <div>Group 1</div>
                            </a>
                          </li>
                          <li>
                            <a href="di-architectural-types-g2.html">
                              <div>Group 2</div>
                            </a>
                          </li>
                          <li>
                            <a href="di-architectural-types-g3.html">
                              <div>Group 3</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="di-site-land.html">
                      <div>Site &amp; Land Management</div>
                    </a>
                  </li>
                  <li>
                    <a href="di-coastal.html">
                      <div>Coastal Resilience</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mega-menu sub-menu">
                <a href="#" className="sf-with-ul side-panel-trigger">
                  <div>Technical Guidelines</div>
                </a>
                <div
                  className="mega-menu-content style-2 clearfix"
                  style={{ width: 1657, display: "none" }}
                >
                  <ul className="mega-menu-column col-lg-3" style={{}}>
                    <li className="mega-menu-title sub-menu">
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="technical-guidelines-div00.html">
                            <div>
                              Div. 00 - Procurement and Contracting Requirements
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="technical-guidelines-div01.html">
                            <div>Div. 01 - GENERAL REQUIREMENTS</div>
                          </a>
                        </li>
                        <li>
                          <a href="about-me.html">
                            <div>Div. 02 EXISTING CONDITIONS</div>
                          </a>
                        </li>
                        <li>
                          <a href="team.html">
                            <div>Div. 03 CONCRETE</div>
                          </a>
                        </li>
                        <li>
                          <a href="jobs.html">
                            <div>Div. 04 MASONRY</div>
                          </a>
                        </li>
                        <li>
                          <a href="side-navigation.html">
                            <div>Div. 05 METALS</div>
                          </a>
                        </li>
                        <li>
                          <a href="page-submenu.html">
                            <div>Div. 06 </div>
                          </a>
                        </li>
                        <li>
                          <a href="sitemap.html">
                            <div>Div. 07 </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3" style={{}}>
                    <li className="mega-menu-title sub-menu">
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="services.html">
                            <div>Div. 08</div>
                          </a>
                        </li>
                        <li>
                          <a href="services-2.html">
                            <div>Div. 09</div>
                          </a>
                        </li>
                        <li>
                          <a href="services-3.html">
                            <div>Div. 10</div>
                          </a>
                        </li>
                        <li>
                          <a href="faqs.html">
                            <div>Div. 11</div>
                          </a>
                        </li>
                        <li>
                          <a href="faqs-2.html">
                            <div>Div. 12</div>
                          </a>
                        </li>
                        <li>
                          <a href="faqs-3.html">
                            <div>Div. 13</div>
                          </a>
                        </li>
                        <li>
                          <a href="faqs-4.html">
                            <div>Div. 14</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3" style={{}}>
                    <li className="mega-menu-title sub-menu">
                      <ul style={{ display: "none" }}>
                        <li className>
                          <a href="full-width.html">
                            <div>Div. 21</div>
                          </a>
                        </li>
                        <li>
                          <a href="full-width-wide.html">
                            <div>Div. 22</div>
                          </a>
                        </li>
                        <li>
                          <a href="right-sidebar.html">
                            <div>Div. 23</div>
                          </a>
                        </li>
                        <li>
                          <a href="left-sidebar.html">
                            <div>Div. 25</div>
                          </a>
                        </li>
                        <li>
                          <a href="both-sidebar.html">
                            <div>Div. 26</div>
                          </a>
                        </li>
                        <li>
                          <a href="both-right-sidebar.html">
                            <div>Div. 27</div>
                          </a>
                        </li>
                        <li>
                          <a href="both-left-sidebar.html">
                            <div>Div. 28</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3" style={{}}>
                    <li className="mega-menu-title sub-menu">
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="login-register.html">
                            <div>Div. 31</div>
                          </a>
                        </li>
                        <li>
                          <a href="login-register-2.html">
                            <div>Div. 32</div>
                          </a>
                        </li>
                        <li>
                          <a href="login-register-3.html">
                            <div>Div. 33</div>
                          </a>
                        </li>
                        <li>
                          <a href="login-1.html">
                            <div>Div. 34</div>
                          </a>
                        </li>
                        <li>
                          <a href="login-2.html">
                            <div>Div. 35</div>
                          </a>
                        </li>
                        <li>
                          <a href="404.html">
                            <div>Div. 44</div>
                          </a>
                        </li>
                        <li>
                          <a href="404-2.html">
                            <div>Div. 48</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* Top Search
						============================================= */}
            <div id="top-search">
              
              <a href="#" id="top-search-trigger">
                <i className="icon-search3" />
                <i className="icon-line-cross" />
              </a>
              <form action="search.html" method="get">
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  defaultValue
                  placeholder="Type & Hit Enter.."
                />
              </form>
            </div>
            {/* #top-search end */}
            <div id="side-panel-trigger" className="side-panel-trigger">
              <a href="#">
                <i className="icon-reorder" />
              </a>
            </div>
          </nav>
          {/* #primary-menu end */}
        </div>
      </div>
    </header>
    {/* #header end */}
    {/* Slider
		============================================= */}
    <section
      id="slider"
      className="slider-element  swiper_wrapper full-screen clearfix"
    >
      <div className="slider-parallax-inner">
        <div className="swiper-container swiper-parent">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide dark"
              style={{ backgroundImage: 'url("images/Home/F-22-Raptors.jpg")' }}
            >
              <div className="container clearfix">
                <div
                  className="slider-caption slider-caption-center"
                  id="home-title-caption"
                >
                  <h2
                    data-animate="fadeInUp"
                    className="army-heading font-size-xs"
                    id="home-title"
                  >
                    Tyndall Air Force base
                  </h2>
                  <h3
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay={200}
                    id="home-sub-title"
                  >
                    Installation of the Future
                  </h3>
                  <div style={{ display: "none" }}>
                    <input
                      className="form-control form-control-lg mb-2"
                      type="text"
                      placeholder=".form-control-lg"
                    />
                    <a href="#" className="button button-xlarge tright">
                      Quick Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-arrow-left">
            <i className="icon-angle-left" />
          </div>
          <div className="slider-arrow-right">
            <i className="icon-angle-right" />
          </div>
        </div>
        <a
          href="#"
          data-scrollto="#content"
          data-offset={100}
          className="dark one-page-arrow"
        >
          <i className="icon-angle-down infinite animated fadeInDown" />
        </a>
      </div>
    </section>
    {/* Content
		============================================= */}
    <section id="content">
      <div className="content-wrap notoppadding nobottompadding">
        <div className="container-fluid clearfix bgcolor-primary">
          <div className="container">
            <div className="row clearfix">
              <div className="col-xl-12 center topmargin bottommargin-lg">
                <p className="lead font-color-white">
                  The Tyndall Air Force Base (AFB) Installation Facilities
                  Standards (IFS) rebuild was developed with the intended
                  purpose of providing design guidance to support the rebuild of
                  Tyndall AFB after the devastation of Hurricane Michael and
                  specifically address the vertical and horizontal Military
                  Construction (MILCON) program for the rebuild. Clearly
                  articulate the additions of sustainability, resilience, and
                  smart technology actions that clarify or exceed baseline U.S.
                  Department of Defense (DoD), Unified Facilities Criteria
                  (UFC), and other requirements. Plus provide “guardrails” for
                  the rebuild without inhibiting innovation and creativity. This
                  will expedite the design phases of the rebuild by
                  consolidating design guidelines and intent in a single
                  resource and specify guidelines that enable the Installation
                  of the Future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container clearfix" style={{ marginTop: "-80px" }}>
          <div className="col_one_third">
            <div className="card home-goals-cards">
              <div className="card-body">
                <div className="bottommargin-sm">
                  
                  <a href="#">
                    <img
                      className="image_fade"
                      src="images/Home/Resiliency.png"
                      alt="Image"
                    />
                  </a>
                </div>
                <h3>Resiliency</h3>
                <p className="card-text">
                  Tyndall Air Force Base’s Resiliency to multiple natural and
                  man-made threats is framed in the Air Force’s doctrinally
                  based “Five Rs” of Resiliency. The five defining elements of
                  its resiliency are: Redundant, Robust, Resourceful, Recovery
                  and Responsive.
                </p>
              </div>
              <div className="card-footer no-bgcolor no-borders">
                <a
                  href="#"
                  className="btn btn-primary bgcolor-primary border-blue-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col_one_third">
            <div className="card home-goals-cards">
              <div className="card-body">
                <div className="bottommargin-sm">
                  
                  <a href="#">
                    <img
                      className="image_fade"
                      src="images/Home/Sustainability.png"
                      alt="Image"
                    />
                  </a>
                </div>
                <h3>Sustainability</h3>
                <p className="card-text">
                  Installation of the Future will be designed, constructed, and
                  operated with sustainable features as unifying priorities for
                  all horizontal and vertical efforts. It will incorporate
                  criteria from a variety of proven strategies, including best
                  practices from private sector and DoD agencies.
                </p>
              </div>
              <div className="card-footer no-bgcolor no-borders">
                <a
                  href="#"
                  className="btn btn-primary bgcolor-primary border-blue-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col_one_third col_last">
            <div className="card home-goals-cards">
              <div className="card-body">
                <div className="bottommargin-sm">
                  
                  <a href="#">
                    <img
                      className="image_fade"
                      src="images/Home/Smart.png"
                      alt="Image"
                    />
                  </a>
                </div>
                <h3>Smart</h3>
                <p className="card-text">
                  Smart building technologies shall be employed to collect,
                  display, record, analyse, and disseminate information, and
                  provide centralized visibility and communication of monitored
                  building and utility subsystems in a uniform,secure and
                  affordable manner.
                </p>
              </div>
              <div className="card-footer no-bgcolor no-borders">
                <a
                  href="#"
                  className="btn btn-primary bgcolor-primary border-blue-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="section topmargin nobottommargin nobottomborder">
          <div className="container clearfix">
            <div className="heading-block center nomargin">
              <h3>Design</h3>
            </div>
            <p className="topmargin-sm center">
              This rebuild design intent chapter of the Tyndall Air Force Base
              (AFB) Installation Facilities Standards (IFS) defines the
              Architectural Image and Character, Site and Land Management, and
              Coastal Resilience principles that define the guidance for Tyndall
              AFB to become the Installation of the Future.
            </p>
            <div className="clear" />
            <div className="card">
              <div className="container nopadding nomargin">
                <div
                  className="col_one_third  nomargin"
                  style={{ padding: 20 }}
                >
                  <div className>
                    <h2>Architectural</h2>
                  </div>
                  <p className="lead" style={{ fontSize: 18, lineHeight: 28 }}>
                    The architectural character developed over the past century
                    in the region surrounding Tyndall AFB is based on functional
                    responses to the coastal environment and the available
                    resources.
                  </p>
                  <a
                    href="#"
                    className="button button-border button-dark button-rounded noleftmargin topmargin-sm"
                  >
                    Learn more
                  </a>
                </div>
                <div className="col_two_third col_last nomargin">
                  <div
                    style={{ position: "relative" }}
                    className="ohidden"
                    data-height-xl={390}
                    data-height-lg={390}
                    data-height-md={390}
                    data-height-sm={390}
                    data-height-xs={390}
                  >
                    
                    <img
                      src="images/Home/Architectural_Image_Character.jpg"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      data-animate="fadeInUp"
                      data-delay={100}
                      alt="Chrome"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="clear bottommargin" />
            <div className="card">
              <div className="container nopadding nomargin">
                <div className="col_two_third nomargin">
                  <div
                    style={{ position: "relative" }}
                    className="ohidden"
                    data-height-xl={390}
                    data-height-lg={390}
                    data-height-md={390}
                    data-height-sm={390}
                    data-height-xs={390}
                  >
                    
                    <img
                      src="images/Home/site_and_landscape.jpg"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      data-animate="fadeInUp"
                      data-delay={100}
                      alt="Chrome"
                    />
                  </div>
                </div>
                <div
                  className="col_one_third col_last nomargin"
                  style={{ padding: 20 }}
                >
                  <div className>
                    <h2>Site &amp; Land</h2>
                  </div>
                  <p className="lead" style={{ fontSize: 18, lineHeight: 28 }}>
                    The Installation is a combination of developed and natural
                    areas located on a peninsula that is bisected by U.S.
                    Highway 98. The Installation is approximately 18 miles long
                    and 3 miles wide, and is surrounded by East Bay, St. Andrew
                    Bay, and the Gulf of Mexico to the north, west, and south.
                  </p>
                  <a
                    href="#"
                    className="button button-border button-dark button-rounded noleftmargin topmargin-sm"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="clear bottommargin" />
            <div className="card">
              <div className="container nopadding nomargin">
                <div
                  className="col_one_third  nomargin"
                  style={{ padding: 20 }}
                >
                  <div className>
                    <h2>Coastal Resilience</h2>
                  </div>
                  <p className="lead" style={{ fontSize: 18, lineHeight: 28 }}>
                    The coastal habitats includes sand dunes, beaches, bayous,
                    and tidal marshes. The Installation covers approximately
                    30,000 acres, including pine forests, coastal habitats,
                    wetlands, and improved land.
                  </p>
                  <a
                    href="#"
                    className="button button-border button-dark button-rounded noleftmargin topmargin-sm"
                  >
                    Learn more
                  </a>
                </div>
                <div className="col_two_third col_last nomargin">
                  <div
                    style={{ position: "relative" }}
                    className="ohidden"
                    data-height-xl={390}
                    data-height-lg={390}
                    data-height-md={390}
                    data-height-sm={390}
                    data-height-xs={390}
                  >
                    
                    <img
                      src="images/Home/Coastal_Resilience.jpg"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      data-animate="fadeInUp"
                      data-delay={100}
                      alt="Chrome"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div
          className="section parallax dark notopmargin nobottommargin"
          style={{
            backgroundImage: 'url("images/Home/Footer-image@2x.jpg")',
            padding: "100px 0"
          }}
          data-bottom-top="background-position:0px 300px;"
          data-top-bottom="background-position:0px -300px;"
        >
          <div className="heading-block center">
            <h3>Resiliency and Sustainability at Tyndall</h3>
          </div>
          <div
            className="fslider testimonial testimonial-full"
            data-animation="fade"
            data-arrows="false"
          >
            <div className="flexslider">
              <div className="slider-wrap">
                <div className="slide">
                  <div className="testi-image">
                    
                    <a href="#">
                      <img
                        src="images/testimonials/3.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <h3>Robustness</h3>
                    <p>
                      Extent to which a system can absorb an impact or prevent
                      the impact from spreading to other parts of the system.
                    </p>
                  </div>
                </div>
                <div className="slide">
                  <div className="testi-image">
                    
                    <a href="#">
                      <img
                        src="images/testimonials/2.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Natus voluptatum enim quod necessitatibus quis expedita
                      harum provident eos obcaecati id culpa corporis molestias.
                    </p>
                    <div className="testi-meta">
                      
                      Collis Ta'eed <span>Envato Inc.</span>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="testi-image">
                    
                    <a href="#">
                      <img
                        src="images/testimonials/1.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Incidunt deleniti blanditiis quas aperiam recusandae
                      consequatur ullam quibusdam cum libero illo rerum!
                    </p>
                    <div className="testi-meta">
                      
                      John Doe <span>XYZ Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* #content end */}
    {/* Footer
		============================================= */}
    <footer id="footer" className="dark" style={{ height: 80 }}>
      <div className="container">
        {/* Footer Widgets
				============================================= */}
        {/* .footer-widgets-wrap end */}
      </div>
      {/* Copyrights
			============================================= */}
      <div id="copyrights" className="nobottompadding">
        <div className="container clearfix"></div>
      </div>
      {/* #copyrights end */}
    </footer>
    {/* #footer end */}
  </div>
  {/* #wrapper end */}
  {/* Go To Top
	============================================= */}
  <div id="gotoTop" className="icon-angle-up" />
</g>
        );
    }

}

export default Home;