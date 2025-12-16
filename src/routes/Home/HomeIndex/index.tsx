import Button from "../../../components/Button";
import './styles.css'

export default function HomeIndex() {
    return(
        <main>
            <h1>Desafio Github API</h1>
            <div className="rh-mb30">
                <p>DevSuperior - Escola de programação</p>
            </div>
            <Button text="Começar" />
        </main>
    );
}