import ArtworkNavigation from "../components/layout/ArtworkNavigation/ArtworkNavigation";
type LayoutProps = {
    children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
    return <>
        <div className="flex-1 flex flex-col">

            {children}
        </div>
        <ArtworkNavigation />
    </>
}
