import styled from 'styled-components';
import iconCheck from '../../assets/icons/icon-check.svg';

const SCToDoList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border: 1px solid var(--accents-2);
  box-shadow: var(--shadow-small);
  border-radius: 5px;

  background-color: var(--geist-background);

  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 70px;
    padding: 15px 20px;
    border-bottom: 1px solid var(--accents-2);

    :first-of-type {
      border-radius: 5px 5px 0 0;
    }

    :hover .remove-button {
      opacity: 1;
    }

    .checkbox-text-container {
      display: flex;
      align-items: center;
      gap: 17.5px;

      input[type='checkbox'] {
        position: relative;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid var(--separator-color);
        outline: none;
        cursor: pointer;

        :hover {
          border-color: #8b9af9;
          transition: border-color 400ms ease 0s;
        }

        :checked {
          background-image: var(--check-background);
        }

        :checked::after {
          content: url(${iconCheck});
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .text-date-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        /* 42.5px = ancho del checkbox (25px) + gap entre checkbox y texto (17.5px) */
        /* max-width: calc(100% - 42.5px); */
        flex: 1;

        .todo-text {
          overflow: hidden;
          word-wrap: break-word;
          color: var(--geist-foreground);
        }

        .completed {
          color: var(--accents-5);
          text-decoration: line-through;
        }

        .date {
          font-size: 14px;
          color: var(--accents-4);
        }
      }
    }
  }

  .remove-button {
    opacity: 0;
    padding: 5px;
    transition: opacity 200ms ease 0s;
  }

  .todo-empty-text {
    width: 100%;
    text-align: center;
    color: var(--accents-4);
  }

  .todo-resume-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--accents-4);
    font-size: 14px;
    height: 50px;
    padding: 15px 20px;
    border-radius: 0 0 5px 5px;

    .filter-buttons-container {
      display: flex;
      gap: 10px;

      .filter-button {
        padding: 5px 10px;
        border-radius: 6px;
        transition: color 0.2s ease, background-color 0.2s ease;

        :hover {
          background-color: rgba(208, 215, 222, 0.32);

          :not(.active) {
            color: var(--font-color);
          }
        }
      }

      .active {
        font-weight: var(--font-weight-bold);
        color: var(--active-filter-color);
      }
    }
  }

  @media (max-width: 961px) {
    .todo-item {
      .remove-button {
        opacity: 1;
      }
    }
  }
`;

export default SCToDoList;
