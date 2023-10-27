import { useState } from 'react';

function contactForm(props){
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    setInput('');
}


export default contactForm