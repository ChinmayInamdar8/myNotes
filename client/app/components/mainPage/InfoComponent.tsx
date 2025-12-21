import InfoCards from "./InfoCards";

export default function InfoComopnent(){
    return (
        <div className="flex flex-col gap-3 lg:flex-row justify-between items-center my-10">
            <InfoCards title="📝 Smart Notes" text="Create structured, searchable, and elegant notes effortlessly."/>
            <InfoCards title="🤝 Real-time Collaboration" text="Edit together with your team, see changes instantly."/>
            <InfoCards title="🔗 Shareable Docs" text="Publish documentation and share it with a single link."/>
        </div>
    )
}