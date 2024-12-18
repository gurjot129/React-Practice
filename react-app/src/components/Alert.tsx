interface Props {
  OnClick: () => void;
}

function Alert({ OnClick }: Props) {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      <strong>Congratulations!</strong> You have triggered the alert!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={OnClick}
      ></button>
    </div>
  );
}

export default Alert;
