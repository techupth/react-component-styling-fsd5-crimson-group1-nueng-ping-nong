// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <div>
        <button
          css={css`
            margin: 20px;
            width: 170px;
            height: 50px;
            background-color: rgba(7, 78, 232, 1);
            font-size: 16px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
          `}
        >
          Button
        </button>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div>
        <button
          css={css`
            margin: 20px;
            width: 170px;
            height: 50px;
            background-color: rgba(7, 164, 232, 1);
            font-size: 16px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
          `}
        >
          Button
        </button>
      </div>
    );
  } else {
    return;
  }
}

export default Button;
