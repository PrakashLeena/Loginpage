import { useLocation } from "react-router-dom";
function Landing()
{
    const data = useLocation()
    return(<h1>Hello {data.state.user}</h1>)
}

export default Landing;