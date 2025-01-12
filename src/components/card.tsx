import Image from "next/image";
import Link from "next/link";


function Card() {
    return(
        <div className="card">
        <div className="image2">
      <Image src={"/home 2.jpg"} width={300} height={300} alt="home2"></Image>

      <h2>Banglow in DHA</h2>
      <h4>PKR   170,000</h4>
      <button className="color1">FOR SALE</button>

</div>
<div className="image3">
      <Image src={"/home 3.png"} width={300} height={300} alt="home3"></Image>

      <h2>Banglow in Karachi</h2>
      <h4>PKR   180,000</h4>
      <button className="color1">FOR SALE</button>
      </div>
      <div className="image4">

      <Image src={"/home4.png"} width={300} height={300} alt="home4"></Image>

      <h2>Banglow in DHA Lahore</h2>
      <h4>PKR   200,000</h4>
      <button className="color1">FOR SALE</button>

       
</div>
        </div>

    )
}
export default Card