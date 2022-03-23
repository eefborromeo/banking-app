import { render, screen } from "@testing-library/react";
import Analytics from "./Analytics";
import * as Store from "../store";

it("should read users data from the global store", async () => {
  jest.spyOn(Store, "useStore").mockImplementation((fn) =>
    fn({
      users: [
        {
          id: 1,
          name: "steve",
          balance: 100,
        },
        {
          id: 2,
          name: "happy",
          balance: 200,
        },
        {
          id: 3,
          name: "tony",
          balance: 300,
        },
      ],
    })
  );

  render(<Analytics />);

  expect(screen.getByTestId("total-money").textContent).toBe("600");
  expect(screen.getByTestId("total-users").textContent).toBe("3");
  expect(screen.getByTestId("richest-balance").textContent).toBe("300");
  expect(screen.getByTestId("richest-user").textContent).toBe("tony");
  expect(screen.getByTestId("poorest-balance").textContent).toBe("100");
  expect(screen.getByTestId("poorest-user").textContent).toBe("steve");
});
