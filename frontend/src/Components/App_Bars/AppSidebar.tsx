import { Link } from 'react-router-dom';

export const ExpandedAppSidebar = () => {
    return (
        <div className="min-h-full border-r border-[#bdbdbd]">
            <div className="flex flex-col">
                <Link to="/tracker">
                    <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                        <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="time-tracker" />
                        <span className="ml-6 text-[#333333] font-medium">TIME TRACKER</span>
                    </div>
                </Link>

                <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                    <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="calendar" />
                    <span className="ml-6 text-[#333333] font-medium">CALENDAR</span>
                </div>

                <div className="border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left">
                    <span className="text-sm text-[#7e8182]">ANALYZE</span>
                </div>

                <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                    <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="dashboard" />
                    <span className="ml-6 text-[#333333] font-medium">DASHBOARD</span>
                </div>

                <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                    <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="reports" />
                    <span className="ml-6 text-[#333333] font-medium">REPORTS</span>
                </div>

                <div className="border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left">
                    <span className="text-sm text-[#7e8182]">MANAGE</span>
                </div>

                <Link to="/projects">
                    <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                        <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="projects" />
                        <span className="ml-6 text-[#333333] font-medium">PROJECTS</span>
                    </div>
                </Link>

                <Link to="/teams">
                    <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                        <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="teams" />
                        <span className="ml-6 text-[#333333] font-medium">TEAMS</span>
                    </div>
                </Link>

                <Link to="/clients">
                    <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                        <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="clients" />
                        <span className="ml-6 text-[#333333] font-medium">CLIENTS</span>
                    </div>
                </Link>

                <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                    <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="tags" />
                    <span className="ml-6 text-[#333333] font-medium">TAGS</span>
                </div>

                <div className="hover:bg-[#e4eaee] cursor-pointer border-l-4 border-[#02a9f4] bg-white p-3.5 pr-7 text-left flex items-center">
                    <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="settings" />
                    <span className="ml-6 text-[#333333] font-medium">SETTINGS</span>
                </div>

                <div className="h-[12vh] bg-white border-l-4 border-[#02a9f4]">
                    <div className="h-full">.</div>
                </div>
            </div>
        </div>
    );
}
