
import Card from "@/components/card";
import Image from "next/image";


export default function Home() {
  return (

    
    <div className="bgcolor">

     <div className="container">
        <Image src={"/beautiful house.png"} width={1100} height={440} alt="home"></Image>
      </div>

      <div className="image-text">
        <h1>WE love modern houses </h1>
        <p>Discover the perfect fusion of style,<br/>comfort, and functionality in our modern<br/>houses.Designed with the modern<br/>life style in mind</p>
      </div>
      <div>
        <h1 className="rec">Recommendations</h1>
      </div>
      

        <Card />
        
      </div>
    
  );
}
Home
