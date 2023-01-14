import { Link } from "react-router-dom";

const MainPage = () => {
    return (
    <>
    <h1>Main Page</h1>
    <Link to='/contact' className="btn btn-primary">Contact</Link>
    </>
);}

export default MainPage