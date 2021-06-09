import React from "react";
import { Provider } from "react-redux";
import store from "../../store/";
import TodoItem from "./index.js";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("TodoItem", () => {
  let expectedProp;
  let component;

  beforeEach(() => {
    expectedProp = {
      id: 16,
      todo: "Pass a test",
      isDone: true,
    };

    component = (
      <Provider store={store}>
        <TodoItem todo={expectedProp} />
      </Provider>
    );
  });

  test("renders TodoItem component", () => {
    const { container, getByText } = render(component);
    const checkboxLabel = container.querySelector("label");
    const todo = getByText(expectedProp.todo);
    const editButton = container.querySelector(".edit");
    const removeButton = container.querySelector(".remove");

    expect(checkboxLabel).toBeVisible();
    expect(todo).toBeVisible();
    expect(editButton).toBeVisible();
    expect(removeButton).toBeVisible();
  });

  test("checkbox has the right initial value", () => {
    const { getByTitle } = render(component);
    const checkbox = getByTitle("checkbox");

    expect(checkbox).toHaveProperty("checked", expectedProp.isDone);
  });

  test("shows the edit todo form", () => {
    const { container, getByPlaceholderText, getByText } = render(component);
    const editButton = container.querySelector(".edit");

    userEvent.click(editButton);

    const formInput = getByPlaceholderText("Edit this todo here");
    const formButton = getByText("Edit");

    expect(formInput).toBeVisible();
    expect(formButton).toBeVisible();
  });

  test("edit todo form input has the initial value", () => {
    const { container, getByPlaceholderText } = render(component);
    const editButton = container.querySelector(".edit");

    userEvent.click(editButton);

    const formInput = getByPlaceholderText("Edit this todo here");

    expect(formInput.value).toBe(expectedProp.todo);
  });
});
