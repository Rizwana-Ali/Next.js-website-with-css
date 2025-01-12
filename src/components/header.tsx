import Link from "next/link";
import "../style/header.css";
import Image from "next/image";

function Header (){
    return(
        <div className="header-container">
          {/* left */}
          <div className="header-left">
            <Image src={"/logo.png"} width={80} height={80} alt="logo" className="logo"></Image>
            <h1 className="head">PAK REAl ESTATE</h1>
          </div>

          {/* right */}

          <div >
            <ul className="linking-parent">
                <li>
                    <Link className="link" href={"/"}>Home</Link>
                </li>

                <li >
                    <Link className="link" href={"/about"}>About</Link>
                </li>

                <li>
                    <Link className="link" href={"/contact"}>Contact</Link>
                    
                </li>

                
          

              <li className="btn1">Signup</li>

                <li className="btn2">Login</li>
                

            </ul>
            



          </div>

        </div>
    )
}
export default Header



































































































































































