import React,{useState} from "react";
import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [show, handleshow] = useState(false)

    useEffect(()=>{
          
   window.addEventListener("scroll",()=>{
       if(window.scrollY  > 100){
        handleshow(true)
       } else handleshow(false)
   })
   
    return ()=>{
        window.removeEventListener("scroll", ()=>{});
    }
    },[])
  return (
    <>
      <div className={`nav  ${show   &&  "nav__black"}`}>
        <img
        className="nav__logo"
          src="data:image/png;base64,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"
          alt="Netflix Logo"
        />
        <img 
         className="nav__avatar"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC" alt="" />
      </div>
    </>
  );
};

export default Navbar;
