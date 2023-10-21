"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useReducer, useState, useEffect } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ACTIONS = {
  UPDATE: "update",
  INFOCUS: "focus",
};

interface ActionProp {
  type: string;
  payload: {
    name: string;
    text?: string;
    value?: boolean;
  };
}

const INITIAL_STATE = {
  email: {
    content: "",
    inFocus: false,
  },
  subject: {
    content: "",
    inFocus: false,
  },
  message: {
    content: "",
    inFocus: false,
  },
};

function formReducer(state: typeof INITIAL_STATE, action: ActionProp) {
  switch (action.type) {
    case ACTIONS.UPDATE:
      const { name: key, text } = action.payload;

      return {
        ...state,
        [key]: {
          ...state[key as keyof typeof INITIAL_STATE],
          content: text,
        },
      };
    case ACTIONS.INFOCUS:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: {
          ...state[name as keyof typeof INITIAL_STATE],
          inFocus: value,
        },
      };

    default:
      return state;
  }
}

export default function Contact() {
  const [disable, setDisable] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    setSubmitted(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: state.email.content,
          subject: state.subject.content,
          message: state.message.content,
        }),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(`ERR:${error}`);
    }

    ["email", "subject", "message"].forEach((item) => {
      dispatch({
        type: item,
        payload: { name: item, text: "" },
      });
    });
  }

  useEffect(() => {
    const isDisable =
      state.email.content.length === 0 ||
      state.subject.content.length === 0 ||
      state.message.content.length === 0;
    setDisable(isDisable);
  }, [state.email.content, state.subject.content, state.message.content]);

  return (
    <footer
      id="contact"
      className="brand-ease bg-brand-dark/40 mt-24 flex min-h-screen flex-col
        items-center justify-evenly gap-8 overflow-y-hidden p-12 py-32 
        backdrop-blur-2xl lg:items-start lg:px-32 lg:py-24 lg:pt-56 xl:flex-row"
    >
      {/* CALL TO ACTION */}
      <div className="space-y-4 text-center sm:text-start">
        <h4 className="text-brand-gradient text-3xl font-bold uppercase">
          Interested in Working Together?
        </h4>
        <p
          className="brand-ease text-brand-light-60 w-full max-w-3xl text-xl font-light 
            tracking-wider md:text-2xl"
        >
          I look forward to contributing my skills to your projects. Don&apos;t
          Hesitate to contact me on{" "}
          <Link
            target="_blank"
            className="text-brand-light group relative font-bold"
            as={"https://www.linkedin.com/in/oluwatobi-matilukuro-657023263/"}
            href={"https://www.linkedin.com/in/oluwatobi-matilukuro-657023263/"}
          >
            LinkedIn
            <span
              className="bg-brand-gradient brand-ease absolute -bottom-[2px] 
                left-0 block h-[2px] w-1/2 group-hover:w-full"
            />
          </Link>{" "}
          to discuss how we can collaborate and create amazing things together.
        </p>
      </div>

      {/* FORM */}
      <motion.form
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.5)}
        className="brand-card bg-brand-background w-full max-w-4xl overflow-hidden"
      >
        {/* FORM HEADER */}
        <h4
          className="text-brand-light p-8 text-xl font-bold uppercase 
            md:px-12 md:py-6 md:text-3xl"
        >
          <span className="text-brand-gradient block text-xs md:text-base">
            I look forward to hearing from you
          </span>
          Send me a Message !
        </h4>

        {submitted ? (
          // SENT EMAIL
          <div
            className="flex flex-col items-center justify-center gap-8 py-20
              md:flex-row"
          >
            <h3
              className="text-brand-light text-center text-4xl font-bold 
                uppercase md:text-6xl"
            >
              Message Sent
            </h3>
            <div
              className="bg-brand-gradient text-brand-light flex h-16 w-16 
                items-center justify-center rounded-full text-4xl"
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        ) : (
          <>
            {/* FORM CONTENT */}
            <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-2 md:px-12">
              {["email", "subject", "message"].map((item) => {
                return (
                  <div
                    key={item}
                    className={`${
                      item === "message" ? "md:col-span-2" : ""
                    } relative`}
                  >
                    <div
                      className={`${
                        state[item as keyof typeof INITIAL_STATE].inFocus
                          ? "opacity-100"
                          : "opacity-0"
                      } bg-brand-gradient absolute left-1/2 top-1/2 h-[calc(100%+0.4rem)] 
                        w-[calc(100%+0.4rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg`}
                    />
                    {item !== "message" ? (
                      <input
                        required
                        placeholder={item}
                        autoComplete="true"
                        id={item === "email" ? "email" : "text"}
                        name={item === "email" ? "email" : "text"}
                        type={item === "email" ? "email" : "text"}
                        value={
                          state[item as keyof typeof INITIAL_STATE].content
                        }
                        onFocus={() =>
                          dispatch({
                            type: ACTIONS.INFOCUS,
                            payload: { name: item, value: true },
                          })
                        }
                        onBlur={() => {
                          dispatch({
                            type: ACTIONS.INFOCUS,
                            payload: { name: item, value: false },
                          });
                        }}
                        onChange={(e) =>
                          dispatch({
                            type: ACTIONS.UPDATE,
                            payload: { name: item, text: e.target.value },
                          })
                        }
                        className="border-brand-light/5 bg-brand-dark focus:text-brand-light-60 relative h-12 w-full 
                          rounded-lg border-2 px-6 text-xs uppercase outline-none md:text-sm"
                      />
                    ) : (
                      <textarea
                        required
                        id={item}
                        name={item}
                        value={state.message.content}
                        onFocus={() =>
                          dispatch({
                            type: ACTIONS.INFOCUS,
                            payload: { name: item, value: true },
                          })
                        }
                        onBlur={() => {
                          dispatch({
                            type: ACTIONS.INFOCUS,
                            payload: { name: item, value: false },
                          });
                        }}
                        onChange={(e) =>
                          dispatch({
                            type: ACTIONS.UPDATE,
                            payload: { name: item, text: e.target.value },
                          })
                        }
                        placeholder="type your message here"
                        className="border-brand-light/5 bg-brand-dark focus:text-brand-light-60 relative h-36 w-full rounded-lg 
                          border-2 p-6 text-xs uppercase tracking-wider outline-none md:h-56 md:text-sm"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* FORM BUTTON */}
            <button
              type="submit"
              disabled={disable}
              onClick={(e) => handleSubmit(e)}
              className="bg-brand-gradient-dimmer group relative mt-8 w-full py-8 text-2xl font-bold uppercase"
            >
              <div
                className={`${
                  disable ? "" : "group-hover:h-full"
                } bg-brand-gradient brand-ease absolute bottom-0 h-0 w-full`}
              />
              <p
                className={`${
                  disable ? "" : "group-hover:scale-125"
                } brand-ease text-brand-light relative flex items-center justify-center gap-4 `}
              >
                get in touch
                <Image
                  width={0}
                  height={0}
                  alt="live-icon"
                  src="/icon/icon-live.svg"
                  className="inline-block h-6 w-6"
                />
              </p>
            </button>
          </>
        )}
      </motion.form>
    </footer>
  );
}
