export default function Quote({ className = "", children }) {
  return (
    <>
      <span className={className}>&ldquot;</span>
      {children}
      <span className={className}>&rdquot;</span>
    </>
  );
}
