export default function DropDown({ handleChange, catagories }) {
  return (
    <div className="d-flex justify-content-end p-2">
      <select
        onChange={handleChange}
        class="form-select w-25 "
        aria-label="Default select example"
      >
        <option value={0} selected>
          Categories
        </option>
        {catagories.length > 0 &&
          catagories.map((x) => {
            return <option value={x}>{x}</option>;
          })}
        <option className="bg-warning" value={0}>
          clear
        </option>
      </select>
    </div>
  );
}
