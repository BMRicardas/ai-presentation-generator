import { Form } from "@/components/form/form.component";
import { AppHead } from "@/ui";

export default function Home() {
  return (
    <>
      <AppHead />
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Form />
    </>
  );
}
