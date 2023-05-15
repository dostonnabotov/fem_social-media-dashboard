const Toggle = () => {
  return (
    <div className="toggle">
      <input type="checkbox" id="a" />
      <label htmlFor="a">
        <span className="sr-only">Toggle Switch</span>
      </label>
    </div>
  );
};

export default Toggle;
