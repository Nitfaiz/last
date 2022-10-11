import React from 'react'
import { NavLink } from 'react-router-dom'
import {GoHome} from "react-icons/go"
import {AiOutlineLineChart } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import {BiParagraph} from "react-icons/bi"
import {RiAdminFill} from "react-icons/ri"
import {MdSupervisorAccount} from "react-icons/md"
import {RiMastercardLine} from "react-icons/ri"
import {SiCampaignmonitor} from "react-icons/si"
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {BsTelegram} from "react-icons/bs"
import {MdOutlineSms} from "react-icons/md"
import {MdReportGmailerrorred} from "react-icons/md"
import {RiLogoutCircleRLine} from "react-icons/ri"
import {IoIosSettings} from "react-icons/io"
import {AiFillStar} from "react-icons/ai"
import {FaAddressBook} from "react-icons/fa"







const navData = [

  {navItem: "Overview", href: "/overview", Icon: GoHome},
  {navItem: "Sales", href: "/sales", Icon: AiOutlineLineChart},
  {navItem: "Customer", href: "/customer", Icon: FaRegHandshake},
  {navItem: "Lead", href: "/lead", Icon: BiParagraph},
  {navItem: "Admin", href: "/admin", Icon: RiAdminFill},
  {navItem: "Account", href: "/account", Icon: MdSupervisorAccount},
  {navItem: "Master", href: "/master", Icon: RiMastercardLine},
  {navItem: "Campaign", href: "/campaign", Icon: SiCampaignmonitor},
  {navItem: "Email", href: "/email", Icon: MdOutlineEmail},
  {navItem: "Whatsapp", href: "/whatsapp", Icon: AiOutlineWhatsApp},
  {navItem: "Telegram", href: "/telegram", Icon:BsTelegram },
  {navItem: "SMS", href: "/sms", Icon: MdOutlineSms},
  {navItem: "Report", href: "/report", Icon: MdReportGmailerrorred},
  {navItem: "Logout", href: "/", Icon: RiLogoutCircleRLine},
  {navItem: "Reviews", href: "/reviews", Icon: AiFillStar},
  {navItem: "Setting", href: "/setting", Icon: IoIosSettings},
  {navItem : "Address",href: "/address", Icon: FaAddressBook},
];




 function Dashboard () {
  let elm = {
    height:"40px"
  }
  return (
    <div className='third-page'>
      
        {/* <h2>HUNK</h2> */}
        <p> Logout</p>
    <nav className='navbar'>
  
       <ul className='category'>
        <img src='https://www.nit-infotech.com/wp-content/uploads/2020/03/nit-infotech.png' alt="errror" style={elm}/>
        {
          navData.map((nav) => {
            const { Icon } = nav;
            return <NavLink to={nav.href} className="navItem"><li className="list"><Icon />  <span className="nav-span">{nav.navItem}</span></li></NavLink>;
          })
        }  
       </ul>
     </nav>
     
     
   </div>
  )
}

export default Dashboard