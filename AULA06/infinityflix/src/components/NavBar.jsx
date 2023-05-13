import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
    const [search, setSearch] = useState("");
    // criando objeto de redirecionamento (navigate)
    const navigate = useNavigate();

    // Criando função de busca do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // se a busca tiver vazia, para a função
        if (!search) {
            return
        }

        navigate(`/search?filme=${search}`)
        setSearch("");

    }
    return (
        <nav id="navbar">
            <h2>
                <BiCameraMovie />
                <Link to="/">Infiniflix</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar