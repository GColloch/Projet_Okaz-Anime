import { useState } from "react";
import "../styles/components/formInput.scss";

const FormContact = () => {
  const [firstName, setFirstName] = useState("");
  const [sujet, setSujet] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    firstNameError: "",
    sujetError: "",
    emailError: "",
    messageError: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des champs non remplis
    let hasErrors = false;
    const newErrors = {};

    if (firstName.trim() === "") {
      newErrors.firstNameError = "Veuillez entrer votre prénom.";
      hasErrors = true;
    }

    if (sujet.trim() === "") {
      newErrors.sujetError = "Veuillez entrer l'objet de votre message.";
      hasErrors = true;
    }

    if (email.trim() === "") {
      newErrors.emailError = "Veuillez entrer votre email.";
      hasErrors = true;
    }

    if (message.trim() === "") {
      newErrors.messageError = "Veuillez entrer votre message.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Les champs sont valides, vous pouvez effectuer l'action d'envoi du formulaire ici
    console.log("Formulaire soumis avec succès !");
    // ... Autre logique de traitement du formulaire ...

    // Réinitialisation des champs et des erreurs après soumission réussie
    setFirstName("");
    setSujet("");
    setEmail("");
    setMessage("");
    setErrors({
      firstNameError: "",
      sujetError: "",
      emailError: "",
      messageError: ""
    });
  };

  return (
    <div className="containerform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname" className="labelContact">Prénom</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Votre prénom"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        {errors.firstNameError && (
          <span className="error">{errors.firstNameError}</span>
        )}

        <label htmlFor="sujet" className="labelContact">Sujet</label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          placeholder="L'objet de votre message"
          value={sujet}
          onChange={(event) => setSujet(event.target.value)}
        />
        {errors.sujetError && (
          <span className="error">{errors.sujetError}</span>
        )}

        <label htmlFor="emailAddress" className="labelContact">Email</label>
        <input
          id="emailAddress"
          type="email"
          name="email"
          placeholder="Votre email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.emailError && (
          <span className="error">{errors.emailError}</span>
        )}

        <label htmlFor="subject" className="labelContact">Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Votre message"
          style={{ height: "200px" }}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        {errors.messageError && (
          <span className="error">{errors.messageError}</span>
        )}

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default FormContact;
