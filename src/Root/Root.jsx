import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="mx-10">
                <Outlet></Outlet>
            </div>
            <br /><br />
            <Footer></Footer>
        </div>
    );
};

export default Root;