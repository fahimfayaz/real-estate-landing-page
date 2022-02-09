import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProjectDetailGrid from '../Segments/projectDetailGrid';
import VideoInsta from '../Segments/Video-Insta';
import GoogleMaps from "simple-react-google-maps"
import LatestProjects from './../Segments/LatestProjects';

const imageBg = {
    height:'700px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
const imageBg2 = {
    height:'450px',
    width:'100%',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
  }
var img1 = require('./../../images/gallery/portrait/pic1.jpg');
var img2 = require('./../../images/gallery/portrait/pic3.jpg');

class ProjectDetailContent extends React.Component {
    
    render() {
        return (
            <>
            <div className="section-full bg-gray square_shape2 tm-about2-wrap">
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-6 col-md-6 p-l0">
                                    <div>
                                        <NavLink to={""}><img src={img1.default} alt="" style={imageBg}/></NavLink>   
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="font-40">At a glance</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Architect: Ar. Ehsan Khan (EK Architects)<br/><br/>
                                                                        Land Area: 45 katha<br/><br/>
                                                                        Orientation of Land: North-South<br/><br/>
                                                                        Front Road : 60 feet wide<br/><br/>
                                                                        Structural Consultant: Meinhardt (Singapore) Pte Ltd.<br/><br/>
                                                                        MEP Consultant: Meinhardt (Singapore) Pte Ltd.<br/><br/>
                                                                        Number of Stories: 40<br/><br/>
                                                                        Floor Area: 4,050 - 14,560sft/ Floor (approx.)<br/><br/>
                                                                        Number of Basements: 5<br/><br/>
                                        </p>
                                        {/*      */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WHO WE ARE SEGMENT */}
                <div className="section-full p-tb50 tm-about2-wrap" style={{backgroundColor:'#b0bfc6'}}>
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="p-t50">
                                        <NavLink to={""}><img src={img2.default} alt="" style={imageBg2}/></NavLink>                                                
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="m-about-containt text-uppercase text-black p-t30">
                                        {/* <span className="font-30 font-weight-300">About Us</span> */}
                                        <h2 className="text-white font-40">FEATURES & AMENITIES</h2>
                                        {/* <p><b>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</b></p> */}
                                        <p className="font-weight-200">Grand 45 Feet High Atrium Entrance<br/><br/>

                                                                        Elegantly Designed Reception Lobby<br/><br/>

                                                                        07 High-Speed International Brand Passenger Elevators & 01 Service/Fireman’s Elevator<br/><br/>

                                                                        11.5 Feet Floor to Floor Height<br/><br/>

                                                                        Efficiently Designed Floor Space Providing Maximum Flexibility for Interior Design<br/><br/>

                                                                        Professionally Designed Landscaping and Building Lighting (Using Only Energy-efficient LED Lighting)<br/><br/>

                                                                        Fully Equipped State-of-the-art Gym<br/><br/>

                                                                        Aesthetically Designed and Spacious Café at Ground Floor<br/><br/>
                                        </p>
                                        {/* <NavLink to={"/project-detail"} className="site-button black radius-no text-uppercase"><span className="font-12 letter-spacing-5"> Read More </span></NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ProjectDetailGrid/>
                <VideoInsta/>

                {/* {map location SEGMENT} */}
                <div className="section-full">
                    <div className="m-about-containt text-uppercase text-black p-tb20 m-lr60">
                        <h2 className="text-black font-40">Location</h2>
                    </div>
                    <div className="gmap-outline">
                    <GoogleMaps
                            apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                            style={{height: "660px", width: "100%"}}
                            zoom={15}
                            center={{lat: 23.791020785661722, lng: 90.40813192023626}}
                            markers={{lat: 23.791020785661722, lng: 90.40813192023626}} //optional
                            />
                    </div>
                </div>
                
                {/* {Book now SEGMENT} */}
                <div className="section-full p-tb50 tm-about2-wrap" style={{backgroundColor:'#b0bfc6'}}>
                    <div className="container" style={{width:'100%'}}>
                        <div className="section-content " >
                            <div className="row" >
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="p-t50">
                                        <NavLink to={""}><img src={img2.default} alt="" style={imageBg2}/></NavLink>                                                
                                    </div>
                                </div>
                                <div className="col-lg-1 col-md-6"></div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="comment-respond p-a30" id="respond" style={{width:"100%",backgroundColor:'#b0bfc6'}}>  
                                        <h1 className="font-weight-400 text-uppercase text-white">Book now</h1>                          
                                        <form className="form" action="" id="commentform" method="post">
                                                <p className="comment-form-author text-white">
                                                    <label htmlFor="name">Name<span className="required">*</span></label>
                                                    <input className="form-control" type="text" defaultValue={""} name="name" placeholder="Type your Full name" id="name" />
                                                </p>
                                                <p className="comment-form-url text-white">
                                                    <label htmlFor="email">Email ID</label>
                                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Type your email ID" id="email" />
                                                </p>
                                                <p className="comment-form-comment text-white">
                                                    <label htmlFor="Contact">Message</label>
                                                    <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </p>
                                                <p className="form-submit">
                                                    <button className="site-button black radius-no text-uppercase" type="button"><span className="font-12 letter-spacing-5">Submit</span></button>
                                                </p>
                                        </form>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LatestProjects />
            </>
        );
    }
};

export default ProjectDetailContent;