import logoIcon from "@/assets/svgs/logo.svg";

export const LogoLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent supports-backdrop-blur:bg-background/30 backdrop-blur">
      <div className="gap-2 flex flex-col items-center">
        <img src={logoIcon} alt="error-img" />
        <div
          className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};
