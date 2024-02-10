import {Netflix_logo_Image_Url } from "../util/Url"

const Header = () => {
  return (
    <div  style={{padding:'5px',position:'absolute'}}>
     <img src={Netflix_logo_Image_Url} width={80} height={80} style={{borderRadius:'50%'}} alt="Logo" ></img>
    </div>
  )
}

export default Header
