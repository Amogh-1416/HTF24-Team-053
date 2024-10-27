
import SourceItem from "./SourceItem";

const sourceList = ["topic1.pdf", "topic2.pdf"];
export default function Source() {
  return (
    <div className="source-container w-64 border-white h-screen">
        <div className="title-container">
            <h3 className="text-white font-sans text-xl font-bold">Sources</h3>
        </div>
        <div className="flex flex-col">
            {sourceList.map((source, index) => (
                <SourceItem key = {index} source = {source} />
            ))}

            
        </div>
    </div>
  )
}
