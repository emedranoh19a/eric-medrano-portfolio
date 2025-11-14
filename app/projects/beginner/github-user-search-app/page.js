// Users should be able to:
//TODO: - View the optimal layout for the app depending on their device's screen size
//TODO: - See hover states for all interactive elements on the page
//TODO: - Search for GitHub users by their username
//TODO: - See relevant user information based on their search
//TODO: - Switch between light and dark themes
//TODO: - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

import Header from "./ui/components/Header";
import Profile from "./ui/components/Profile";
import SearchBar from "./ui/components/SearchBar";
import StyleSetup from "./ui/StyleSetup";

export default function Page() {
  //At this level should provide hook form.
  return <StyleSetup>
    <Header />
    <SearchBar />
    <Profile />
  </StyleSetup>;
}
