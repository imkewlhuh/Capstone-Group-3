import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div div className='home-greeting container'>
            <h1>Welcome!</h1>
            <Outlet />
            </div>
    )
}

export default Home