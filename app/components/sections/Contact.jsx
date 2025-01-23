export default function Contact() {
  return (
    <section className="h-screen w-full" id="contact">
      <div className="bg-red-500 w-full px-32 grid place-items-center md:grid-cols-2 gap-10">
        <div className="bg-sky-500 w-full"> item 1</div>
        <div className="bg-amber-500 w-full">item 2</div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  // <form onSubmit={handleSubmit(onSubmit)}>
  // <input {...register("firstName")} />
  // <select {...register("gender")}>
  //   <option value="female">female</option>
  //   <option value="male">male</option>
  //   <option value="other">other</option>

  return <form></form>;
}

function ContactInfo() {
  return (
    <div className="bg-slate-800">
      <h3>Contact information</h3>
      <p>Fill up the form and I will get back to you </p>
    </div>
  );
}
