export const Fab = (
  {
    text,
    outline,
    circle,
    top,
    bottom,
    right,
    left,
    onClick,
  }: {
    text?: string;
    outline?: boolean;
    circle?: boolean;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    onClick?: () => void;
  } = {
    text: "",
    outline: false,
    circle: false,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    onClick: () => {},
  }
) => {
  const baseStyle = { top, bottom, right, left, position: "fixed" };
  const borderRadiusStyle = circle ? { borderRadius: "50%" } : {};
  const borderStyle = outline ? { border: "2px solid var(--nc-bg-3)" } : {};
  const sizeStyle = circle ? { height: 56, width: 56 } : { height: 40 };
  const colorStyle = outline
    ? { color: "var(--nc-tx-1)", backgroundColor: "var(--nc-bg-1)" }
    : {};
  const fontStyle = circle ? { fontSize: "xx-large" } : {};
  const style = {
    ...baseStyle,
    ...borderRadiusStyle,
    ...borderStyle,
    ...sizeStyle,
    ...colorStyle,
    ...fontStyle,
  } as React.CSSProperties;
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};
