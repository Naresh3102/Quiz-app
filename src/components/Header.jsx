import Logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo of the Quiz App" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
