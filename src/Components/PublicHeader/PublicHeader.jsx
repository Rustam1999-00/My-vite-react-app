
import { Link } from "react-router-dom"


export const PublicHeader = () => {

    return (
        <header className="bg-dark py-3" >
            <div className="container">
                <div className="d-flex align-item-center">
                    <Link className='fs-4 text-light text-decoration-none' to='/'>LOGO</Link>
                    <Link to='/login' className="ms-auto btn btn-outline-primary">SING IN</Link>
                    <Link to='/register' className="ms-3 btn btn-outline-success">SING UP</Link>
                </div>

            </div>
        </header>
    )


}