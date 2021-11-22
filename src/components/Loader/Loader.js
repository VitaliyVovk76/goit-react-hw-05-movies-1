import Load from "react-loader-spinner";
export default function Loader() {
  return (
    <Load
      type="Circles"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000}
    />
  );
}
