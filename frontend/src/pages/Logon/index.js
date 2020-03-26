import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';

export default function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const resposta = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', resposta.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua Id" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tem cadastro
                    </Link>
                </form>
            </section>

            <img src={HeroesImg} alt="Heroes" />
        </div>
    )
}
