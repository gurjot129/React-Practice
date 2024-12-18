interface Props {
  btnTxt: string;
  onHandleClick: () => void;
  color?: "primary" | "secondary" | "danger" | "success";
}

function Button({ btnTxt, onHandleClick, color }: Props) {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onHandleClick}
      >
        {btnTxt}
      </button>
    </>
  );
}

export default Button;
