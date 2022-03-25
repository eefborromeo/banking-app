import { fireEvent, render, screen } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import TransactionForm from "./TransactionForm";
import * as Store from "../store";

describe("Transaction Form", () => {
  it("should deposit money from current user", () => {
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
      ]);
    });

    const currentUser = result.current.users.find((user) => user.id === 1);

    render(<TransactionForm formType="deposit" currentUser={currentUser} />);

    const transactionInput = screen.getByTestId("transaction-input");

    fireEvent.change(transactionInput, { target: { value: "10" } });
    fireEvent.click(screen.getByText("DEPOSIT"));

    expect(result.current.users[0].balance).toBe(110);
  });

  it("should withdraw money from current user", () => {
    const { result } = renderHook(() => Store.useStore((state) => state));
    act(() => {
      result.current.setUsers([
        {
          id: 2,
          name: "Jane",
          balance: 200,
          username: "user2",
          password: "user2",
          email: "user2@email.com",
          status: "APPROVED",
          expenseItems: [],
        },
      ]);
    });

    const currentUser = result.current.users.find((user) => user.id === 2);

    render(<TransactionForm formType="withdraw" currentUser={currentUser} />);

    const transactionInput = screen.getByTestId("transaction-input");

    fireEvent.change(transactionInput, { target: { value: "10" } });
    fireEvent.click(screen.getByText("WITHDRAW"));

    expect(result.current.users[0].balance).toBe(190);
  });
});
