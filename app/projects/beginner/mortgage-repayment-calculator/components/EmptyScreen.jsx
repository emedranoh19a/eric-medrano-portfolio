import Image from "next/image";
import { illustrationEmpty } from "../imageIndex";
import Text from "./Text";

export default function EmptyScreen() {
  return (
    <div className="flex flex-col gap-4 w-full h-full items-center justify-center text-center">
      <EmptyIllustration />
      <Text preset={2} className="text-white" as="h2">
        Results shown here
      </Text>
      <Text preset={4} className="text-[var(--slate-300)]">
        Complete the form and click &ldquo;calculate repayments&rdquo; to see
        what your monthly repayments would be.
      </Text>
    </div>
  );
}
function EmptyIllustration() {
  return (
    <Image
      src={illustrationEmpty}
      height={192}
      width={192}
      alt="empty illustration"
    />
  );
}
