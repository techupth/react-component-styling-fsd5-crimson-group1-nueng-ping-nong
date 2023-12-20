// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.type === "error-alert") {
    return (
      <div
        css={css`
          width: 650px;
          height: 80px;
          border-radius: 10px;
          background-color: rgba(249, 200, 200, 1);
          color: rgb(68, 68, 68);
          display: flex;
          flex-direction: row;
          margin: 20px;
          font-family: "kanit" . sans-serif;
          font-size: 20px;
          font-weight: 700;
        `}
      >
        <img
          src="./src/icons/error-frown-face.svg"
          width="24px"
          height="24px"
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        />
        <div
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        >
          This is error alert box
        </div>
      </div>
    );
  } else if (props.type === "warning-alert") {
    return (
      <div
        css={css`
          width: 650px;
          height: 80px;
          border-radius: 10px;
          background-color: rgba(249, 217, 200, 1);
          color: rgb(68, 68, 68);
          display: flex;
          flex-direction: row;
          margin: 20px;
          font-family: "kanit" . sans-serif;
          font-size: 20px;
          font-weight: 700;
        `}
      >
        <img
          src="./src/icons/waring-triangle.svg"
          width="24px"
          height="24px"
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        />
        <div
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        >
          This is warning alert box
        </div>
      </div>
    );
  } else if (props.type === "info-alert") {
    return (
      <div
        css={css`
          width: 650px;
          height: 80px;
          border-radius: 10px;
          background-color: rgba(249, 235, 200, 1);
          color: rgb(68, 68, 68);
          display: flex;
          flex-direction: row;
          margin: 20px;
          font-family: "kanit" . sans-serif;
          font-size: 20px;
          font-weight: 700;
        `}
      >
        <img
          src="./src/icons/alert-circle.svg"
          width="24px"
          height="24px"
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        />
        <div
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        >
          This is info alert box
        </div>
      </div>
    );
  } else if (props.type === "success-alert") {
    return (
      <div
        css={css`
          width: 650px;
          height: 80px;
          border-radius: 10px;
          background-color: rgba(206, 247, 205, 1);
          color: rgb(68, 68, 68);
          display: flex;
          flex-direction: row;
          margin: 20px;
          font-family: "kanit" . sans-serif;
          font-size: 20px;
          font-weight: 700;
        `}
      >
        <img
          src="./src/icons/check-circle.svg"
          width="24px"
          height="24px"
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        />
        <div
          css={css`
            margin-top: 30px;
            margin-left: 15px;
          `}
        >
          This is success alert box
        </div>
      </div>
    );
  } else {
    return;
  }
}

export default Alert;
