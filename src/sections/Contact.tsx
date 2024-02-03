"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { SectionTitle } from "@/components";
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
      className="brand-px flex h-[950px] flex-col items-center justify-evenly 
      overflow-y-hidden bg-brand-dark py-32"
    >
      {/* CALL TO ACTION */}
      <SectionTitle
        title="Interested in Working Together?"
        contentExtra="text-brand-light-dim"
        content="I look forward to contributing my skills to your projects. 
        Let's discuss how we can collaborate and create amazing things together."
      />

      {/* FORM */}
      <motion.form
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.5)}
        className="w-full max-w-4xl px-4 md:px-12"
      >
        {submitted ? (
          // SENT EMAIL
          <div
            className="flex flex-col items-center justify-center gap-8 py-20
              md:flex-row"
          >
            <h3
              className="text-center text-4xl font-bold uppercase 
                text-brand-light md:text-6xl"
            >
              Message Sent
            </h3>
            <div
              className="bg-brand-gradient flex h-16 w-16 items-center 
                justify-center rounded-full text-4xl text-brand-light"
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        ) : (
          <>
            {/* FORM CONTENT */}
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
              {["email", "subject", "message"].map((item) => {
                return (
                  <div
                    key={item}
                    className={`${
                      item === "message" ? "md:col-span-2" : ""
                    } relative`}
                  >
                    <div className="bg-brand-gradient absolute bottom-0 left-0 h-[1px] w-full" />
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
                        className="relative h-12 w-full bg-transparent uppercase tracking-wider 
                        text-brand-light outline-none focus:normal-case "
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
                        className="relative mt-8 h-24 w-full bg-transparent uppercase 
                        tracking-wider text-brand-light outline-none focus:normal-case md:h-36"
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
              className={`${
                disable ? "" : "hover:bg-brand-gradient"
              } brand-ease bg-brand-gradient-dim group  relative mt-8 w-full rounded-2xl py-8 text-2xl font-bold uppercase`}
            >
              <p
                className={`${
                  disable
                    ? ""
                    : "text-brand-light-dim group-hover:scale-110 group-hover:text-brand-light"
                } brand-ease relative flex items-center justify-center gap-4  `}
              >
                send a message
              </p>
            </button>
          </>
        )}
      </motion.form>
    </footer>
  );
}
