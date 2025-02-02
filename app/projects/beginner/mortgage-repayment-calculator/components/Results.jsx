import Image from "next/image";

export default function Results({ isSubmitted, results }) {
  return (
    <div className="text-center p-4 min-w-80  w-fit bg-slate-900 flex-1 md:rounded-bl-[50px] grid items-center">
      {!isSubmitted ? (
        <div className="md:px-8 md:py-20 flex flex-col justify-center items-center">
          <div className="relative aspect-square w-32 ">
            <Image
              src="/projects/beginner/mortgage-repayment-calculator/images/illustration-empty.svg"
              fill
              className="object-contain"
              alt="results illustration"
            />
          </div>
          <h2 className="text-slate-100 font-bold mb-2 text-lg md:text-xl">
            Results shown here
          </h2>
          <p className="text-slate-300 max-w-60 text-xs ">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="h-full w-full p-x">
          <h2 className="text-slate-100 text-left text-lg font-bold mb-2">
            Your results
          </h2>
          <p className="text-slate-500 text-xs text-left mb-5 ">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and lick "calculate rapyments"
            again
          </p>
          <div className="relative bg-slate-950 text-left rounded-lg overflow-hidden">
            <div className="absolute w-full h-1 bg-[var(--lime)]" />
            <div className="p-4">
              <h4 className="text-slate-500 text-xs mb-2">
                Your monthly repayments
              </h4>
              <h3 className="text-[var(--lime)] mb-3 text-4xl font-bold">
                €{results.monthly}
              </h3>
              <hr className="opacity-20 mb-3" />
              <p className="text-slate-500 mb-2 text-sm">
                Total you'll repay over the term
              </p>
              <h3 className="text-white  mb-2 font-bold">€{results.total}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
