import {AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {IoLogoDiscord,IoCreateOutline} from 'react-icons/io5';
import {LuPieChart,LuLogOut} from 'react-icons/lu';
import { toast } from "react-toastify";
import axios from 'axios';

export const socialMedia=[
    {
        id:1,
        name:'github',
        icon:<AiFillGithub/>,
        link:'https://www.github.com'
    },
    {
        id:2,
        name:'twitter(x)',
        icon:<AiFillTwitterCircle/>,
        link:'https://www.x.com'
    },
    {
        id:3,
        name:'linkedin',
        icon:<AiFillLinkedin/>,
        link:'https://www.linkedin.com'
    },
    {
        id:4,
        name:'discord',
        icon:<IoLogoDiscord/>,
        link:'https://www.discord.com'
    },
]


export const navbarLinks=[
    {
        id:1,
        name:'dashboard',
        link:'/dashboard',
        icon:<LuPieChart/>
    },
    {
        id:2,
        name:'create new',
        link:'/create',
        icon:<IoCreateOutline/>
    },
    {
        id:3,
        name:'logout',
        link:'/entry',
        icon:<LuLogOut/>
    },
]

//notification react toastify 
  export const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
      autoClose: 2000,
    });

  export const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
    });
