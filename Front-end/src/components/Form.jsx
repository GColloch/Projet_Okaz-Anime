import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the form data here
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={name} 
        onChange={(event) => setName(event.target.value)}
      />
  
      <label htmlFor="email">Email :</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
      />
  
      <label htmlFor="message">Message :</label>
      <textarea
        id="message" 
        name="message" 
        value={message} 
        maxLength={20}
        onChange={(event) => setMessage(event.target.value)}
      />
      <input type="submit" value="Envoyer" />
    </form>
    </div>
  )
}

export default Form;
