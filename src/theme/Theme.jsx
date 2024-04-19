import Container from "./Container";
import Header from "../components/header/Header";

export default function Theme({ children }) {
    return (
        <main>
            <Container>
                <Header />
            </Container>
            {children}
        </main>
    );
};