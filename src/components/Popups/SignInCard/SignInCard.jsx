import React from "react";
import { Link } from "react-router-dom";
const SignInCard = () => {
  return (
    <article className="flex flex-col space-y-3 w-[320px] items-center justify-center h-[160px] rounded-xl bg-[#ffffff] shadow-[1px_0px_30px_#d9d9d9]">
      {/* Title */}
      <div>
        <h2 className="text-[#0f0f0f] font-medium text-[20px]">
          Want to join the conversation?
        </h2>
      </div>

      {/* Sign In Label */}
      <div>
        <p className="text-[#060606]">Sign in to continue</p>
      </div>

      {/* Sign In Link */}
      <div>
        <Link
          to={"/login"}
          className="px-[25px] py-2 rounded-full bg-[#0f0f0f] text-[#fff] font-medium"
        >
          Sign in
        </Link>
      </div>
    </article>
  );
};

export default SignInCard;
