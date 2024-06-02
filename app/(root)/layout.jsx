import LeftSideBar from "@/components/LeftSideBar";

export default function RootLayout({ children }) {
    return (
        <main>
           <LeftSideBar/>
           {children}
           <p className="text-white-1">Right Side Bar</p>
        </main>
    );
}
