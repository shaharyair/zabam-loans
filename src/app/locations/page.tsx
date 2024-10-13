import { Container } from "../../components/Container";
import { locations } from "../../components/data";
import { Locations } from "../../components/Locations";


 export default function Home() {
  return (
    <Container>
        <Locations data={locations} />
    </Container>
  );
}
