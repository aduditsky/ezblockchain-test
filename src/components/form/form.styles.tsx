import styled from 'styled-components';
import { IHeader } from './form.interfaces';

export const FormStyles = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;

  overflow: hidden;
  pointer-events: none;

  position: absolute;
`;

export const Header = styled.div<IHeader>`
  font-family: 'MonumentExtended';
  font-style: normal;
  font-weight: normal;

  /* identical to box height, or 112px */

  text-transform: uppercase;
  margin: 0;
  color: inherit;

  pointer-events: auto !important;

  span {
    &:first-of-type {
      font-size: 40px;
    }

    &:last-of-type {
      font-size: 80px;
      line-height: 140%;
    }
  }

  /* font-family: 'MonumentExtended', sans-serif; */
`;

export const FormContainer = styled.div`
  padding-top: 100px;
  padding-left: 120px;
  width: 100%;

  height: 100%;

  box-sizing: border-box;
  color: #fff;
  /* background: #fff; */
`;

export const ContainerStyles = styled.div`
  opacity: 0;
  height: 0;

  max-width: 1073px;
  width: 100%;

  pointer-events: none;

  display: flex;
  flex-direction: column;

  span {
    color: #495160;
    max-width: 573px;
    margin-bottom: 56px;
  }

  .form {
    padding-bottom: 108px;

    textarea::placeholder {
      font-family: Graphik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #495160;
    }

    .input-select {
      position: relative;
      width: 79%;

      min-height: 75px;

      .input-arrow {
        position: absolute;
        transform-origin: center;
        right: 32px;
        top: 50%;
        transition: 0.2s ease;
        &.active {
          transform: translateY(-50%) rotate(180deg);
        }
      }

      .select-value {
        width: 100%;
        background-color: #fff;
        top: 0;
        left: 0;
        cursor: pointer;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        font-size: 16px;
        line-height: 140%;
        color: #495160;

        border: 1px solid #dddfe1;
        box-sizing: border-box;
      }

      .picked {
        color: #495160;
        font-size: 16px;
        line-height: 140%;
        position: relative;
        padding: 0;
        font-family: 'Graphik';
        border-bottom: 1px solid #dddfe1;
        width: 100%;
        padding: 25px 32px;
      }

      .dropdown {
        bottom: 0;
        height: 0;
        width: 100%;

        overflow: hidden;
        .option {
          padding: 10px 0;
          padding: 25px 32px;
        }
      }
    }

    h4 {
      font-size: 18px;
      margin-top: 24px;
      margin-bottom: 16px;
      padding-left: 32px;
      color: #398bf5;
    }

    button {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      text-transform: uppercase;
      padding: 28px;
      font-family: 'MonumentExtended';

      width: 100%;
      background: none;
      border: none;

      color: #fff;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 110%;
      /* or 15px */

      background: radial-gradient(
        59.86% 345.83% at 94.35% 142.36%,
        #398bf5 0%,
        #45b7f4 100%
      );

      cursor: pointer;
    }

    .label-input {
      display: flex;
      justify-content: center;

      width: 100%;

      margin-bottom: 24px;
      span {
        width: 21%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-family: 'Graphik';
        color: #398bf5;

        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 170%;

        padding-left: 32px;
        margin: 0;
        /* identical to box height, or 31px */

        text-align: right;
        letter-spacing: 0.01em;
      }

      input {
        width: 79%;
        margin: 0;
      }
    }

    input,
    textarea,
    .attachment {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 25px 32px;

      font-size: 16px;
      line-height: 140%;
      color: #495160;

      margin-bottom: 24px;

      border: 1px solid #dddfe1;
      box-sizing: border-box;
    }

    .attachment {
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 0;
      span {
        padding: 0;
        margin: 0;
        width: fit-content;
        margin-right: 5px;
      }
    }

    .flex-input {
      display: flex;
      gap: 64px;
    }

    input.f-1 {
      flex: 1;
    }

    .w-100 {
      width: 100%;
    }
  }
`;

export const ButtonStyles = styled.button`
  color: #398bf5;
  border: none;
  background: none;
  opacity: 0;

  position: absolute;

  top: 110px;
  left: 120px;
  z-index: 10;

  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  span {
    background: linear-gradient(326.02deg, #398bf5 15.05%, #45b7f4 91.72%);
    -webkit-background-clip: text;
    font-family: 'MonumentExtended';
    -webkit-text-fill-color: transparent;

    /* font-family: 'Monument Extended'; */
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
  }
`;
