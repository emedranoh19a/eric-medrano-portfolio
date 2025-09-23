import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button({ variant = "ios", className }) {
  //Style:
  const buttonStyles = cn(
    "group cursor-pointer flex gap-2 px-8 py-4 rounded-2xl items-center justify-center transition-colors",
    variant === "ios" &&
      "bg-(--slate) text-(--white) hover:text-(--stone) hover:bg-(--cyan)",
    variant === "android" && "bg-(--white) hover:bg-(--yellow)",
    className
  );
  //Dataflow:

  return (
    <button className={buttonStyles}>
      <span>{variant === "ios" ? <IconApple /> : <IconAndroid />}</span>{" "}
      <Text preset={6} as="span" className="font-bold">
        {variant === "ios" ? "iOS" : "Android"} Download
      </Text>
    </button>
  );
}

function IconApple() {
  return (
    <svg
      width="18"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-(--white) group-hover:fill-(--stone) transition-colors"
    >
      <path
        d="M12.683 4.681c1.359 0 2.798.745 3.821 2.029-3.356 1.851-2.812 6.674.58 7.965-.467 1.04-.69 1.504-1.292 2.425-.839 1.285-2.02 2.886-3.486 2.897-1.302.014-1.637-.852-3.403-.842-1.766.009-2.134.857-3.437.845C4 19.987 2.88 18.542 2.042 17.257-.302 13.667-.549 9.45.897 7.207c1.029-1.592 2.651-2.523 4.175-2.523 1.551 0 2.527.856 3.812.856 1.247 0 2.005-.859 3.8-.859ZM12.291 0c.178 1.215-.315 2.405-.968 3.246-.697.904-1.901 1.603-3.066 1.566-.213-1.163.332-2.36.995-3.167C9.978.756 11.224.074 12.291 0Z"
        // fill="#FCFAF9"
      />
    </svg>
  );
}

function IconAndroid() {
  return (
    <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.362 6.638v8.35c0 .502-.334.836-.836.836h-.836v2.924c0 .669-.583 1.252-1.251 1.252-.67 0-1.252-.583-1.252-1.252v-2.924H7.515v2.924c0 .669-.583 1.252-1.252 1.252s-1.252-.583-1.252-1.252v-2.924h-.836c-.501 0-.836-.334-.836-.835v-8.35h10.023Zm2.088 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252s-1.252-.584-1.252-1.252V7.889c0-.665.583-1.25 1.252-1.25Zm-14.198 0c.669 0 1.252.586 1.252 1.251v5.848c0 .668-.583 1.252-1.252 1.252S0 14.405 0 13.737V7.889c0-.665.583-1.25 1.252-1.25ZM11.776.126a.4.4 0 0 1 .583 0 .401.401 0 0 1 0 .583l-1.085 1.084c.35.234.667.52.942.846.66.782 1.081 1.8 1.139 2.902l.002.034c.003.075.005.15.005.227H3.34c0-.076.002-.152.006-.227l.002-.034a4.908 4.908 0 0 1 1.138-2.902 4.52 4.52 0 0 1 .942-.846L4.343.71a.4.4 0 0 1 0-.583.4.4 0 0 1 .583 0l1.12 1.118.053.051c.664-.333 1.41-.499 2.24-.5h.024c.83.001 1.575.167 2.24.5l.052-.051ZM6.262 3.09a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Zm4.178 0a.626.626 0 1 0 0 1.252.626.626 0 0 0 0-1.252Z"
        fill="#191826"
      />
    </svg>
  );
}
