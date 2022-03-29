import { fireEvent, render, screen } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import TransferForm from "./TransferForm";
import * as Store from "../store";

describe("Transfer Form", () => {
    it("should transfer money from current user", () => {
        const { result } = renderHook(() => Store.useStore((state) => state));
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
                  {
                    id: 2,
                    name: "Mary",
                    balance: 200,
                    username: "user2",
                    password: "user2",
                    email: "user2@email.com",
                    status: "APPROVED",
                    expenseItems: [],
                  },
            ])
        })

        const currentUser = result.current.users.find((user) => user.id === 1);

        
        render(<TransferForm currentUser={currentUser} />)
        
        const nameInput = screen.getByLabelText('Account Name:');
        const amountInput = screen.getByLabelText('Amount:');
        const transferButton = screen.getByTestId('transfer-button');
        
        expect(transferButton.disabled).toBe(true);
        fireEvent.change(nameInput, { target: { value: "M" } });
        
        const nameOption = screen.getByText('Mary');
        fireEvent.click(nameOption);
        expect(transferButton.disabled).toBe(false);
        
        fireEvent.change(amountInput, { target: { value: "50"}})
        fireEvent.click(transferButton);
        const updatedCurrentUser = result.current.users.find((user) => user.id === 1);
        const receiver = result.current.users.find((user) => user.id === 2);
        expect(updatedCurrentUser.balance).toBe(50);
        expect(receiver.balance).toBe(250);

    })
})