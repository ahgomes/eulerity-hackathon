import TopHead from '../components/TopHead.jsx';
import styled from "styled-components";

const Main = styled.main`
    margin-left: 20px;
`;

const Bold = styled.span`
    font-weight: 900;
`;

export default function About() {
    return (
        <div className="App">
            <header className="App-header">
                <TopHead />
            </header>
            <Main>
                <h2>About</h2>
                <p>This website is created using React. It allows you to select images of various pets and download them. You can also filter by title or description in the search bar. And sort by various critera. To go back an mess around with it, just click on <Bold>Pet Images</Bold> on the top bar, or right <a href="/">here</a>.</p>
            </Main>
        </div>
    );
}
