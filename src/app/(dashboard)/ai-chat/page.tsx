"use client";
import Image from "next/image";
import { useState } from "react";

interface Message {
  sender: "user" | "assistant";
  text: string;
}

const AIChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    const thinkingMessage: Message = {
      sender: "assistant",
      text: "Thinking...",
    };

    // Add both user and assistant placeholder at once
    setMessages((prev) => [...prev, userMessage, thinkingMessage]);
    setInput("");

    // Replace assistant's placeholder after delay
    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          sender: "assistant",
          text: "Thanks for your question. I am getting back to you later",
        };
        return updated;
      });
    }, 1500);
  };

  return (
    <>
      <div className="flex h-[93%] overflow-hidden gap-[1%]">
        {/* Chat Area */}
        <div className="flex flex-col flex-1 p-6 bg-background-primary rounded-2xl border border-gray-secondary">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 mb-4 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "assistant" && (
                  <img
                    src="images/dashboard/ai-avatar.png"
                    alt="AI Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}

                <div
                  className={`max-w-xl p-4 rounded-lg border border-gray-secondary ${
                    msg.sender === "user"
                      ? "bg-orange-100 text-gray-900"
                      : "bg-gray-100 text-gray-primary"
                  }`}
                >
                  <p className="text-sm leading-7">{msg.text}</p>
                </div>

                {msg.sender === "user" && (
                  <img
                    src="images/dashboard/avatar.png"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-secondary pt-4"></div>
          <h3 className="font-semibold text-gray-primary mb-3">Try asking:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "What career path is right for me?",
              "How long will it take to complete a Computer Science degree?",
              "What are the prerequisites for Data Analytics programs?",
              "What's the job outlook for UX designers?",
            ].map((q, idx) => (
              <button
                key={idx}
                className="px-5 py-4 text-sm bg-white hover:bg-gray-secondary cursor-pointer border border-gray-secondary rounded-lg text-black-primary"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center mt-4 border border-gray-secondary rounded-lg px-3 py-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about your academic journey..."
              className="flex-1 outline-none text-sm text-gray-700"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="flex items-center gap-2 ml-2 bg-orange-primary cursor-pointer hover:bg-orange-600 text-base text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>

          <div className="flex justify-between mt-6 text-sm gap-4">
            <div className="flex-1 bg-[linear-gradient(159deg,#FFF_13.91%,#FBF0EA_106.7%)] px-[18px] py-6 flex items-center gap-3 rounded-xl">
              <div className="w-11 h-11 rounded-full bg-[#FFC1FC] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M16.5 7.83366C14.9681 7.25807 13.0637 6.91699 11 6.91699C8.93633 6.91699 7.03195 7.25807 5.5 7.83366"
                    stroke="#272727"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.38818 7.83301L5.71949 6.53819C5.18893 5.51083 4.92364 4.99714 5.09071 4.54312C5.25779 4.0891 5.77192 3.92657 6.80016 3.6015L10.4399 2.45084C10.6884 2.37229 10.8127 2.33301 10.9401 2.33301C11.0676 2.33301 11.1919 2.37229 11.4403 2.45084L15.3251 3.67898C16.2514 3.97179 16.7145 4.1182 16.8911 4.52921C17.0677 4.94024 16.878 5.43007 16.4986 6.40974L15.9473 7.83301"
                    stroke="#272727"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.41602 7.83301V9.41441C6.41602 11.0582 7.26071 12.5815 8.64124 13.4272L9.11287 13.7162C10.274 14.4275 11.7247 14.4275 12.8858 13.7162L13.3575 13.4272C14.738 12.5815 15.5827 11.0582 15.5827 9.41441V7.83301"
                    stroke="#272727"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.7507 13.333L14.6673 16.083M14.6673 16.083L13.4126 17.1788C12.2632 18.1826 11.6885 18.6845 11.0007 18.6845C10.3128 18.6845 9.73813 18.1826 8.58875 17.1788L7.33398 16.083M14.6673 16.083L16.2569 16.6128C17.1718 16.9178 17.6293 17.0703 18.0353 17.306C18.4329 17.5367 18.7934 17.826 19.1049 18.1639C19.4231 18.5092 20.1673 19.7497 20.1673 20.6663M7.33398 16.083L8.25065 13.333M7.33398 16.083L5.74436 16.6128C4.82947 16.9178 4.37202 17.0703 3.96594 17.306C3.56844 17.5367 3.2079 17.826 2.89643 18.1639C2.57824 18.5092 1.83398 19.7497 1.83398 20.6663"
                    stroke="#272727"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-black-primary text-lg font-medium">
                  Discover Program
                </h3>
                <p className="text-gray-primary text-sm font-normal">
                  Discover your ideal program
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[linear-gradient(159deg,#FFF_13.91%,#EAF9FB_106.7%)] px-[18px] py-6 flex items-center gap-3 rounded-xl">
              <div className="w-11 h-11 rounded-full bg-[#C1C9FF] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M16.0467 1.85019C11.7598 2.59801 11 6.87468 11 6.87468V20.1663C11 20.1663 11.8128 15.6996 16.5004 15.1786C17.0035 15.1227 17.4167 14.7191 17.4167 14.2133V3.11001C17.4167 2.35129 16.7948 1.71969 16.0467 1.85019Z"
                    stroke="#272727"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.88758 4.58302C7.14301 4.57986 9.31982 5.39617 10.9987 6.87467V20.1663C9.31982 18.6878 7.14301 17.8716 4.88758 17.8747C3.45574 17.8747 2.73982 17.8747 2.42352 17.6723C2.23362 17.5507 2.15604 17.4731 2.03449 17.2831C1.83203 16.9669 1.83203 16.4026 1.83203 15.274V7.70263C1.83203 6.39382 1.83203 5.73942 2.33504 5.20896C2.83805 4.67851 3.35299 4.65113 4.38286 4.59639C4.54995 4.58751 4.71823 4.58302 4.88758 4.58302Z"
                    stroke="#272727"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 20.1673C12.6789 18.6888 14.8557 17.8725 17.1111 17.8756C18.543 17.8756 19.2589 17.8756 19.5751 17.6732C19.7651 17.5516 19.8426 17.474 19.9642 17.2842C20.1667 16.9678 20.1667 16.4035 20.1667 15.2749V7.70356C20.1667 6.39475 20.1667 5.74035 19.6637 5.2099C19.1606 4.67944 18.4465 4.63775 17.4167 4.58301"
                    stroke="#272727"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-black-primary text-lg font-medium">
                  Find Programs
                </h3>
                <p className="text-gray-primary text-sm font-normal">
                  Explore education options
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[linear-gradient(159deg,#FFF_13.91%,#F2EAFB_106.7%)] px-[18px] py-6 flex items-center gap-3 rounded-xl">
              <div className="w-11 h-11 rounded-full bg-[#FFD2C1] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.7096 10.0833C16.7882 9.47781 14.4817 9.125 12.0013 9.125C9.52093 9.125 7.21442 9.47781 5.29297 10.0833V13.4375C7.21442 12.832 9.52093 12.4792 12.0013 12.4792C14.4817 12.4792 16.7882 12.832 18.7096 13.4375V10.0833Z"
                    stroke="black"
                    strokeWidth="1.4375"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7083 11.042V14.1672C18.8804 15.2965 19.5193 17.8181 21.5833 19.7542C20.8953 20.8835 18.5904 22.6582 14.875 20.7222"
                    stroke="black"
                    strokeWidth="1.4375"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.29297 11.041V14.1662C5.12096 15.2955 4.48208 17.8171 2.41797 19.7532C3.106 20.8825 5.41092 22.6573 9.1263 20.7212"
                    stroke="black"
                    strokeWidth="1.4375"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3125 15.833V17.1256C16.3125 18.4871 15.6766 19.7488 14.6375 20.4492L13.775 21.0306C12.6824 21.7671 11.3176 21.7671 10.225 21.0306L9.36249 20.4492C8.32333 19.7488 7.6875 18.4871 7.6875 17.1256V15.833"
                    stroke="black"
                    strokeWidth="1.4375"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.7096 10.0827L19.7884 9.51449C20.9989 8.72065 21.6041 8.32373 21.5842 7.75663C21.5642 7.18952 20.933 6.84451 19.6704 6.15448L15.1401 3.67868C13.5999 2.83691 12.8298 2.41602 12.0013 2.41602C11.1728 2.41602 10.4027 2.83691 8.86245 3.67868L4.33227 6.15448C3.06967 6.84451 2.43837 7.18952 2.41845 7.75663C2.39851 8.32373 3.00375 8.72065 4.21421 9.51449L5.29297 10.0827"
                    stroke="black"
                    strokeWidth="1.4375"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-black-primary text-lg font-medium">
                  Plan Graduation
                </h3>
                <p className="text-gray-primary text-sm font-normal">
                  Create your timeline
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (you already have this, unchanged) */}
        <div className="w-64 2xl:w-70 bg-background-primary p-4 rounded-2xl border border-gray-secondary">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-black-primary text-xl font-semibold">
              Chat History
            </h3>
            <button className="cursor-pointer">
              <Image
                src="images/dashboard/plus.svg"
                alt="Add Chat"
                width={20}
                height={20}
              />
            </button>
          </div>
          <ul className="space-y-3 text-sm">
            {Array.from({ length: 14 }).map((_, i) => (
              <li
                key={i}
                className="font-medium w-full px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 bg-white text-gray-primary"
              >
                Should I consider Advaizor?
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="block w-full mt-5 text-center">
        ChatGPT can make mistakes. Check important info.
      </span>
    </>
  );
};

export default AIChatPage;
