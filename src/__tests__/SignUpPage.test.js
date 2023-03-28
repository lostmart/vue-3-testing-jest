import SignUpPage from "../pages/SignUpPage.vue"
import { screen, render } from "@testing-library/vue"

it("has 'Sign Up' in the title h2", () => {
	render(SignUpPage)
	const header = screen.queryByRole("heading", { name: "Sign Up" })
	expect(header).not.toBeNull()
})
