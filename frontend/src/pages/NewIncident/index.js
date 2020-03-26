import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        try {
            const data = { title, description, value };
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');

        } catch (error) {
            alert('Erro ao cadastrar incidente. Tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />

                    <h1>Cadsatrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft color="#e02041" size={16} />
                        Voltar pra home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />


                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
