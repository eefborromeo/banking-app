import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import LoginForm from "./LoginForm.js";
import { useStore } from "../store";

it("should login the admin if the credentials are correct", () => {
  const { result } = renderHook(() => useStore((state) => state));

  render(<LoginForm />);

  const usernameInput = screen.getByLabelText(/Username/);
  const passwordInput = screen.getByLabelText(/Password/);

  fireEvent.change(usernameInput, { target: { value: "admin" } });
  fireEvent.change(passwordInput, { target: { value: "admin" } });
  fireEvent.click(screen.getByText("Login"));

  expect(result.current.adminLoggedIn).toBe(true);
});
