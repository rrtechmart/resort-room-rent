import { Outlet } from "react-router-dom";
import Navbar from "../component/Shared/Navbar/Navbar";
import Container from "../component/Shared/Container";


const Main = () => {
    return (
        <div>
            <Container> <Navbar/> </Container>
            <div>
                <Container> <Outlet/> </Container>
            </div>
            
        </div>
    );
};

export default Main;