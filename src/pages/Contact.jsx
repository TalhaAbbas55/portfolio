import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import emailJs from "@emailjs/browser";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const { alert, showAlert, hideAlert } = useAlert();
  console.log(alert, "aler");

  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => setCurrentAnimation("walk");

  const handleBlur = (e) => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setCurrentAnimation("hit");

    emailJs
      .send(
        import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Talha Abbas",
          to_email: "talhaabbas556989@gmail.com",
        },
        import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        showAlert({
          text: "Message sent successfully",
          type: "success",
          show: true,
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
        }, 2000);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setCurrentAnimation("idle");

        showAlert({
          text: "I didn't receive your message. Please try again",
          type: "danger",
          show: true,
        });
      });
  };
  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get In Touch</h1>
          <form
            className="w-full flex flex-col gap-7 mt-14"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="john"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="john@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                className="textarea"
                placeholder="Let me know how I can help you"
                required
                rows="4"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <div className="pb-4">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
