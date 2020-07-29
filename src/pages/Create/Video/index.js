import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CreateVideo() {
    return (
        <PageDefault>
            <h1>Cadastro de video</h1>
            <Link to="/create/category">Cadastrar categoria</Link>
        </PageDefault>
    )
}

export default CreateVideo;