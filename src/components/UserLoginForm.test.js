import { fireEvent, render, screen } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks"
import { useStore } from "../store"
import UserLoginForm from "./UserLoginForm";

describe("User Login Form", () => {
    it("should login the user if the credentials are correct", () => {
        const { result } = renderHook(() => useStore((state) => state));
        act(() => {
            result.current.setUsers([
                {
                    id: 1,
                    name: "John",
                    balance: 100,
                    username: "user1",
                    password: "user1",
                    email: "user1@email.com",
                    status: "APPROVED",
                    expenseItems: [],
                  },
            ])
        })

        render(<UserLoginForm/>);

        const usernameInput = screen.getByLabelText("Username:")
        const passwordInput = screen.getByLabelText("Password:")
        const button = screen.getByText("Login")

        fireEvent.change(usernameInput, { target: { value: "user1" } });
        fireEvent.change(passwordInput, { target: { value: "user1" } })
        fireEvent.click(button)

        expect(result.current.currentUser).toBe(1);
    })

    it("should not login the user if the credentials are incorrect", () => {
        const { result } = renderHook(() => useStore((state) => state));
        act(() => {
            result.current.setUsers([
                {
                    id: 1,
                    name: "John",
                    balance: 100,
                    username: "user1",
                    password: "user1",
                    email: "user1@email.com",
                    status: "APPROVED",
                    expenseItems: [],
                  },
            ])
        })

        render(<UserLoginForm/>);

        const usernameInput = screen.getByLabelText("Username:")
        const passwordInput = screen.getByLabelText("Password:")
        const button = screen.getByText("Login")

        fireEvent.change(usernameInput, { target: { value: "user2" } });
        fireEvent.change(passwordInput, { target: { value: "user2" } })
        fireEvent.click(button)

        expect(result.current.currentUser).toBe(false);
    })
}) 