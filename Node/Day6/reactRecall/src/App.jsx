
import { OnOff_inReducer, WithBtn_inReducer } from "./components/UseReducer";
import { On_Off, With_btn } from "./components/UseState";

const App = () => {
  return <>
    <On_Off/>
    <With_btn/>
    <OnOff_inReducer/>
    <WithBtn_inReducer/>
  </>
}
export default App;