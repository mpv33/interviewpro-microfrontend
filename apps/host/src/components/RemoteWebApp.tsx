// src/components/RemoteWebApp.jsx
export default function RemoteWebApp() {
    return (
      <div className="h-[calc(100vh-80px)]">
        <iframe
          src="http://localhost:3002/"
          title="InterviewPro Web Dev"
          className="w-full h-full border-0"
        />
      </div>
    );
  }
  