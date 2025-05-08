

import Container from "../layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Button from "../../shared/components/Button/Button";


const Logout = ()=>{
    return (
        <section>
            <Container>
                <SectionTitle title="Выход"/>

                <div>
                <Button>Выйти</Button>
            </div>
            </Container>
        </section>
    )
};

export default Logout;