import style from "@/styles/components/FeedbackForm.module.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function FeedbackForm() {
  const [result, setResult] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  return (
    <div className={style.container}>
      {!formSubmitted ? (
        <>
          <h2 className={style.header}>Fill out the Form Below!</h2>
          <form onSubmit={onSubmit} className={style.feedbackForm}>
            <input
              type="hidden"
              name="access_key"
              value="5e933c80-887b-4630-be66-817f5b1d647e"
            />
            <input type="hidden" name="from_name" value="Portfolio Feedback" />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />

            <label htmlFor="feed-name">
              Name
            </label>
            <input
              type="text"
              id="feed-name"
              name="name"
              placeholder="John Doe"
          
            />

            <label htmlFor="feed-email">Email</label>
            <input type="email" id="feed-email" name="email" placeholder="john@doe.com" />

            <label className={style.required} htmlFor="feed-comments">
              Comments
            </label>
            <textarea
              id="feed-comments"
              name="message"
              placeholder="e.g room for improvements"
              minLength={5}
              className={style.required}
              required
            ></textarea>

            <input type="submit" className={style.submitButton} />
          </form>
        </>
      ) : (
        <div className={style.apiResponse}>{result}</div>
      )}
    </div>
  );
}
