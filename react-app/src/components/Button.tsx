interface Props {
  btnTxt: string;
  OnClick: () => void;
  color?: "primary" | "secondary" | "danger" | "success";
}

function Button({ btnTxt, OnClick, color }: Props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={OnClick}>
        {btnTxt}
      </button>
    </>
  );
}

export default Button;
