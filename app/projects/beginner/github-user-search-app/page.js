"use client"
import { useState } from "react";
// Users should be able to:
//TODO: - View the optimal layout for the app depending on their device's screen size
//TODO: - See hover states for all interactive elements on the page
//TODO: - Search for GitHub users by their username
//TODO: - See relevant user information based on their search
//TODO: - Switch between light and dark themes
//TODO: - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

import Header from "./ui/components/Header";
import Profile from "./ui/components/Profile";
import ProfileSkelleton from "./ui/components/ProfileSkelleton";
import SearchBar from "./ui/components/SearchBar";
import StyleSetup from "./ui/StyleSetup";

export default function Page() {
  const [loading, setLoading] = useState(false);
  //At this level should provide hook form.
  return <StyleSetup>
    <button className="bg-lime-500 cursor-pointer py-4" onClick={() => setLoading((s) => !s)}>Set loading</button>
    <Header />
    <SearchBar />
    {loading ? <ProfileSkelleton /> : <Profile />}
  </StyleSetup>;
}

