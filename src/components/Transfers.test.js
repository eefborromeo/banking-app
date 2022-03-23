import { render, screen } from "@testing-library/react";
import Transfers from "./Transfers";
import * as Store from "../store";

it("should read users data from the global store", async () => {
  jest.spyOn(Store, "useStore").mockImplementation((fn) =>
    fn({
      transactionsLog: [
        {
          sender: "alex",
          reciever: "steve",
          transaction: 100,
        },
        {
          sender: "bob",
          reciever: "scott",
          transaction: 60,
        },
        {
          sender: "tony",
          reciever: "peter",
          transaction: 200,
        },
      ],
    })
  );

  render(<Transfers />);

  expect(screen.getByTestId("transactions-list").childNodes.length).toBe(3);

  expect(screen.getByTestId("transaction-0")).toHaveTextContent(
    "From alex to steve"
  );

  expect(screen.getByTestId("transaction-1")).toHaveTextContent(
    "From bob to scott"
  );

  expect(screen.getByTestId("transaction-2")).toHaveTextContent(
    "From tony to peter"
  );
});
