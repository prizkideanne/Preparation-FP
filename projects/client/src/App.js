import Button from "./components/buttons/Button";
import ButtonCircular from "./components/buttons/ButtonCircular";
import ButtonWithIcon from "./components/buttons/ButtonWithLeadingIcon";
import PropertyCard from "./components/cards/PropertyCard";
import TextInput from "./components/forms/TextInput";
import TableWithSortHeader from "./components/tables/TableWithSortHeader";

function App() {
  return (
    <div className="flex flex-col bg-blue-100 m-10 p-5 rounded gap-10">
      {/* TEXT INPUTS */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-5">Form Text Input</h1>
        <div className="gap-4 grid grid-cols-2">
          <TextInput
            label={"label"}
            placeholder={"Text input with label and placeholder"}
          />
          <TextInput
            label={"Password"}
            type={"password"}
            placeholder={"Put your password here"}
          />
          <TextInput
            label={"Email"}
            type={"email"}
            placeholder={"john@wick.com"}
          />
          <TextInput
            label={"Number"}
            type={"number"}
            placeholder={"080989999"}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-5">Buttons</h1>
        <div className="flex flex-row flex-wrap gap-5">
          <Button label={"Button with label"} />
          <ButtonWithIcon label={"Button With Icon"} />
          <ButtonCircular />
        </div>
      </div>

      {/* Property Card */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-5">Property Card</h1>
        <div className="flex flex-col flex-wrap gap-5">
          <PropertyCard />
        </div>
      </div>

      {/* TABLES */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-5">Tables</h1>
        <div className="gap-4 flex flex-col">
          <TableWithSortHeader />
        </div>
      </div>
    </div>
  );
}

export default App;
