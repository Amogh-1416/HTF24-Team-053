import Source from "./components/Source";

export default function Notebook() {
    return (
        <div className="flex h-screen mt-4 ">
            
            <Source />
            <div
                className="chat-container w-full"
                style={{
                    background:
                        "radial-gradient(circle at bottom right, rgb(17 14 39 / var(--tw-bg-opacity)), #111827",
                    backgroundSize: "150% 150%",
                }}
            >
                Hello
            </div>
        </div>
    );
}
