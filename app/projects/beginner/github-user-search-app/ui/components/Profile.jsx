"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Icon from "./Icon";

export default function Profile() {
  //API to call: https://api.github.com/users/emedranoh19a
  return (
    <div className="bg-neutral-0 rounded-2xl shadow-2xl shadow-[#4660BB]/20 py-8 px-6 sm:py-12 sm:px-8 lg:p-12">
      <MobileProfile />
      <DesktopProfile />
    </div>
  );
}
function MobileProfile() {
  return (
    <div className="sm:hidden flex flex-col gap-6">
      <div className="flex gap-5 items-start">
        <ProfileAvatar />
        <ProfileHeaderDetails />
      </div>
      <ProfileBio />
      <ProfileStats />
      <ProfileContactSection />
    </div>
  );
}
function DesktopProfile() {
  return (
    <div className="hidden sm:flex gap-8">
      <ProfileAvatar />
      <div className="flex-1 flex flex-col gap-6">
        <ProfileHeaderDetails />
        <ProfileBio />
        <ProfileStats />
        <ProfileContactSection />
      </div>
    </div>
  );
}
function ProfileAvatar(className = "") {
  const avatarStyles = cn(
    "size-[70px] sm:size-[117px] relative bg-slate-50 rounded-full",
    className
  );
  return <div className={avatarStyles}></div>;
}
function ProfileHeaderDetails({ className = "" }) {
  const bp = useBreakpoint();
  const containerStyles = cn(
    "flex flex-col sm:flex-row justify-between flex-1 ",
    className
  );
  const usernameStyles = clsx(
    "text-blue-500",
    bp === "base" ? "preset-5" : "preset-4"
  );
  return (
    <div className={containerStyles}>
      <div>
        <h1 className="preset-1 text-neutral-700">The Octocat</h1>
        <span className={usernameStyles}>@octocat</span>
      </div>
      <div className="preset-6 text-neutral-500">Joined 25 Jan 2011</div>
    </div>
  );
}
function ProfileBio() {
  return <p className="preset-6 text-neutral-500">This profile has no bio</p>;
}
function ProfileStats() {
  return (
    <div className="bg-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-4 px-5 sm:px-8 py-4 rounded-[10px]">
      <Stat title="Repos" value="8" />
      <Stat title="Followers" value="3938" />
      <Stat title="Following" value="9" />
    </div>
  );
}
function Stat({ title, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="preset-7 text-neutral-500 capitalize">{title}</span>
      <span className="preset-2 text-neutral-700">{value}</span>
    </div>
  );
}

function ProfileContactSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ContactItem variant="location" value="San Francisco" />
      <ContactItem variant="twitter" value="Not Available" />
      <ContactItem variant="website" value="https://github.blog" />
      <ContactItem variant="company" value="@github" />
    </div>
  );
}

function ContactItem({ variant, value }) {
  return (
    <div className="grid grid-cols-[25px_1fr] gap-4 justify-items-start">
      <Icon variant={variant} />
      <span className="preset-6 text-neutral-500">{value}</span>
    </div>
  );
}
