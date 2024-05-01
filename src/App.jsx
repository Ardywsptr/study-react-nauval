import ButtonSatu from "./button/Cara-pertama"
import ButtonDua from "./button/Cara-kedua"
import ButtonTiga from "./button/Cara-ketiga"
import ButtonEmpat from "./button/Cara-keempat"

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ButtonSatu>Cara 1</ButtonSatu>
      <ButtonDua>Cara 2</ButtonDua>
      <ButtonTiga>Cara 3</ButtonTiga>
      <ButtonEmpat>Cara 4</ButtonEmpat>
    </div>
  )
}

export default App
