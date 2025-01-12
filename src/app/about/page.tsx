import Image from "next/image";




function About (){
    return(
        <div className="color">
           
        <span> <h1 className="about">About us</h1></span> 

            <div className="flex1">
        

        <Image src={"/interior.png"} width={400} height={200} alt="home"></Image>
        
        <div>
        <h2 className="text1">Welcome to<br/> Pak Real State</h2> 

        <p className="align">We are your premier destinat,ion for <br/>finding your dream home. Our experts have years of experience in real state, <br/>commited to delivering exceptional service.</p>
        </div>

        </div>

        
        

        <div className="flex2">
      <Image src={"/interior2.png"} width={400} height={200} alt="home"></Image>
      </div>
      <div className="right">
      <h2 className="text2">Our Mission</h2>
      <p>Our mission is Empowering you <br/>to findyour ideal home through<br/> accurate listings in depth property <br/>details, and market insides. We<br/> build communities and create memories.</p>
        </div>

    


        </div>
    )
}
export default About
