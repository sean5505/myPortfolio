import Modal from "../utils/Modal/Modal";
import style from "./FeedbackForm.module.scss";
import React, { useState } from "react";

export default function FeedbackForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "5e933c80-887b-4630-be66-817f5b1d647e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Your message has been sent!");
    } else {
      console.log("Error", res);
      setResult(res.message);
    }

    setFormSubmitted(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <button title="Feedback Form" onClick={() => openModal()}>
        Feedback
      </button>
      <Modal
        title="Feedback Form"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      >
        <div className={style.container}>
          {!formSubmitted ? (
            <>
              <form onSubmit={onSubmit} className={style.feedbackForm}>
                <input
                  type="hidden"
                  name="access_key"
                  value="5e933c80-887b-4630-be66-817f5b1d647e"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Portfolio Feedback"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />

                <label htmlFor="feed-name">Name</label>
                <input
                  type="text"
                  id="feed-name"
                  name="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="feed-email">Email</label>
                <input
                  type="email"
                  id="feed-email"
                  name="email"
                  placeholder="john@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className={style.required} htmlFor="feed-comments">
                  Comments
                </label>
                <textarea
                  id="feed-comments"
                  name="message"
                  placeholder="e.g room for improvements"
                  minLength={5}
                  className={style.required}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <div className={style.formActions}>
                  <button onClick={() => reset()}>Reset</button>
                  <button type="submit"> Submit </button>
                </div>
              </form>
            </>
          ) : (
            <div className={style.apiResponse}>{result}</div>
          )}
        </div>
      </Modal>
    </>
  );
}
