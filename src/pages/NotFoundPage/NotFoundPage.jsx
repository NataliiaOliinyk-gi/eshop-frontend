import { Link } from "react-router-dom";

import Container from "../../modules/layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Button from "../../shared/components/Button/Button";

const NotFoundPage = () => {
    return (
        <main>
            <Container>
                <SectionTitle title="Страница не найдена" />
                <Link to="/">
                    <Button>На главную</Button>
                </Link>

            </Container>
        </main>
    )
};

export default NotFoundPage;