import Link from "next/link"
import  "../style/footer.css";

function Footer () {
    return(
            <div>
        <footer className="footer"> 

         <div> 
            <h4>PAK REAL STATE</h4>
            <ul>
            <li> 104-C, 4th Floor, Main Khayaban-e-Ittehad,<br/>              Phase ll Ext. DHA Karachi, Pakistan.</li>
            <li>(+92-21)-353-881513</li>
            <li>info@pakrealestate.com</li>
            </ul>
        </div>

        <div>
            <h4>COMPANY</h4>
            <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Advertise with us</li>
            </ul>

        </div>

        <div>
            <h4>SERVICE</h4>
            <ul>
            <li>Find karachi agents</li>
            <li>Blog</li>
            <li>Maps</li>
            </ul>
        </div>
        </footer>

        </div>

    )
}
export default Footer