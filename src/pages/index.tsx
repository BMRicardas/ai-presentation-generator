import { Form } from "@/components/form/form.component";
import { AppHead } from "@/ui";
import Container from "@/ui/container/container.component";

export default function Home() {
  return (
    <>
      <AppHead />
      <Container>
        <Form />
      </Container>
    </>
  );
}
